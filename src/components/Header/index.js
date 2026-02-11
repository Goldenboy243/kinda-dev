import * as React from "react";
import { Link } from "gatsby";
import ScrambleText from "../ScrambleText";
import { State } from "../Layout";

// Styles
import "./index.scss";

const Header = ({ isHomePage = false, onThemeChange, theme, disableScramble = false }) => {
  const { setModalIsOpened, setModalMessage } = React.useContext(State);
  const [pathname, setPathname] = React.useState("");
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setPathname(window.location.pathname);
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <header className="header">
      {isHomePage ? (
        <div className="header-holder flex-1 min-w-0">
          <p className="text-[var(--tw-text-gray-secondary)] sm:text-[18px] text-[14px]">
            <ScrambleText
              text={`Based on`}
              className="scramble-text"
              delay={1.5}
            />{" "}
            <strong className="underline">
              <small className="sm:text-[18px] text-[14px]">
                <ScrambleText
                  text={`Earth`}
                  className="scramble-text"
                  duration={3}
                />
              </small>
            </strong>
          </p>
          <br />
          <p className="text-[var(--tw-text-gray-secondary)] sm:text-[18px] text-[14px]">
            <ScrambleText
              text="Switch to"
              className="scramble-text"
              duration={3.5}
            />
            <span onClick={onThemeChange} className="underline cursor-pointer">
              <strong>
                <ScrambleText
                  text={`${theme === "dark" ? "Light" : "Dark"} mode`}
                  className="scramble-text"
                  duration={3.9}
                />
              </strong>
            </span>
          </p>
        </div>
      ) : (
        <p className="flex-1 min-w-0">
          {!isMobile ? (
            <Link to="/" className="sm:text-[18px] text-[14px]">
              {!disableScramble ? (
                <ScrambleText
                  text={`<- back to home`}
                  className="scramble-text"
                  duration={2}
                />
              ) : (
                <>{`<- back to home`}</>
              )}
            </Link>
          ) : (
            <Link to="/">
              {!disableScramble ? (
                <ScrambleText
                  text={`<- back`}
                  className="scramble-text sm:text-[18px] text-[14px]"
                  duration={2}
                />
              ) : (
                <>{`<- back`}</>
              )}
            </Link>
          )}
        </p>
      )}
      <div className="header-logo text-[var(--color-total)] flex-1 min-w-0 flex justify-center text-center">
        <Link to="/">
          {!disableScramble ? (
            <ScrambleText
              text="Don't Stop or Never Start"
              className="scramble-text"
              placeholder="*"
              duration={4.5}
            />
          ) : (
            <>Don't Stop or Never Start</>
          )}
        </Link>
      </div>

      <ul className="header-list flex-1 min-w-0">
        <li>
          <Link
            to="/about/"
            className={pathname?.startsWith("/about") ? `-active` : ``}
          >
            {!disableScramble ? (
              <ScrambleText
                text="About"
                className="scramble-text"
                duration={3}
              />
            ) : (
              <>About</>
            )}
          </Link>
        </li>

        <li>
          <Link
            to="/blog"
            title="soon"
            className={pathname?.startsWith("/blog") ? `-active` : ``}
          >
            {!disableScramble ? (
              <ScrambleText
                text="Blog"
                className="scramble-text"
                duration={3}
              />
            ) : (
              <>Blog</>
            )}
          </Link>
        </li>

        <li>
          <Link
            to="/experiments/"
            className={pathname?.startsWith("/experiments") ? `-active` : ``}
          >
            {!disableScramble ? (
              <ScrambleText
                text="Experiments"
                className="scramble-text"
                duration={3}
              />
            ) : (
              <>Experiments</>
            )}
          </Link>
        </li>
        <li>
          <Link
            to="/utilities/"
            className={pathname?.startsWith("/utilities") ? `-active` : ``}
          >
            {!disableScramble ? (
              <ScrambleText
                text="Utilities"
                className="scramble-text"
                duration={3}
              />
            ) : (
              <>Utilities</>
            )}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
