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
              <p className="mb-3 text-[80px]">🌪️</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                005. Where is python ?
              </h3>
              <time
                dateTime="2024-01-01"
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
                  <li className="mb-4">The Betrayal: C is back for DSA. Stacks, queues, and memory management are killing me.</li>
                  <li className="mb-4">The Confusion: 8085 Assembly. Machine what? Why am I writing code for a microprocessor?</li>
                  <li className="mb-4">The Overload: Java OOP and OS deadlocks. I think they want me dead.</li>
                </ul>
                <br />
                <br />
              </section>
              <section className="intro-text">
                <p>
                  I honestly thought I was done with the heavy lifting, but I was wrong. Completely wrong.
                </p>
                <br />
                <p>
                  Second year is here and it's a total wreck. We are diving into DSA (Data Structures and Algorithms) and guess what? C is back. I thought I had moved past it, but now I'm fighting with malloc, realloc, stacks, and queues. Just when I thought I could breathe, the complexity doubled. I'm looking at the screen thinking: <em>Where is Python? Why am I still manual-handling memory like it's 1970?</em>
                </p>
                <br />
                <p>
                  And then, they throw Java into the mix. I think these people are evil; they just want me dead (don't tell them :)). Object-Oriented Programming (OOP) sounds great in theory, but in practice, I'm finished. Inheritance, encapsulation, polymorphism—it's a lot of big words for things that are making my life a living hell.
                </p>
                <br />
                <p>
                  As if that wasn't enough, we have COMA and Operating Systems. I'm learning the 8085 microprocessor. Assembly language? Machine what? I'm writing cryptic instructions for a chip while simultaneously trying to understand OS deadlocks and IPC. My brain is at its absolute limit.
                </p>
                <br />
                <p>
                  I'm realizing that the hardest part of Computer Science isn't just the code—it's the ego. I have a million questions, but I keep my mouth shut. I don't want to be the one to admit I'm lost. I look around at everyone else, and it feels like a conspiracy. If they can see the logic, why am I still stuck in the dark?
                </p>
                <br />
                <p>
                  It feels like the end of the road, but I've already started, so I can't stop now. But man, where is the promised land? Where is Python?
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
  <title>005. Where is python ? | Nathan Kinda</title>
);
