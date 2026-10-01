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
    <BlogLayout id="002" emoji="🤖" title="Artificial Intelligence, Before Superintelligence" date="2023-04-01">
      <Seo
        title="002. Artificial Intelligence, Before Superintelligence"
        description="A first encounter with AI, the systems we are building now, and the question of what comes after."
        pathname="/blog/002-introduction-to-artificial-intelligence"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Artificial Intelligence, Before Superintelligence",
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
            <li className="mb-4"><strong>The Assignment:</strong> Build a registration system and a marks calculator that actually "thinks"—calculating averages and categories.</li>
            <li className="mb-4"><strong>The Panic:</strong> A looming deadline and a brain that still hadn't fully processed how <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[15px]">Function FindHighestMark</code> actually worked.</li>
            <li className="mb-4"><strong>The Lifeline:</strong> My first real interaction with ChatGPT. It didn't just write the code—it bridged the gap between my notes and the final product.</li>
            <li className="mb-4"><strong>The Bigger Question:</strong> If today's systems can extend our thinking, what would it mean for a system to consistently exceed it?</li>
          </ul>
          <br />
          <br />
        </section>

        <section className="intro-text">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-6 mt-12 md:mt-14 leading-tight">The Assignment Was Clear. The Logic Was Not.</h4>
          <p>
            The brief was straightforward: build a student registration system and a marks calculator that could think—calculating averages, finding the highest mark, and slotting each student into a result category. On paper, manageable. In practice, it was the most complicated thing I'd been asked to write up to that point.
          </p>
          <br />
          <p>
            It was my first real exposure to things like <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">Try...Catch</code> to stop the app from crashing on bad input, and <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">Select Case</code> to swap UI labels on the fly. The kind of things your lecturer explains once and then expects you to just know.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-6 mt-12 md:mt-14 leading-tight">The Logic That Felt Like a Puzzle</h4>
          <p>
            The part that made the most sense—once I sat with it long enough—was the category function. Three conditions, three outcomes. Clean.
          </p>
          <br />
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
            Below 40: Failed. Below 75: Passed. Anything else: Passed with Distinction. I understood that part. It was the rest—the imports, the ListBox updates, how all the functions were supposed to talk to each other—that felt like assembling furniture with half the instructions missing.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-6 mt-12 md:mt-14 leading-tight">The Deadline Was Not Waiting</h4>
          <p>
            I remember the pressure clearly. The assignment wasn't impossible—it was just that the deadline was breathing down my neck and I didn't have the full picture yet. My notes were there. The concepts were there, somewhere. But connecting them into something that actually ran? That was the gap.
          </p>
          <br />
          <p>
            That's when I turned to AI for the first time. Not to cheat—to see. I needed someone to show me the architecture, not just hand me the answer.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-6 mt-12 md:mt-14 leading-tight">The Lifeline</h4>
          <p>
            My first real conversation with ChatGPT wasn't about getting code written for me. It was about understanding how the pieces fit. One of the things I needed to figure out was how to generate a student number—unique, structured, automatic. The solution turned out to be simpler than I expected:
          </p>
          <br />
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-[16px] md:text-[20px] leading-[28px] md:leading-[38px]">
              <thead>
                <tr className="border-b border-[var(--border-primary)]">
                  <th className="py-3 pr-6 font-bold text-[var(--tw-text-gray-primary)]">Component</th>
                  <th className="py-3 pr-6 font-bold text-[var(--tw-text-gray-primary)]">Logic</th>
                  <th className="py-3 font-bold text-[var(--tw-text-gray-primary)]">Result Example</th>
                </tr>
              </thead>
              <tbody className="text-[var(--tw-text-gray-secondary)]">
                <tr className="border-b border-[var(--border-primary)]">
                  <td className="py-3 pr-6">Current Year</td>
                  <td className="py-3 pr-6"><code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[14px] md:text-[18px]">DateTime.Now.Year</code></td>
                  <td className="py-3">2023</td>
                </tr>
                <tr className="border-b border-[var(--border-primary)]">
                  <td className="py-3 pr-6">Gender Code</td>
                  <td className="py-3 pr-6">Male = 2000 / Female = 3000</td>
                  <td className="py-3">2000</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6">Student No.</td>
                  <td className="py-3 pr-6">Year &amp; (Gender + Count)</td>
                  <td className="py-3">20232001</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <p>
            It wasn't perfect. I was still learning what a <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">Class</code> actually did. But it worked. And in the lab, <em>"it works"</em> is the only sentence that matters.
          </p>
          <br />
          <p>
            This wasn't just an assignment. It was my introduction to the future of how I'd be building everything from then on. The difference between a failing grade and a finished project turned out to be a well-placed prompt.
          </p>
          <br />
          <h4 className="text-[24px] md:text-[32px] font-bold mb-6 mt-12 md:mt-14 leading-tight">Before Superintelligence</h4>
          <p>
            That first conversation also changed the question I was asking. Artificial intelligence is not one single machine with one single level of ability. A marks calculator follows rules. A language model finds patterns and generates useful possibilities. A more general system would need to reason across unfamiliar problems, learn from experience, and understand when its own answer is unreliable.
          </p>
          <br />
          <p>
            Superintelligence is the name people give to the far end of that idea: a system whose ability to learn, reason, and solve problems is substantially beyond the best human minds. It is still a hypothesis, not a feature I can point to in a demo. That distinction matters. The responsible question is not whether every impressive model is secretly superintelligent, but how we build systems that remain useful, understandable, and accountable as their capabilities grow.
          </p>
          <br />
          <p>
            I started with a small assignment and a well-placed prompt. The larger lesson was that intelligence is not only about producing an answer. It is also about knowing what the answer depends on, where it can fail, and who remains responsible for the result.
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

