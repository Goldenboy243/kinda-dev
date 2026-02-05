import * as React from "react";

// Components
import Header from "../components/Header";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import ImageCarousel from "../components/ImageCarousel";
import ScrambleText from "../components/ScrambleText";
import { State } from "../components/Layout";

// Styles
import "../styles/global.scss";
import "../styles/experiments.scss";

// Experiment data - Your actual projects
const experiments = [
  {
    id: 1,
    title: "iDeal Marketplace",
    description: "Campus-verified marketplace for students. Features Firebase authentication, email verification, admin dashboard, and a 72-hour auto-verification system.",
    image: "/images/experiments/ideal-marketplace.png",
    tag: "Full Stack",
    tech: ["Next.js", "React", "Firebase", "Firestore", "Tailwind", "Vercel"],
    link: "https://i-deal-marketplace.vercel.app",
    github: null, // Private repo
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern, animated portfolio built with Gatsby, GSAP, and Three.js. Features a 3D avatar, smooth page transitions, and interactive elements.",
    image: "/images/experiments/portfolio.png",
    tag: "Web Dev",
    tech: ["Gatsby", "React", "Three.js", "GSAP", "Tailwind"],
    link: "https://nathankinda.com",
    github: "https://github.com/Goldenboy243",
  },
];

// Get unique tags from experiments
const allTags = ["All", ...new Set(experiments.map((exp) => exp.tag))];

const ExperimentsPage = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  const [activeTag, setActiveTag] = React.useState("All");
  const [viewMode, setViewMode] = React.useState("carousel"); // "carousel" or "grid"
  const { theme, onThemeChange } = React.useContext(State);

  // Filter experiments based on active tag
  const filteredExperiments = activeTag === "All" 
    ? experiments 
    : experiments.filter((exp) => exp.tag === activeTag);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 1500);
  }, []);

  return (
    <>
      <Cursor />
      <div className="experiments-page">
        <Loader isOpened={isOpened} duration={1} />
        <Header hideShortcut onThemeChange={onThemeChange} theme={theme} />
        
        <main className="experiments-main">
          <div className="experiments-header">
            <h1 className="experiments-title">
              <ScrambleText
                text="Experiments"
                className="scramble-text"
                duration={2}
              />
            </h1>
            <p className="experiments-subtitle">
              <ScrambleText
                text="A collection of projects, prototypes, and creative explorations."
                className="scramble-text"
                duration={2.5}
              />
            </p>
          </div>

          {/* Filter Tags & View Toggle */}
          <div className="experiments-controls">
            <div className="filter-tags">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`filter-tag ${activeTag === tag ? "active" : ""}`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="view-toggle">
              <button
                className={`view-btn ${viewMode === "carousel" ? "active" : ""}`}
                onClick={() => setViewMode("carousel")}
                aria-label="Carousel view"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                </svg>
              </button>
              <button
                className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel View */}
          {viewMode === "carousel" && (
            <div className="carousel-section">
              <ImageCarousel experiments={filteredExperiments} />
            </div>
          )}

          {/* Grid View */}
          {viewMode === "grid" && (
            <div className="grid-section">
              {filteredExperiments.map((experiment) => (
                <div key={experiment.id} className="grid-card">
                  <div className="grid-card-image">
                    <img src={experiment.image} alt={experiment.title} />
                    <span className="grid-card-tag">{experiment.tag}</span>
                  </div>
                  <div className="grid-card-content">
                    <h3 className="grid-card-title">{experiment.title}</h3>
                    <p className="grid-card-description">{experiment.description}</p>
                    <div className="grid-card-tech">
                      {experiment.tech.map((t) => (
                        <span key={t} className="tech-chip">{t}</span>
                      ))}
                    </div>
                    <div className="grid-card-links">
                      {experiment.link && (
                        <a href={experiment.link} target="_blank" rel="noopener noreferrer" className="grid-link">
                          Live Demo ↗
                        </a>
                      )}
                      {experiment.github && (
                        <a href={experiment.github} target="_blank" rel="noopener noreferrer" className="grid-link secondary">
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="experiments-footer">
            <p className="footer-text">
              <ScrambleText
                text="More experiments coming soon..."
                className="scramble-text"
                duration={3}
              />
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default ExperimentsPage;

export const Head = () => <title>Experiments | Nathan Kinda</title>;
