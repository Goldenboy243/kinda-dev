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
              <p className="mb-3 text-[80px]">🤖</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                002. The Secret Shortcut
              </h3>
              <time
                dateTime="2023-01-15"
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
                  <li className="mb-4">The Project: I'm building a Student Registration Form in Visual Basic.</li>
                  <li className="mb-4">The Wall: Still struggling to "speak" the language—Dim, Integer, String.</li>
                  <li className="mb-4">The Discovery: ChatGPT and Bearly AI.</li>
                  <li className="mb-4">The Shift: Realizing that code isn't just about memorization; it's about leveraging the right tools.</li>
                </ul>
                <br />
                <br />
              </section>
              <section className="intro-text">
                <p>
                  The "WTF" phase of Visual Basic is still in full swing, but now there is a deadline. We have our first real assignment: a Student Registration Form.
                </p>
                <br />
                <p>
                  On paper, it sounds simple. In practice, it's a nightmare. I'm staring at the screen trying to understand why I have to write Dim just to declare a variable. I'm trying to wrap my head around Integers and Strings, but my brain is still thinking in electrical circuits. I know what I want the program to do, but I can't translate the logic into the syntax yet.
                </p>
                <br />
                <p>
                  Then, I find a secret weapon.
                </p>
                <br />
                <p>
                  There's a tool on everyone's lips right now: ChatGPT. I'm wondering what it actually is, so I start feeding it my problems. The early version is messy—it's not great at coding yet—but it's giving me a starting point.
                </p>
                <br />
                <p>
                  Then I discover Bearly AI. It feels more performant, like a combination of different models working together. Between a friend's help and these two AI tools (Don't tell anybody that I code with AI 😉), the assignment is finally coming together.
                </p>
                <br />
                <p>
                  I'm realizing that this journey is about more than just a passing grade. This is my first real contact with Artificial Intelligence. I'm learning that I don't have to struggle alone with every line of syntax to be a builder. I just need to know how to use the right tools to solve the problem.
                </p>
                <br />
                <p>
                  I came here to learn code, but I think I'm staying for the AI.
                </p>
                <br />
                <p>Hope you comeback.</p>
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
  <title>002. The Secret Shortcut | Nathan Kinda</title>
);
