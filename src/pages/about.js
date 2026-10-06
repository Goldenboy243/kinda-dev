import * as React from "react";
import classNames from "classnames";

// Components
import Header from "../components/Header";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";


import NathanKindaCV from "../files/Kinda_resume .pdf";
import { State } from "../components/Layout";
import Seo from "../components/Seo";

// Data
import {
  bioDescription,
  careerPath,
  academyPath,
  openSourcePath,
  volunteeringPath,
  hackingPath,
  achievementsPath,
} from "../data";

// Images
import headshot from "../images/headshot.jpeg";

// Styles
import "../styles/global.scss";
import "../styles/about.scss";
import Headshot from "../components/Headshot";

const panelMap = (index) => {
  const map = {
    0: (
      <ol className="career-path">
        <br />
        <div className="border-l-2 border-[var(--border-secondary)] pl-4">
          Check out my{" "}
          <a
            className="underline text-[var(--tw-text-gray-primary)] font-bold"
            href="https://linkedin.com"
          >
            LinkedIn experience section
          </a>{" "}
          for more details
        </div>
        {careerPath.map(({ role, details, description }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
              <p className="description">{description}</p>
            </li>
          );
        })}
      </ol>
    ),
    1: (
      <ol className="career-path -academic">
        {academyPath.map(({ role, details }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
            </li>
          );
        })}
      </ol>
    ),
    2: (
      <ol className="career-path -academic">
        {openSourcePath.map(({ role, details, description, link }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
              <p className="description">{description}</p>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="link">
                  {link}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    ),
    3: (
      <ol className="career-path -academic">
        {volunteeringPath.map(({ role, details, description }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
              <p className="description">{description}</p>
            </li>
          );
        })}
      </ol>
    ),
    4: (
      <ol className="career-path -academic">
        {hackingPath.map(({ role, details, description, link }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
              <p className="description">{description}</p>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="link">
                  {link}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    ),
    5: (
      <ol className="career-path -academic">
        {achievementsPath.map(({ role, details, description, link, paper, certificate }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
              <p className="description">{description}</p>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="link">
                  Verify publication venue
                </a>
              )}
              {paper && (
                <a href={paper} target="_blank" rel="noopener noreferrer" className="link">
                  Read research paper
                </a>
              )}
              {certificate && (
                <a href={certificate} target="_blank" rel="noopener noreferrer" className="link">
                  View publication certificate
                </a>
              )}
            </li>
          );
        })}
      </ol>
    ),
  };

  return map[index];
};

const About = () => {
  const [activePanel, setActivePanel] = React.useState(0);
  const { setCopied } = React.useContext(State);

  const copyText = () => {
    const copyPromise = (() => {
      if (typeof window === "undefined") return Promise.reject();
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(bioDescription);
      }

      const textarea = document.createElement("textarea");
      textarea.value = bioDescription;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);
      return success ? Promise.resolve() : Promise.reject();
    })();

    copyPromise.then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }, console.log);
  };

  const [isOpened, setIsOpened] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <>
      <Seo
        title="About"
        description="Software Developer. Innovator. Problem solver. Learn more about Nathan Kinda's career, education, and open-source contributions."
        pathname="/about"
      />
      <Cursor />

      <div className="about">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} disableScramble={true} />
        <main>
          <div className="headshot column">
            {isMobile ? <img src={headshot} alt="headshot" /> : <Headshot />}

            <a
              className="button -download -icon"
              href={headshot}
              download={true}
            >
              <FiDownload />
              <p>Download photo</p>
            </a>
          </div>
          <div className="bio column">
            <h3 className="about-title mb-2 font-bold text-[18px]">Bio</h3>
            <p className="paragraph">
               a Software Developer.  
            </p>
            <p className="paragraph">
              Innovator. Problem solver. bringing ideas to life through code. focussed on crafting efficient, scalable, and user-centric solutions.
              Multilingual communicator, passionate about leveraging technology to drive positive change and deliver exceptional digital experiences.
            </p>
            <ul className="control">
              <li>
                <button className="-icon" onClick={copyText}>
                  <FiCopy />
                  <p>Copy bio</p>
                </button>
              </li>
              <li>
                <a className="button -icon" href={NathanKindaCV} download={true}>
                  <FiDownload />
                  <p>Download CV</p>
                </a>
              </li>
            </ul>
            <div className="toggle">
              {[
                {
                  title: "Career",
                  isBlocked: false,
                },
                {
                  title: "Academy",
                  isBlocked: false,
                },
                {
                  title: "Open source",
                  isBlocked: false,
                },
                {
                  title: "Volunteering",
                  isBlocked: false,
                },
                {
                  title: "Hacking",
                  isBlocked: false,
                },
                {
                  title: "Achievements",
                  isBlocked: false,
                },
              ].map(({ title, isBlocked }, index) => {
                return (
                  <button
                    key={index}
                    className={classNames("-toggle", {
                      "--active font-bold": activePanel === index,
                      "-button-blocked": isBlocked,
                    })}
                    disabled={isBlocked}
                    title={isBlocked ? `soon` : title}
                    onClick={() => setActivePanel(index)}
                  >
                    {title}
                  </button>
                );
              })}
            </div>
            {panelMap(activePanel)}
          </div>
        </main>
        <Note />
      </div>
    </>
  );
};

export default About;
