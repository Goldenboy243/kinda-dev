import * as React from "react";

// Components
import Header from "../../components/Header";
import Note from "../../components/Note";
import Loader from "../../components/Loader";
import Cursor from "../../components/Cursor";

// Styles
import "../../styles/global.scss";

const Post = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);

  return (
    <>
      <Cursor />
      <div className="post">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} disableScramble={true} />
        <main className="flex flex-col mb-10 max-w-[900px]">
          <article className="blog-intro">
            <header className="px-[5%] mb-4">
              <p className="mb-3 text-[80px]">🏢</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                008. The Enterprise Final Boss
              </h3>
              <time
                dateTime="2024-04-01"
                className="text-[18px] text-[var(--tw-text-gray-secondary)]"
              >
                2024
              </time>
            </header>
            <br />
            <br />
            <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section className="tldr text-[25px] leading-[45px]">
                <p className="mb-4">
                  <strong>TL;DR</strong>
                </p>
                <ul className="list-disc pl-8">
                  <li className="mb-4">The IDE Shock: Goodbye VS Code, hello Eclipse. It feels like I’ve stepped back in time.</li>
                  <li className="mb-4">The Tech Stack: Servlets, JSP, Hibernate, and Spring Boot. The memorization never stops.</li>
                  <li className="mb-4">The Realization: I was being dramatic about C. Java Enterprise Edition is the real enemy.</li>
                </ul>
                <br />
                <br />
              </section>
              <section className="intro-text">
                <p>
                  Just when I thought I had a handle on things, the world of Java Enterprise Edition arrived.
                </p>
                <br />
                <p>
                  First, they took away my VS Code. Now I’m stuck in Eclipse, a new IDE that feels like a maze. They say Java Enterprise isn't for beginners, and I’m quickly finding out why. The Oracle Database has decided it never wants to leave me alone, and now it’s brought friends: Servlets, JSP, Hibernate, and Spring Boot.
                </p>
                <br />
                <p>
                  What even is this? Every time I think I’ve reached the end of the things I need to learn, five more technologies appear. People tell you "don’t memorize, just understand and read the documentation," but let’s be honest—when is it going to end?
                </p>
                <br />
                <p>
                  I used to complain about C. I thought pointers were the end of the world. But looking at the complexity of Spring Boot and the rigidness of Enterprise Java, I realize I was just being dramatic. C was simple. C was honest. This version of Java? It wants to finish me completely.
                </p>
                <br />
                <p>
                  I’m currently drowning in configurations and annotations, wondering how many more "final bosses" are left in this degree.
                </p>
                <br />
                <p>One query at a time.</p>
              </section>
            </div>
            <br />
            <br />

            <a href={"/blog/"} className="px-[5%] text-[16px]">
              {"<- "} Back to blog
            </a>
            <br />
            <br />
            <br />
          </article>
        </main>
        <Note />
      </div>
    </>
  );
};

export default Post;

export const Head = () => (
  <title>008. The Enterprise Final Boss | Nathan Kinda</title>
);
