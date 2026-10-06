import * as React from "react";

// Components
import BlogLayout from "../../components/BlogLayout";
import Seo from "../../components/Seo";

// Syntax highlighting
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Styles
import "../../styles/global.scss";

const cCode = `#include <stdio.h>

int main(void) {
  int mark = 78;
  int *markAddress = &mark;

  printf("Mark: %d\\n", *markAddress);
  return 0;
}`;

const Post = () => {
  return (
    <BlogLayout id="003" emoji="🖊️" title="Programming in C" date="2023-03-01">
      <Seo
        title="003. Programming in C"
        description="My first programming language, learned with a pen, paper, and ANSI C before the IDE."
        pathname="/blog/003-programming-in-c"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Programming in C",
          description: "My first programming language, learned with a pen, paper, and ANSI C before the IDE.",
          author: { "@type": "Person", name: "Nathan Kinda" },
          datePublished: "2023-03-01",
          url: "https://nathankinda.com/blog/003-programming-in-c",
        }}
      />
      <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[35px] md:leading-[50px] text-[18px] md:text-[26px]">
        <section className="tldr text-[18px] md:text-[25px] leading-[32px] md:leading-[45px]">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4">TL;DR</h4>
          <ul className="list-none pl-8">
            <li className="mb-4"><strong>The Beginning:</strong> C was the first language I learned when I started my Computer Science and Engineering degree.</li>
            <li className="mb-4"><strong>The Classroom:</strong> I started with a pen, paper, and ANSI C 9th Edition—not an IDE.</li>
            <li className="mb-4"><strong>The Shift:</strong> VB gave me elements to place. C gave me a blank screen and asked me to build everything.</li>
            <li className="mb-4"><strong>The Warning:</strong> Pointers, dynamic memory, data structures, and algorithms are where the hair starts disappearing. 😂</li>
          </ul>
          <br />
          <br />
        </section>

        <section className="intro-text">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4">The First Language Was on Paper</h4>
          <p>
            C was the first programming language I learned when I started my Computer Science and Engineering degree. But it did not begin inside an IDE. It began with a pen, a sheet of paper, and a reference book: <em>ANSI C 9th Edition</em>.
          </p>
          <br />
          <p>
            At that point, I did not really understand programming. When I started with VB, I knew the names of types like <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">Integer</code> and <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">String</code>, but knowing the vocabulary was not the same as understanding the language.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">VB Gave Me a Place to Start</h4>
          <p>
            VB felt approachable because I could place an element on a form and then write code for it. A button existed before I had to explain every detail of the button. The interface gave me something visible to hold on to while I learned the basics.
          </p>
          <br />
          <p>
            The book changed that. Starting from the basics forced me to slow down and understand what a program was doing instead of only memorising the names of its types.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">No Buttons. Just a Blank Screen.</h4>
          <p>
            C was another thing entirely. There was no form to arrange and no button to drag onto a window. Just a blank screen and line after line of code. Every detail belonged to me: the header, the function, the braces, the statement, and the return value.
          </p>
          <br />
          <div className="mb-4 rounded-lg overflow-hidden text-[18px] leading-[30px]">
            <SyntaxHighlighter
              language="c"
              style={coldarkDark}
              customStyle={{ borderRadius: "12px", padding: "24px" }}
            >
              {`#include <stdio.h>\n\nint main(void) {\n    printf("Hello, world!\\n");\n    return 0;\n}`}
            </SyntaxHighlighter>
          </div>
          <br />
          <p>
            This is basically the shape of a simple C program. <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">main</code> is where the program begins, <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">printf</code> sends text to the terminal, and the semicolon tells C that the instruction is finished. It is a lot of ceremony for one sentence, but the ceremony is the point: C makes the structure impossible to ignore.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">Then the Hair Starts Going</h4>
          <p>
            The simple program is only the beginning. C gets trickier when the lessons move into pointers, dynamic memory allocation, data structures, and algorithms. A variable is not just a name that stores a value. It lives somewhere in memory. A pointer stores the address of that variable, and the <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">*</code> operator lets the program follow that address back to the value.
          </p>
          <br />
          <p>
            This is the point where some Computer Science students start asking serious questions about their life choices. It is also the point where the subject starts making sense, because the abstractions become visible.
          </p>
          <br />
          <div className="mb-4 rounded-lg overflow-hidden text-[18px] leading-[30px]">
            <SyntaxHighlighter
              language="c"
              style={coldarkDark}
              customStyle={{ borderRadius: "12px", padding: "24px" }}
            >
              {cCode}
            </SyntaxHighlighter>
          </div>
          <br />
          <p>
            <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">&amp;mark</code> means "the address of mark." <code className="bg-[var(--bg-secondary)] px-2 py-1 rounded text-[16px] md:text-[22px]">*markAddress</code> means "the value stored at that address." The number has not changed, but I am no longer looking at it as an abstract value. I can finally see the path between the variable and the place where the computer keeps it.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">The Problems Get Bigger</h4>
          <p>
            A missing semicolon, a wrong type, or a function written in the wrong place can stop the whole program from running. At first, every error message feels like a rejection. Then pointers arrive. After that, dynamic memory allocation and data structures are waiting outside the door.
          </p>
          <br />
          <p>
            The compiler is not trying to make me feel small. It is forcing me to be precise. In a language this close to the machine, a vague instruction can become a real bug. The discipline is frustrating until it starts protecting me.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">The Tower Waiting at the End</h4>
          <p>
            One of the problems waiting further ahead is the <a href="/blog/004-the-analogy-of-the-tower-of-hanoi-to-programming" className="underline text-[var(--tw-text-gray-primary)]">Tower of Hanoi</a>. Three rods, a stack of disks, and a function that calls itself. It is where pointers, recursion, and the order of instructions stop being abstract words and become a real challenge.
          </p>
          <br />
          <p>
            C is showing me what higher-level tools usually hide: memory, addresses, types, and the order in which instructions happen. The computer is not magic. It is just very fast at following exact directions.
          </p>
          <br />
          <p className="italic text-[16px] md:text-[22px]">
            The first program fits on paper. The problems do not.
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