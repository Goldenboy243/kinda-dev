import * as React from "react";

// Components
import BlogLayout from "../../components/BlogLayout";

// Styles
import "../../styles/global.scss";

const Post = () => {
  return (
    <BlogLayout id="000" emoji="📍" title="Origin" date="2020-01-01">
      <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[35px] md:leading-[50px] text-[18px] md:text-[26px]">
        <section className="tldr text-[18px] md:text-[25px] leading-[32px] md:leading-[45px]">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4">TL;DR</h4>
          <ul className="list-none pl-8">
            <li className="mb-4"><strong>The Background:</strong> Electricity student with a dream of independence.</li>
            <li className="mb-4"><strong>The Pressure:</strong> Medicine (Parents) & Trading (Personal interest)</li>
            <li className="mb-4"><strong>The Pivot:</strong> Medical school rejection → Tech discovery.</li>
            <li className="mb-4"><strong>The Realization:</strong> Code = Bridge to freedom, automation, and impact.</li>
            <li className="mb-4"><strong>The Goal:</strong> Full-stack independence, automated finance, building without limits.</li>
          </ul>
          <br />
          <br />
        </section>

        <section className="intro-text">
          <h4 className="text-[24px] md:text-[31px] font-bold mb-4">The Rejection That Changed Everything</h4>
          <p>
            In 2020, while the world was slowing down, my life was accelerating toward a single question: <em>What now?</em>
          </p>
          <br />
          <p>
            Growing up, the definition of success was handed to me. My parents saw me in a white coat—medicine was the respected, stable path. It's noble, I know. But inside? No spark. Just the weight of expectations. Meanwhile, I had a background in Electricity. I understood circuits, currents, power distribution—but I didn't know how to turn that into the independence I craved.
          </p>
          <br />
          <p>
            At 17, my definition of success was simpler than theirs: <strong>Independence</strong>. Be my own boss. Control my time. Build my own future. Like many peers, I looked at financial markets. Trading seemed like the shortcut—charts, leverage, and the promise of a laptop lifestyle. I spent hours daydreaming about financial freedom while my parents pushed the medicine narrative.
          </p>
          <br />
          <p>
            Coding? That wasn't even on my radar. My brother planted the seed once. He talked about programming like it was magic. I didn't get it. I Googled the definition: <em>"Programming is the process of designing, writing, testing, and maintaining code that computers can execute."</em> Cool. Still confusing. I figured I'd circle back later.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">The Turning Point</h4>
          <p>
            Then came the rejection. Medical school said <strong>"No."</strong>
          </p>
          <br />
          <p>
            That rejection was the best thing that ever happened to me. It wasn't a closed door—it was permission to stop pretending. I looked at programming again, but this time with clear eyes. And suddenly, it clicked. Code wasn't just "telling computers what to do"—it was the <strong>universal bridge</strong> between everything I wanted:
          </p>
          <br />
          <ul className="list-none pl-8">
            <li className="mb-4">• Want to trade? Build bots to trade for you.</li>
            <li className="mb-4">• Want to help people? Build tools for doctors, teachers, anyone.</li>
            <li className="mb-4">• Want to be free? Work from anywhere, anytime.</li>
            <li className="mb-4">• Want to learn? Code forces you to think differently every day.</li>
          </ul>
          <br />
          <p>
            I traded the stethoscope for a keyboard. At first, I looked at Robotics—seemed like a natural evolution from Electricity. But I pivoted to IT instead. Not because it was trendy. Not because everyone was doing it. But because it was the only path that offered <strong>no ceiling</strong>.
          </p>
          <br />
          <p>
            No limits on what I could build. No permission required to start. No gatekeeper telling me I wasn't qualified. Just me, a laptop, and an internet connection.
          </p>
          <br />

          <h4 className="text-[24px] md:text-[32px] font-bold mb-4 mt-8">Where I Am Now</h4>
          <p>
            This isn't the story of how I became a developer overnight. It's the story of how I found the path that felt right—even when everyone around me thought I was crazy for leaving medicine behind.
          </p>
          <br />
          <p>
            The goal hasn't changed: full-stack independence, automated finance systems, and building tools that solve real problems. The difference is that now I have the skillset to make it happen.
          </p>
          <br />
          <p className="italic text-[16px] md:text-[22px]">
            This is 000. The beginning of the log. Everything that follows is the journey from "What's programming?" to building real systems. Buckle up.
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

export const Head = () => <title>000. Origin | Nathan Kinda</title>;
