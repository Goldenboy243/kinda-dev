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
          <article class="blog-intro">
            <header className="px-[5%] mb-4">
              <p className="mb-3 text-[80px]">�</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-4 font-black w-full md:mt-0 leading-[60px]">
                000. Origin
              </h3>
              <time datetime="2020-01-01" className="text-[18px] text-[#bbb]">
                 2020
              </time>
            </header>
            <br />
            <br />
            <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section class="intro-text">
                <h4 className="text-[31px] font-bold mb-4">The Crossroads of Medicine and Independence</h4>
                <p>
                  In 2020, while the world was slowing down, my life was accelerating toward a single question: <em>What now?</em>
                </p>
                <br />
                <p>
                  Growing up, the path for a "successful" man is usually narrow. My parents saw me in a white coat as a doctor. It is a noble, stable, and respected path. But inside, I felt no spark for it. With a background in Electricity, I understood circuits and power—but I didn't know how to turn that into the freedom I craved.
                </p>
                <br />
                <p>
                  At 17, my definition of success was simple: <strong>Independence</strong>. I wanted to be my own boss. Like many of my peers, I looked at the markets. Trading seemed like the fast track to wealth and the "laptop lifestyle." I spent hours thinking about charts and financial freedom.
                </p>
                <br />
                <p>
                  Coding hadn't always been what I had in mind. My brother was the first to plant the seed of programming. At first, I didn't get it. To me, it was just lines of text.
                </p>
                <br />
                <h4 className="text-[32px] font-bold mb-4 mt-8">The Realization</h4>
                <p>
                  It took a rejection from Medical School to clear the fog. That "No" from the university was the "Yes" I needed for my career. I looked at programming again, but this time through a different lens. I realized code was the bridge between all my interests:
                </p>
                <br />
                <ul className="list-none pl-8">
                  <li className="mb-4">• If I wanted to trade, I could build bots to do it for me.</li>
                  <li className="mb-4">• If I wanted to help people, I could build tools for doctors.</li>
                  <li className="mb-4">• If I wanted to be free, I could work from anywhere.</li>
                </ul>
                <br />
                <p>
                  I traded the stethoscope for a keyboard. I initially looked for something that could be a natural evolution of my Electricity background—like Robotics—but settled into IT. I didn't choose tech because it was trendy; I chose it because it was the only path that offered no limits.
                </p>
                <br />
                <h4 className="text-[32px] font-bold mb-4 mt-8">TL;DR:</h4>
                <ul className="list-none pl-8">
                  <li className="mb-4"><strong>The Background:</strong> Electricity student.</li>
                  <li className="mb-4"><strong>The Conflict:</strong> Medicine (Parents) vs. Trading (Personal interest) vs. Architecture (Friends).</li>
                  <li className="mb-4"><strong>The Pivot:</strong> Medical school rejection led to the discovery of Tech's true potential.</li>
                  <li className="mb-4"><strong>The Goal:</strong> Full-stack independence and automated finance.</li>
                </ul>
                <br />
                <p className="italic">
                  This is 000. The beginning of the log.
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

export const Head = () => <title>001. Starting... | Nathan Kinda</title>;