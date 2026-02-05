import * as React from "react";
import { gsap } from "gsap";
import "./index.scss";

const ImageCarousel = ({ experiments = [] }) => {
  const carouselRef = React.useRef(null);
  const slidesRef = React.useRef([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const autoPlayRef = React.useRef(null);

  const totalSlides = experiments.length;

  // Initialize slides refs
  React.useEffect(() => {
    slidesRef.current = slidesRef.current.slice(0, totalSlides);
  }, [totalSlides]);

  // Set initial positions
  React.useEffect(() => {
    if (slidesRef.current.length === 0) return;

    slidesRef.current.forEach((slide, index) => {
      if (!slide) return;
      
      const offset = index - currentIndex;
      gsap.set(slide, {
        zIndex: totalSlides - Math.abs(offset),
        scale: 1 - Math.abs(offset) * 0.12,
        x: offset * 80,
        y: offset * 25,
        opacity: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.25 : 0.08,
        rotationY: offset * -8,
        filter: offset === 0 ? 'blur(0px) grayscale(0)' : `blur(${Math.abs(offset) * 3}px) grayscale(0.5)`,
      });
    });
  }, []);

  // Auto-play functionality
  React.useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAnimating]);

  const animateSlides = (newIndex) => {
    if (isAnimating || newIndex === currentIndex) return;
    setIsAnimating(true);

    slidesRef.current.forEach((slide, index) => {
      if (!slide) return;

      const offset = index - newIndex;
      
      gsap.to(slide, {
        duration: 0.8,
        zIndex: totalSlides - Math.abs(offset),
        scale: 1 - Math.abs(offset) * 0.12,
        x: offset * 80,
        y: offset * 25,
        opacity: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.25 : 0.08,
        rotationY: offset * -8,
        filter: offset === 0 ? 'blur(0px) grayscale(0)' : `blur(${Math.abs(offset) * 3}px) grayscale(0.5)`,
        ease: "power3.out",
        onComplete: () => {
          if (index === newIndex) {
            setIsAnimating(false);
          }
        },
      });
    });

    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    animateSlides(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    animateSlides(prevIndex);
  };

  const goToSlide = (index) => {
    animateSlides(index);
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    autoPlayRef.current = setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, 4000);
  };

  if (experiments.length === 0) {
    return (
      <div className="carousel-empty">
        <p>No experiments to display yet.</p>
      </div>
    );
  }

  return (
    <div 
      className="image-carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-slides">
          {experiments.map((experiment, index) => (
            <div
              key={experiment.id}
              ref={(el) => (slidesRef.current[index] = el)}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <div className="slide-image-wrapper">
                <img
                  src={experiment.image}
                  alt={experiment.title}
                  className="slide-image"
                />
                <div className="slide-overlay">
                  <span className="slide-tag">{experiment.tag}</span>
                </div>
              </div>
              <div className="slide-content">
                <h3 className="slide-title">{experiment.title}</h3>
                <p className="slide-description">{experiment.description}</p>
                {/* Tech Stack Chips */}
                {experiment.tech && index === currentIndex && (
                  <div className="slide-tech-stack">
                    {experiment.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="slide-tech-chip">{tech}</span>
                    ))}
                    {experiment.tech.length > 4 && (
                      <span className="slide-tech-chip more">+{experiment.tech.length - 4}</span>
                    )}
                  </div>
                )}
                {experiment.link && index === currentIndex && (
                  <a
                    href={experiment.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="slide-view-button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Project</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="carousel-nav">
        <button
          className="nav-button prev"
          onClick={goToPrev}
          disabled={isAnimating}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </button>
        <button
          className="nav-button next"
          onClick={goToNext}
          disabled={isAnimating}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,6 15,12 9,18" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="carousel-dots">
        {experiments.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Current Slide Info */}
      <div className="carousel-counter">
        <span className="current">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="separator">/</span>
        <span className="total">{String(totalSlides).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default ImageCarousel;
