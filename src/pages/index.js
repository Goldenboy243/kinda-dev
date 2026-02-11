import * as React from "react";

// Components
import Header from "../components/Header";
import { Link } from "gatsby";
import Footer from "../components/Footer";
import Shortcut from "../components/Shortcut";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";

// Styles
import "../styles/global.scss";
import "../styles/index.scss";

// Content
import { articles } from "../data/blog";
import Avatar from "../components/Avatar";
import { State } from "../components/Layout";
import ScrambleText from "../components/ScrambleText";

const IndexPage = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  const { theme, onThemeChange } = React.useContext(State);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 1500);
  }, []);

  return (
    <>
      <Cursor />
      <div className="home overflow-hidden">
        <Loader isOpened={isOpened} duration={1} />
        <Header isHomePage onThemeChange={onThemeChange} theme={theme} />
        <main className="overflow-hidden">
          <div className="avatar-section">
            <Avatar theme={theme} />
          </div>
          <div className="banner-holder z-50 fixed inset-0 flex justify-center items-center">
            <h1 className="banner-title flex text-[var(--tw-text-gray-primary)] flex-col items-end text-right font-bold w-full max-w-[300px] flex-shrink-0">
              <ScrambleText
                text="Nathan"
                className="scramble-text w-full"
                duration={3}
                placeholder="."
              />

              <ScrambleText
                text="Kinda"
                className="scramble-text w-full"
                duration={3}
                placeholder="."
              />
            </h1>
            <span className="hidden xl:block w-[420px]"> </span>
            <div className="banner-description w-full max-w-[350px] text-left flex justify-end flex-col pl-0 xl:pl-[80px] items-start">
              <p className="mb-4 sm:mb-7">
                A{" "}
                <strong className="text-[var(--tw-text-gray-primary)] font-bold">
                  <ScrambleText
                    text="Software Developer"
                    className="scramble-text inline-block"
                    duration={2}
                    placeholder="."
                  />
                </strong>{" "}
                Building digital experiences that make a difference.
              </p>
              <Shortcut text="to start" />
            </div>
          </div>

          <Link
            to="/blog"
            title="soon"
            className="blog-ticker-title text-[var(--tw-text-gray-secondary)] fixed z-[100] left-[20px] sm:text-[18px] text-[14px] bottom-[60px] sm:bottom-[65px]"
          >
            <ScrambleText
              text={`Latest posts ↓`}
              className="scramble-text"
              duration={2}
            />
          </Link>
          <p className="fixed z-[100] sm:text-[18px] text-right sm:bottom-[65px] text-[14px] right-[20px] text-[var(--tw-text-gray-secondary)] bottom-[60px]">
            <ScrambleText
              text={`Like this website?`}
              className="scramble-text"
              duration={2}
            />
            <a className="underline " href="https://github.com/Goldenboy243">
              <ScrambleText
                text={`Copy here`}
                className="scramble-text"
                duration={2}
              />
            </a>
          </p>
          <div className="blog-ticker">
            <div className="blog-ticker-wrapper">
              {articles
                .flatMap((yearGroup) => yearGroup.posts)
                .filter((post) => post.active)
                .reverse()
                .map((post, index) => {
                  return (
                    <a
                      key={`${post.id}-${index}`}
                      href={post.link}
                      disabled={!post.active}
                      className={`blog-ticker-item relative text-[var(--tw-text-gray-secondary)] bg-[var(--bg-primary)] border-[1px] border-[var(--border-primary)] hover:border-[var(--border-primary)] ${
                        post.active
                          ? ""
                          : "-link-blocked cursor-not-allowed pointer-events-none"
                      }`}
                      title={post.active ? "Read now" : "Coming soon"}
                    >
                      <span className="emoji">{post.emoji}</span>
                      {!post.active ? (
                        <span className="absolute top-0 right-0 bg-white text-black px-2 py-1 font-bold text-xs">
                          soon
                        </span>
                      ) : null}
                      <h3>{post.title} -&gt;</h3>
                    </a>
                  );
                })}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Don't Stop Or Never Start</title>;
