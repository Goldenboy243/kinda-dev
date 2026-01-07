import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

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
              <p className="mb-3 text-[80px]">🏗️</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                007. The Broken Bridge
              </h3>
              <time
                dateTime="2024-03-01"
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
                  <li className="mb-4">The Escape: Dumping the backend because I’m a "Frontend guy" now.</li>
                  <li className="mb-4">The Reality Check: DBMS class drags me back to CREATE TABLE and Primary Keys.</li>
                  <li className="mb-4">The Solution: AI (Grok) becomes the partner I need to bridge the gap.</li>
                </ul>
                <br />
                <br />
              </section>
              <section className="intro-text">
                <p>
                  I thought I was out. I figured I could just stay on the Frontend where things are visual and "safe," so I let everything about Postman and MongoDB slide right out of my brain. I don’t remember them at all. But then, the curriculum dragged me back. DBMS (Database Management System).
                </p>
                <br />
                <p>
                  Suddenly, I’m back in the basement, but this time it's SQL. It’s all about attributes, schemas, and the rigid logic of relations. It’s funny—on one hand, I’m trying to be a modern developer, and on the other, I’m writing these ancient-looking table definitions.
                </p>
                <br />
                <p>SQL</p>
                <SyntaxHighlighter className="overflow-scroll rounded-3xl" language="sql" style={darcula}>
{`-- The easy part: Creating the structure
CREATE TABLE Listings (
    id INT PRIMARY KEY,
    house_type VARCHAR(50),
    price_usd DECIMAL(10, 2),
    location VARCHAR(100)
);
`}
                </SyntaxHighlighter>
                <br />
                <p>
                  Looks easy, right? No, it’s not. Creating a database is so much more than just a few lines of code. The database creation was the simple part—anyone can write a table. But the logic? The "Middleman"? That was the nightmare. Trying to get the app to actually talk to that SQL table felt like a broken bridge.
                </p>
                <br />
                <p>Python</p>
                <SyntaxHighlighter className="overflow-scroll rounded-3xl" language="python" style={darcula}>
{`# The hard part: Making it talk
class Property:
    def __init__(self, house_type, price, location):
        self.house_type = house_type
        self.price = price
        self.location = location

# Managing the routes, the requests, the errors... I'm finished.
`}
                </SyntaxHighlighter>
                <br />
                <p>
                  I was lost, but again, the AI Revolution truly started making sense. It changed everything. I remember using AI to survive my first application in VB, but now it was my partner for building bigger projects. The ideas were endless. It wasn't about memorizing syntax anymore; it was about understanding the architecture. AI made the connection clear, and I finally managed to build it. It wasn't perfect, but at least it was working. And as the rule goes: If it works, don’t touch it.
                </p>
                <br />
                <p>
                  I’m realizing now that the hardest part isn’t storing the data—it’s managing the conversation between the user and the machine.
                </p>
                <br />
                <p>Surviving the syntax.</p>
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
  <title>007. The Broken Bridge | Nathan Kinda</title>
);
