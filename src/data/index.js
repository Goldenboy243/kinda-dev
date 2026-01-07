import * as React from "react";

import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import { FiAward } from "@react-icons/all-files/fi/FiAward";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { FiCoffee } from "@react-icons/all-files/fi/FiCoffee";

// Files
import NathanKindaCV from "../files/Curriculum Vitae_.pdf";

const bioDescription = ``;

const careerPath = [
  {
    role: "",
    details: ``,
  },
  {
    role: "",
    details: ``,
  },

  {
    role: "",
    details: ``,
  },
  {
    role: "",
    details: ``,
  },
  {
    role: "",
    details: ``,
  },
];

const academyPath = [
  {
    role: "At Uni",
    details: ``,
  },
  {
    role: "",
    details: ``,
  },
  {
    rrole: "",
    details: ``,
  },
  {
    role: "",
    details: ``,
  },
  {
   role: "",
    details: ``,
  },
];

const openSourcePath = [
  {
    role: "My Github",
    link: `https://github.com/Goldenboy243`,
  },
];

const volunteeringPath = [
  {
    role: "",
    details: ``,
    description: ``,
  },
  {
   role: "",
    details: ``,
    description: ``,
  },
];

const hackingPath = [
  {
    role: "",
    details: ``,
    description: ``,
  },
  {
    role: "",
    details: ``,
    description: ``,
  },
];

const quickActionList = [
  {
    text: "Copy link",
    nick: "c",
    icon: <FiCopy />,
    type: 1,
    textToCopy: "https://nathankinda.com",
  },
  {
    text: "Download CV",
    nick: "d",
    icon: <FiDownload />,
    target: NathanKindaCV,
  },
  {
    text: "Know my career",
    nick: "k",
    icon: <FiAward />,
    target: "https://linkedin.com",
  },
  {
    text: "See my github",
    nick: "g",
    icon: <FiGithub />,
    target: "https://github.com/Goldenboy243",
  },
  {
    text: "Book a meeting",
    nick: "b",
    icon: <FiCalendar />,
    target: "mailto:kinda.nathan@icloud.com",
  },
  {
    text: "Send an email",
    nick: "e",
    icon: <FiMail />,
    target: "mailto:kinda.nathan@icloud.com",
  },
  {
    text: "Follow me on instagram",
    nick: "g",
    icon: <FiInstagram />,
    target: "https://instagram.com",
  },
  // {
  //   text: "See my current readings",
  //   nick: "r",
  //   icon: <FiBook />,
  //   target: "",
  // },
  // {
  //   text: "View source code",
  //   nick: "r",
  //   icon: <FiCoffee />,
  //   target: "https://github.com/MrSolution07MrSolulu-www",
  // },
];

export {
  bioDescription,
  careerPath,
  academyPath,
  quickActionList,
  openSourcePath,
  volunteeringPath,
  hackingPath,
};
