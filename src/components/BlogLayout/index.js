import * as React from "react";

// Components
import Header from "../Header";
import Note from "../Note";
import Loader from "../Loader";
import Cursor from "../Cursor";

// Styles
import "../../styles/global.scss";

const BlogLayout = ({ id, emoji, title, date, children }) => {
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
        <main className="flex flex-col mb-10 max-w-[900px] w-full mx-auto">
          <article className="blog-intro">
            <header className="px-[5%] mb-4">
              <p className="mb-3 text-[80px]">{emoji}</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-4 font-black w-full md:mt-0 leading-[40px] md:leading-[60px]">
                {id}. {title}
              </h3>
              <time dateTime={date} className="text-[18px] text-[var(--tw-text-gray-secondary)]">
                {new Date(date).getFullYear()}
              </time>
            </header>
            <br />
            <br />
            {children}
          </article>
        </main>
        <Note />
      </div>
    </>
  );
};

export default BlogLayout;
