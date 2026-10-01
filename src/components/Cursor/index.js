import React, { useEffect } from "react";

import classnames from "classnames";

// Styles
import "./index.scss";

const Cursor = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const $outline = document.querySelector(".ppk-dot-outline");
    if (!$outline) return;

    let cursorVisible = true;
    let cursorEnlarged = false;

    const toggleCursorSize = () => {
      if (cursorEnlarged) {
        $outline.style.transform = "translate(-50%, -50%) scale(2)";
        $outline.style.borderColor = "white";
      } else {
        $outline.style.transform = "translate(-50%, -50%) scale(1)";
        $outline.style.borderColor = "var(--cursor-bg)";
      }
    };

    const toggleCursorVisibility = () => {
      $outline.style.opacity = cursorVisible ? 1 : 0;
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        cursorEnlarged = true;
        toggleCursorSize();
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) {
        cursorEnlarged = false;
        toggleCursorSize();
      }
    };
    const handleMouseDown = () => { cursorEnlarged = true; toggleCursorSize(); };
    const handleMouseUp = () => { cursorEnlarged = false; toggleCursorSize(); };
    const handlePointerMove = (e) => {
      cursorVisible = true;
      toggleCursorVisibility();
      $outline.style.left = `${e.clientX}px`;
      $outline.style.top = `${e.clientY}px`;
    };
    const handlePointerLeave = () => { cursorVisible = false; toggleCursorVisibility(); };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className={classnames("cursor")}>
      <div className="ppk-dot-outline"></div>
    </div>
  );
};

export default Cursor;
