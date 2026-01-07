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

// Images
import towerOfHanoi from "../../images/blog-tower-of-hanoi/tower-of-hanoi.gif";

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
              <p className="mb-3 text-[80px]">🗼</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                004. The analogy of the tower of Hanoi to programming
              </h3>
              <time
                datetime="2015-06-10"
                className="text-[18px] text-[var(--tw-text-gray-secondary)]"
              >
                2023
              </time>
            </header>
            <br />
            <br />
            <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section class="tldr text-[25px] leading-[45px]">
                <p className="mb-4">
                  <strong>TL;DR</strong>
                </p>
                <ul className="list-disc pl-8">
                  <li className="mb-4">
                   The Puzzle: Three rods, several disks, and one rule: 
                   don't put a big disk on a small one.
                  </li>
                  <li className="mb-4">
                    The Concept: Recursion. A function calling itself until the problem is solved.
                  </li>
                  <li className="mb-4">
                    The Feeling: Pure confusion.
                  </li>
                </ul>
                <br />
                <br />
              </section>
              <section class="intro-text">
                <p>
                 I am currently staring at the Tower of Hanoi. 
                 In theory, it’s a simple puzzle. In C, it is a nightmare. 
                 This is my first real introduction to Recursion.
                </p>
                <br />
                <p>
                 It feels unnatural. My brain wants to solve things step-by-step, like a circuit. But recursion requires you to trust that the function will handle the smaller versions of the problem. 
                 If you get one logical step wrong, the whole thing collapses into a stack overflow.
                </p>
                <br />
                <p>There are moments where I feel like I'm finished. 
                  Between pointers and this logical loop, I feel lost.  

                  I haven't mastered it yet, but the disks are moving.</p>
                <br />
                <div className="flex justify-center rounded-3xl overflow-hidden">
                  <img
                    src={towerOfHanoi}
                    alt="Tower of Hanoi"
                    className="w-full"
                  />
                </div>
                <br />
                <p>In C:</p>
                <SyntaxHighlighter
                  className="overflow-scroll rounded-3xl"
                  language="c"
                  style={darcula}
                >
                  {`#include <stdio.h>

// Recursive function to solve Tower of Hanoi
void solveHanoi(int n, char source, char destination, char auxiliary) {
    // Base case: If there's only one disk, move it directly
    if (n == 1) {
        printf("Move disk 1 from %c to %c\\n", source, destination);
        return;
    }

    // Step 1: Move n-1 disks from source to auxiliary using destination
    solveHanoi(n - 1, source, auxiliary, destination);

    // Step 2: Move the nth disk from source to destination
    printf("Move disk %d from %c to %c\\n", n, source, destination);

    // Step 3: Move n-1 disks from auxiliary to destination using source
    solveHanoi(n - 1, auxiliary, destination, source);
}

int main() {
    int numberOfDisks = 4; // With 4 disks
    printf("Tower of Hanoi solution for %d disks:\\n", numberOfDisks);
    solveHanoi(numberOfDisks, 'A', 'C', 'B'); // A = source, C = destination, B = auxiliary
    return 0;
}
`}
                </SyntaxHighlighter>
                <br />
                <p>The steps are:</p>
                <br />
                <ul className="space-y-6 list-decimal list-inside dark:text-[var(--tw-text-gray-secondary)]">
                  <li>
                    <strong className="font-semibold dark:text-[var(--tw-text-gray-primary)]">
                      Base case:
                    </strong>{" "}
                    If I have only one disk, I move it directly from the source
                    peg to the destination peg.
                  </li>
                  <li>
                    <strong className="font-semibold dark:text-white">
                      Recursive step 1:
                    </strong>{" "}
                    I move the top <code>n-1</code> disks from the source peg to
                    the auxiliary peg, using the destination peg as a helper.
                  </li>
                  <li>
                    <strong className="font-semibold dark:text-white">
                      Move largest disk:
                    </strong>{" "}
                    I move the remaining (largest) disk from the source peg to
                    the destination peg.
                  </li>
                  <li>
                    <strong className="font-semibold dark:text-white">
                      Recursive step 2:
                    </strong>{" "}
                    Then, I move the <code>n-1</code> disks from the auxiliary
                    peg to the destination peg, using the source peg as a
                    helper.
                  </li>
                </ul>
                <br />

                <br />
                <p>Keep moving...</p>
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
  <title>003. The analogy of the tower of Hanoi to programming | Nathan Kinda</title>
);
