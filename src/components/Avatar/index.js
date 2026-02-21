import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";
import * as THREE from "three";
import gsap from "gsap";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./styles.scss";

const Avatar = forwardRef(({ theme }, ref) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const modelRef = useRef(null);
  const mouseLightRef = useRef(null);
  const ambientLightRef = useRef(null);
  const directionalLightRef = useRef(null);
  const originalMaterialRef = useRef({});
  const [error, setError] = useState(false);
  const baseScaleRef = useRef(2);
  const headBoneRef = useRef(null);
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const currentRotationRef = useRef({ x: 0, y: 0 });
  const targetIntensitiesRef = useRef({
    ambient: theme === "light" ? 3.9 : 0.8,
    directional: theme === "light" ? 1.3 : 0.8,
    mouse: theme === "light" ? 4 : 2,
  });

  // Update target intensities when theme changes
  useEffect(() => {
    targetIntensitiesRef.current = {
      ambient: theme === "light" ? 2.5 : 1,
      directional: theme === "light" ? 1.3 : 0.8,
      mouse: theme === "light" ? 4 : 2,
    };
  }, [theme]);

  const getModelScale = () => {
    const w = window.innerWidth;
    // Scale factors matched to original values:
    // Mobile (≤480): 0.5, Tablet (768): 0.65, Desktop (1280+): 1.0, Large (1920+): 0.9
    let factor;
    if (w <= 480) {
      factor = 0.5;
    } else if (w <= 768) {
      // Interpolate 0.5 → 0.65
      factor = 0.5 + (0.15 * (w - 480)) / (768 - 480);
    } else if (w <= 1280) {
      // Interpolate 0.65 → 1.0
      factor = 0.65 + (0.35 * (w - 768)) / (1280 - 768);
    } else if (w <= 1920) {
      // Stay at 1.0 for the main desktop range
      factor = 1.0;
    } else {
      // 1920+ → taper to 0.85 at 2560+
      factor = Math.max(0.85, 1.0 - (0.15 * (w - 1920)) / (2560 - 1920));
    }
    return baseScaleRef.current * factor;
  };

  const updateModelScale = (model) => {
    if (!model) return;
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = getModelScale() / maxDim;
    model.scale.set(scale, scale, scale);
  };

  const updateCameraSettings = () => {
    if (!controlsRef.current) return;
    const camera = controlsRef.current.object;
    controlsRef.current.minDistance = 0.5;
    controlsRef.current.maxDistance = 5;
    camera.updateProjectionMatrix();
  };

  const focusOnHead = (model) => {
    if (!headBoneRef.current) return;

    // Update world matrix for accurate positioning
    model.updateMatrixWorld(true);

    // Get head bone world position for precise targeting
    const headCenter = new THREE.Vector3();
    headBoneRef.current.getWorldPosition(headCenter);

    // Smooth vertical offset based on viewport width
    const w = window.innerWidth;
    let yOffset;
    if (w <= 480) {
      yOffset = 0.05;  // Mobile: slightly above center
    } else if (w <= 768) {
      yOffset = 0;      // Tablet: center on face
    } else if (w <= 1280) {
      yOffset = -0.08;  // Desktop: lower to eye level
    } else {
      yOffset = -0.12;  // Large: drop a bit more
    }
    headCenter.y += yOffset;

    const camera = controlsRef.current.object;
    // Responsive FOV: tighter on desktop for head-only framing
    const fov = w <= 480 ? 22 : w <= 768 ? 20 : 15;
    camera.fov = fov;
    // Responsive camera distance
    const camZ = w <= 480 ? 2.2 : w <= 768 ? 2.5 : 2.8;
    const yBias = 0.25;
    camera.position.set(headCenter.x, headCenter.y + yBias, camZ);
    camera.lookAt(headCenter.x, headCenter.y + yBias, headCenter.z);
    controlsRef.current.target.set(headCenter.x, headCenter.y + yBias, headCenter.z);
    controlsRef.current.update();
    camera.updateProjectionMatrix();
  };

  const handleMouseMove = (event) => {
    if (!mountRef.current || !mouseLightRef.current) return;
    const rect = mountRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    mouseLightRef.current.position.x = x * 5;
    mouseLightRef.current.position.y = -y * 5;

    if (headBoneRef.current) {
      let maxUp = Math.PI / 9;
      let maxDown = Math.PI / 4;
      let rotationX;
      if (y < 0) {
        rotationX = -y * maxUp;
      } else {
        rotationX = -y * maxDown;
      }
      const rotationY = (x * Math.PI) / 6;

      // Update target rotation
      targetRotationRef.current = {
        x: rotationX,
        y: rotationY,
      };
    }
  };

  const handleTouchMove = (event) => {
    if (!mountRef.current || !mouseLightRef.current) return;
    if (event.touches.length !== 1) return;
    const touch = event.touches[0];
    const rect = mountRef.current.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
    mouseLightRef.current.position.x = x * 5;
    mouseLightRef.current.position.y = -y * 5;

    if (headBoneRef.current) {
      let maxUp = Math.PI / 9;
      let maxDown = Math.PI / 4;
      let rotationX;
      if (y < 0) {
        rotationX = -y * maxUp;
      } else {
        rotationX = -y * maxDown;
      }
      const rotationY = (x * Math.PI) / 6;

      // Update target rotation
      targetRotationRef.current = {
        x: rotationX,
        y: rotationY,
      };
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      targetIntensitiesRef.current.ambient
    );
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const directionalLight = new THREE.DirectionalLight(
      0xffffff,
      targetIntensitiesRef.current.directional
    );
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    directionalLightRef.current = directionalLight;

    const mouseLight = new THREE.PointLight(
      0xffffff,
      targetIntensitiesRef.current.mouse,
      5
    );
    mouseLight.position.set(5, 0, 2);
    scene.add(mouseLight);
    mouseLightRef.current = mouseLight;

    mountRef.current.addEventListener("mousemove", handleMouseMove);
    mountRef.current.addEventListener("touchmove", handleTouchMove);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.minDistance = 0.5;
    controls.maxDistance = 5;
    controls.zoomSpeed = 0.5;
    controls.maxPolarAngle = Math.PI * 0.7;
    controls.minPolarAngle = Math.PI * 0.1;
    controls.enableRotate = false;
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.NONE,
      THREE: THREE.TOUCH.NONE,
    };
    controlsRef.current = controls;

    // Set initial camera to head-framing position before model loads
    // Responsive to viewport so there's no jump when focusOnHead runs
    const initW = window.innerWidth;
    const initFov = initW <= 480 ? 22 : initW <= 768 ? 20 : 15;
    const initCamZ = initW <= 480 ? 2.2 : initW <= 768 ? 2.5 : 2.8;
    camera.fov = initFov;
    camera.position.set(0, 0.25, initCamZ);
    camera.lookAt(0, 0.25, 0);
    controls.target.set(0, 0.25, 0);
    camera.updateProjectionMatrix();

    // Hidden placeholder (invisible) — replaced when model loads
    const geometry = new THREE.BoxGeometry(0.01, 0.01, 0.01);
    const material = new THREE.MeshBasicMaterial({ visible: false });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    modelRef.current = cube;
    const loader = new GLTFLoader();
    const path = "/files/avatar-6.glb";
    loader.load(
      path,
      (gltf) => {
        scene.remove(cube);
        const model = gltf.scene;
        baseScaleRef.current = 2;
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        updateModelScale(model);
        model.position.sub(center);
        scene.add(model);
        modelRef.current = model;
        model.traverse((node) => {
          if (
            node.isMesh &&
            node.material &&
            node.material.name === "avaturn_look_0_material"
          ) {
            if (!originalMaterialRef.current.saved) {
              originalMaterialRef.current = {
                color: node.material.color.clone(),
                map: node.material.map,
                saved: true,
              };
            }
          }
          if (node.isBone && node.name.toLowerCase().includes("head")) {
            headBoneRef.current = node;
          }
        });
        
        focusOnHead(model);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
        setError(true);
      }
    );
    const idleStartTime = Date.now();
    let animFrameId;
    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      if (modelRef.current) {
        const t = (Date.now() - idleStartTime) / 1000;
        modelRef.current.position.x += Math.sin(t * 0.2) * 0.00003;
        modelRef.current.position.z += Math.cos(t * 0.9) * 0.0004;
        modelRef.current.rotation.y = Math.sin(t * 0.5) * 0.005;
        modelRef.current.rotation.x = Math.sin(t * 0.1) * 0.0001;
        modelRef.current.rotation.z = Math.cos(t * 0.4) * 0.00015;
      }

      // Smoothly interpolate light intensities
      if (ambientLightRef.current) {
        ambientLightRef.current.intensity = THREE.MathUtils.lerp(
          ambientLightRef.current.intensity,
          targetIntensitiesRef.current.ambient,
          0.05
        );
      }
      if (directionalLightRef.current) {
        directionalLightRef.current.intensity = THREE.MathUtils.lerp(
          directionalLightRef.current.intensity,
          targetIntensitiesRef.current.directional,
          0.05
        );
      }
      if (mouseLightRef.current) {
        mouseLightRef.current.intensity = THREE.MathUtils.lerp(
          mouseLightRef.current.intensity,
          targetIntensitiesRef.current.mouse,
          0.05
        );
      }

      // Smooth head rotation
      if (headBoneRef.current) {
        // Interpolate current rotation towards target rotation
        currentRotationRef.current.x = gsap.utils.interpolate(
          currentRotationRef.current.x,
          targetRotationRef.current.x,
          0.2
        );
        currentRotationRef.current.y = gsap.utils.interpolate(
          currentRotationRef.current.y,
          targetRotationRef.current.y,
          0.2
        );

        // Apply interpolated rotation
        headBoneRef.current.rotation.x = currentRotationRef.current.x;
        headBoneRef.current.rotation.y = currentRotationRef.current.y;
      }

      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      updateCameraSettings();
      renderer.setSize(width, height);
      if (modelRef.current) {
        updateModelScale(modelRef.current);
        focusOnHead(modelRef.current);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeEventListener("mousemove", handleMouseMove);
        mountRef.current.removeEventListener("touchmove", handleTouchMove);
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []); // Remove theme dependency since we're using refs

  // Apply white color and remove texture only when theme changes
  useEffect(() => {
    if (!modelRef.current) return;
    modelRef.current.traverse((node) => {
      if (
        node.isMesh &&
        node.material &&
        node.material.name === "avaturn_look_0_material"
      ) {
        if (theme === "light") {
          if (node.material.map) {
            node.material.map = null;
          }
          node.material.color.set("#ffffff");
          node.material.needsUpdate = true;
        } else if (theme === "dark" && originalMaterialRef.current.saved) {
          node.material.color.copy(originalMaterialRef.current.color);
          node.material.map = originalMaterialRef.current.map;
          node.material.needsUpdate = true;
        }
      }
    });
  }, [theme]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="avatar-container" ref={mountRef}>
      {error ? (
        <div className="error">
          <p>3D model not available</p>
          <p className="subtitle">
          {/* will need to create my avatar asap */}
            Please add your avatar.glb file to /static/files/
          </p>
        </div>
      ) : null}
    </div>
  );
});

export default Avatar;
