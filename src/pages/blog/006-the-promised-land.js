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
              <p className="mb-3 text-[80px]">✨</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                006. The Promised Land?
              </h3>
              <time
                dateTime="2024-02-01"
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
                  <li className="mb-4">The High: The basics are a joke—print(), input(), and zero semicolons.</li>
                  <li className="mb-4">The Pivot: Moving into Web with Flask. What is an API anyway?</li>
                  <li className="mb-4">The Confusion: Connecting to Postman and MongoDB. I'm lost again.</li>
                </ul>
                <br />
                <br />
              </section>
              <section className="intro-text">
                <p>
                  It's finally happening. After months of begging for it while buried under Java classes and 8085 hex codes, I've touched the promised land. Python.
                </p>
                <br />
                <p>
                  At first, it feels like a dream. Coming from the violence of C and the "ceremony" of Java, Python is suspiciously easy. I'm looking at the screen and I can't believe the syntax:
                </p>
                <br />
                <p>Python basics</p>
                <SyntaxHighlighter className="overflow-scroll rounded-3xl" language="python" style={darcula}>
{`# The basics are almost too simple
name = input("Who are you? ")
a = 4
print(f"Hello {name}, your value is {a}")`}
                </SyntaxHighlighter>
                <br />
                <p>
                  No System.out.println, no MOV A, B. For the first time, my brain actually understands. I'm not fighting the syntax anymore; I'm actually solving problems.
                </p>
                <br />
                <p>
                  But then, the honeymoon ends.
                </p>
                <br />
                <p>
                  They introduce Flask and RESTful APIs. Suddenly, it's not just about simple scripts; it's about communication. What is an API? Application Programming Interface. It's the middleman. Now I'm dealing with Request methods—GET, POST, PUT, DELETE. I'm writing code that doesn't just run; it listens and responds.
                </p>
                <br />
                <p>
                  I'm currently trying to wrap my head around a basic Flask route:
                </p>
                <SyntaxHighlighter className="overflow-scroll rounded-3xl" language="python" style={darcula}>
{`from flask import Flask, request

app = Flask(__name__)

@app.route('/api/data', methods=['POST'])
def handle_request():
    data = request.json
    return {"message": "Data received", "status": 200}

if __name__ == '__main__':
    app.run(debug=True)`}
                </SyntaxHighlighter>
                <br />
                <p>
                  It looks cleaner than Java, but the logic is deep. I'm realizing that Python being "easy" just means I can build more complex things faster—which means I can get lost in the architecture even quicker. I'm told to connect this to something called Postman, but I still don't really know what it is. And then there's MongoDB. I know it's a database, but how to connect it? I have no idea.
                </p>
                <br />
                <p>
                  I'll find out soon enough.
                </p>
                <br />
                <p>Stay with me.</p>
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
  <title>006. The Promised Land? | Nathan Kinda</title>
);
