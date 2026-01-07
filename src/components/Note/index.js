import * as React from "react";

// Components
import Container from "../Container";

// Styles
import "./index.scss";

const Footer = () => {
  return (
    <div className="note">
      {/* <p>if you want a website like this one, let me know here 👉🏾 </p> */}
      <p>
        All rights not reserved. Do you want a website like this?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            alert("Sorry, I'm still documenting this thing. Stay tuned!");
          }}
        >
          Just copy it
        </a>{" "}
        👍🏾
      </p>
    </div>
  );
};

export default Footer;