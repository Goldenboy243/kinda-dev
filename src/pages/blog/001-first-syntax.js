import * as React from "react";

// Components
import BlogLayout from "../../components/BlogLayout";

// Syntax highlighting
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Styles
import "../../styles/global.scss";

const vbCode = `Public Class Form1
    Private Sub btnClick_Click()
        Dim greeting As String
        greeting = "Hello World"
        MsgBox(greeting)
    End Sub
End Class`;

const Post = () => {
  return (
    <BlogLayout id="001" emoji="💻" title="First Syntax" date="2023-01-01">
      <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[35px] md:leading-[50px] text-[18px] md:text-[26px]">
        <section className="tldr text-[18px] md:text-[25px] leading-[32px] md:leading-[45px]">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4">TL;DR</h4>
          <ul className="list-none pl-8">
            <li className="mb-4">
              <strong>The Expectation:</strong> I came for Python; I got Visual Basic.
            </li>
            <li className="mb-4">
              <strong>The Tools:</strong> Installing an IDE (Integrated Development Environment) called Visual Studio.
            </li>
            <li className="mb-4">
              <strong>The Reality:</strong> Writing a formal letter to the computer just to say "Hello World."
            </li>
          </ul>
          <br />
          <br />
        </section>

        <section className="intro-text">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4">Day One in IT</h4>
          <p>
            Today is my first actual day in IT. I'm finally here to see what programming really is and what tools we use. Before this, Python was the only language I'd even heard of, but the college decided otherwise—apparently, the first year belongs to VB.
          </p>
          <br />
          <p>
            What even is VB? It's a programming language, sure, but the setup feels like a lot. To code, you need an IDE (Integrated Development Environment). For us, that means Visual Studio. I'm a bit lost because there are so many things to remember and understand before you even write a single line, but it seems easy enough, so let's start with the basics: declaring a variable.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">The Paperwork Language</h4>
          <p>
            Programming is just telling the computer what to do, but in VB, the conversation feels a bit too formal. The syntax looks like this:
          </p>
          <br />
          <div className="mb-4 rounded-lg overflow-hidden text-[18px] leading-[30px]">
            <SyntaxHighlighter
              language="vbnet"
              style={coldarkDark}
              customStyle={{ borderRadius: "12px", padding: "24px" }}
            >
              {vbCode}
            </SyntaxHighlighter>
          </div>
          <br />
          <p>
            It seems a bit complicated just to display a simple message. Why do I need to define a <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">Public Class</code>, a <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">Private Sub</code>, and <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">Dim</code> a variable just for a "Hello World"? I was expecting a high-tech conversation with a machine; instead, it feels like I'm filling out paperwork.
          </p>
          <br />
          <p>
            I'm trying to keep up, but I can't help but wonder if there's a shorter way to do this. For now, I'm just following the rules and hoping the "why" becomes clear soon.
          </p>
          <br />
          <p className="italic text-[16px] md:text-[22px]">
            The journey begins.
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
    </BlogLayout>
  );
};

export default Post;

export const Head = () => <title>001. First Syntax | Nathan Kinda</title>;
