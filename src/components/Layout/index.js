import * as React from "react";

// Styles
import "./index.scss";

// Components
import Copied from "../Copied";
import Modal from "../Modal";

import { toggleTheme, getTheme, setupTheme } from "../../utils/theme";

// Contexts
export const State = React.createContext(false);

const Layout = ({ children }) => {
  const [modalIsOpened, setModalIsOpened] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState(null);
  const [copied, setCopied] = React.useState(false);

  const [theme, setTheme] = React.useState(getTheme());

  React.useEffect(() => {
    setupTheme();
  }, []);

  const onThemeChange = () => {
    const globalTheme = getTheme();
    const newTheme = globalTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    toggleTheme();
  };

  return (
    <State.Provider
      value={{
        modalIsOpened,
        modalMessage,
        copied,
        setModalIsOpened,
        setModalMessage,
        setCopied,
        theme,
        onThemeChange,
      }}
    >
      <div className={`layout`}>
        
        <>
          {children}
          <Modal
            modalIsOpened={modalIsOpened}
            setModalIsOpened={setModalIsOpened}
            copied={copied}
            setCopied={setCopied}
          />
          {copied && <Copied />}
        </>
      </div>
    </State.Provider>
  );
};

export default Layout;
