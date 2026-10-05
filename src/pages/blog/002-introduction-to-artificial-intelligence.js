import * as React from "react";

// Components
import BlogLayout from "../../components/BlogLayout";
import Seo from "../../components/Seo";

// Syntax highlighting
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Styles
import "../../styles/global.scss";

const categoryCode = `Function Category(mark As Integer) As String
  If mark < 40 Then
    Return "Failed"
  ElseIf mark < 75 Then
    Return "Passed"
  Else
    Return "Passed with Distinction"
  End If
End Function`;

const Post = () => {
  return (
    <BlogLayout id="002" emoji="🤖" title="Introduction to Artificial Intelligence" date="2023-04-01">
      <Seo
        title="002. Introduction to Artificial Intelligence"
        description="A first encounter with AI, the systems we are building now, and the question of what comes after."
        pathname="/blog/002-introduction-to-artificial-intelligence"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Introduction to Artificial Intelligence",
          description: "A first encounter with AI, the systems we are building now, and the question of what comes after.",
          author: { "@type": "Person", name: "Nathan Kinda" },
          datePublished: "2023-04-01",
          url: "https://nathankinda.com/blog/002-introduction-to-artificial-intelligence",
        }}
      />
      <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[35px] md:leading-[50px] text-[18px] md:text-[26px]">
        <section className="tldr text-[18px] md:text-[25px] leading-[32px] md:leading-[45px]">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4">TL;DR</h4>
          <ul className="list-none pl-8">
            <li className="mb-4"><strong>The Assignment:</strong> Build a registration system and a marks calculator that could calculate averages and categories.</li>
            <li className="mb-4"><strong>The Problem:</strong> I understood the brief, but not yet how all the functions were supposed to work together.</li>
            <li className="mb-4"><strong>The Lifeline:</strong> My first serious conversation with ChatGPT turned my scattered notes into a structure I could follow.</li>
            <li className="mb-4"><strong>The Question:</strong> If AI can extend our thinking, what happens when a system begins to exceed it?</li>
          </ul>
          <br />
          <br />
        </section>

        <section className="intro-text">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4 leading-tight">The Assignment Was Clear. The Logic Was Not.</h4>
          <p>
            I am staring at a student registration system and a marks calculator. The brief is straightforward: calculate averages, find the highest mark, and place each student into a result category. On paper, manageable. In practice, it is the most complicated thing I've been asked to write up to that point.
          </p>
          <br/>
          <p>
            This is my first real exposure to things like <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">Try...Catch</code> for bad input and <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">Select Case</code> for changing labels on the screen. The kind of things your lecturer explains once and then expects you to just know.
          </p>
          <br/>

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">The Logic That Felt Like a Puzzle</h4>
          <p>
            The category function is the part that makes sense once I sit with it long enough. Three conditions, three outcomes. Clean.
          </p>
          <br/>
          <div className="mb-4 rounded-lg overflow-hidden text-[18px] leading-[30px]">
            <SyntaxHighlighter
              language="vbnet"
              style={coldarkDark}
              customStyle={{ borderRadius: "12px", padding: "24px" }}
            >
              {categoryCode}
            </SyntaxHighlighter>
          </div>
          <br />
          <p>
            Below 40: Failed. Below 75: Passed. Anything else: Passed with Distinction. I understand that part. It is the rest—the imports, the ListBox updates, and how the functions talk to each other—that feels like assembling furniture with half the instructions missing.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">The Deadline Was Not Waiting</h4>
          <p>
            The assignment is not impossible. The deadline is just breathing down my neck and I do not have the full picture yet. My notes are there. The concepts are there, somewhere. Connecting them into something that actually runs is the gap.
          </p>
          <br />
          <p>
            That is when I turn to AI for the first time. Not to escape the work. To see it. I need something to show me the architecture, not simply hand me an answer.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">The Lifeline</h4>
          <p>
            My first conversation with ChatGPT is not about getting code written for me. It is about understanding how the pieces fit. One thing I need to figure out is how to generate a student number—unique, structured, automatic. The solution turns out to be simpler than I expected:
          </p>
          <br />
          <div className="mb-4 rounded-lg overflow-hidden text-[18px] leading-[30px]">
            <SyntaxHighlighter
              language="text"
              style={coldarkDark}
              customStyle={{ borderRadius: "12px", padding: "24px" }}
            >
              {"2023 + 2000 + 1 = 20232001"}
            </SyntaxHighlighter>
          </div>
          <br />
          <p>
            It is not perfect. I am still learning what a <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">Class</code> actually does. But it works. And in the lab, <em>"it works"</em> is the only sentence that matters.
          </p>
          <br />
          <p>
            This is not just an assignment. It is my introduction to a different way of building. The difference between a failing grade and a finished project turns out to be a well-placed prompt—and the willingness to understand what comes back.
          </p>
          <br />
          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">Before Superintelligence</h4>
          <p>
            That first conversation changes the question I am asking. Artificial intelligence is not one single machine with one single level of ability. A marks calculator follows rules. A language model finds patterns and generates useful possibilities. A more general system would need to reason across unfamiliar problems, learn from experience, and understand when its own answer is unreliable.
          </p>
          <br />
          <p>
            Superintelligence is the name people give to the far end of that idea: a system whose ability to learn, reason, and solve problems is substantially beyond the best human minds. It is still a hypothesis, not a feature I can point to in a demo. That distinction matters. The question is not whether every impressive model is secretly superintelligent. The question is how we build systems that remain useful, understandable, and accountable as their capabilities grow.
          </p>
          <br />
          <p>
            I start with a small assignment and a well-placed prompt. The larger lesson is that intelligence is not only about producing an answer. It is also about knowing what the answer depends on, where it can fail, and who remains responsible for the result.
          </p>
          <br />
          <p className="italic text-[16px] md:text-[22px]">
            The logic is finally loading. The bigger questions are, too.
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

