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
              <p className="mb-3 text-[80px]">🏛️</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                003. The Great Shift
              </h3>
              <time
                dateTime="2023-02-01"
                className="text-[18px] text-[var(--tw-text-gray-secondary)]"
              >
                2023
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
                  <li className="mb-4">The Decision: Moving from IT to Computer Science and Engineering.</li>
                  <li className="mb-4">The Shock: Trading the comfort of Visual Basic for the raw power of C.</li>
                  <li className="mb-4">The Reality: I thought coding was just reading theory—now I'm fighting logic puzzles like the Tower of Hanoi.</li>
                </ul>
                <br />
                <br />
              </section>
              <section className="intro-text">
                <p>
                  I'm realizing that coding isn't just text on a screen. It's not a set of instructions you read from a textbook and memorize. It's logic, math, problem-solving, and a kind of critical thinking I've never used before.
                </p>
                <br />
                <p>
                  I want more than just building forms in Visual Basic. I want the "futuristic" stuff—Python, AI, and deeper systems. So, I'm making the jump: I'm shifting from IT to Computer Science and Engineering.
                </p>
                <br />
                <p>
                  And then comes the shock.
                </p>
                <br />
                <p>
                  I'm starting with C. If VB was a conversation, C is a machine. The syntax is completely different. It's tight, it's strict, and it feels wild. Theoretically, the concepts make sense, but practically? It's a battle.
                </p>
                <br />
                <p>
                  My first real challenge is the Tower of Hanoi. Standing in front of this puzzle, I realize my brain has to re-wire itself. It's not about making a button look good anymore; it's about understanding recursion and how data actually moves.
                </p>
                <br />
                <p>
                  I'm lost, and I'm starting to see that this is just the beginning. The comfort of my old background is gone. This is a new kind of circuit, and it's a lot harder to debug.
                </p>
                <br />
                <p>
                  The grind continues.
                </p>
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
  <title>003. The Great Shift | Nathan Kinda</title>
);
