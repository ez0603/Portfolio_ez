import { useMemo } from "react";
import spring from "../assets/icon/Spring.png";
import cssIcon from "../assets/icon/CSS3.png";
import firebase from "../assets/icon/Firebase.png";
import html from "../assets/icon/HTML5.png";
import java from "../assets/icon/Java.png";
import js from "../assets/icon/JavaScript.png";
import mysql from "../assets/icon/MySQL.png";
import react from "../assets/icon/React.png";
import Github from "../assets/icon/GitHub.png";

const useSkillIcons = () => {
  const skillIcons = useMemo(
    () => ({
      list: {
        React: react,
        HTML5: html,
        CSS3: cssIcon,
        JavaScript: js,
        Java: java,
        "Spring Boot": spring,
        MySQL: mysql,
        Firebase: firebase,
        Github: Github,
      },

      frontend: {
        React: react,
        "HTML5 / CSS3": [html, cssIcon],
        JavaScript: js,
      },
      backend: {
        Java: java,
        "Spring Boot": spring,
      },
      database: {
        MySQL: mysql,
        Firebase: firebase,
      },
    }),
    []
  );

  return skillIcons;
};

export default useSkillIcons;
