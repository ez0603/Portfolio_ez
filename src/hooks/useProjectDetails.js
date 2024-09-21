import spring from "../assets/icon/Spring.png";
import cssIcon from "../assets/icon/CSS3.png";
import firebase from "../assets/icon/Firebase.png";
import html from "../assets/icon/HTML5.png";
import java from "../assets/icon/Java.png";
import js from "../assets/icon/JavaScript.png";
import mysql from "../assets/icon/MySQL.png";
import react from "../assets/icon/React.png";
import Github from "../assets/icon/GitHub.png";

const useProjectDetails = () => {
  return [
    {
      title: "구멍가게",
      period: "2024.05.24 ~ 2024.08.12",
      description: "매장용 키오스크",
      techStack: [
        spring,
        cssIcon,
        firebase,
        html,
        java,
        js,
        mysql,
        react,
        Github,
      ],
      imageKey: "tableMaid",
      githubUrl: "https://github.com/Novel-Ideas",
    },
    {
      title: "Table Maid",
      period: "2024.05.24 ~ 2024.08.12",
      description:
        "관리자와 사용자 모드가 나누어 관리할 수 있는 비대면 주문 결제 서비스",
      techStack: [
        spring,
        cssIcon,
        firebase,
        html,
        java,
        js,
        mysql,
        react,
        Github,
      ],
      imageKey: "tableMaid",
      githubUrl: "https://github.com/table-maid/table_maid_front",
    },
    {
      title: "Third Project",
      period: "2022.11.01 ~ 2023.02.15",
      description: "온라인 교육 플랫폼",
      techStack: [
        spring,
        cssIcon,
        firebase,
        html,
        java,
        js,
        mysql,
        react,
        Github,
      ],
      imageKey: "project3",
      githubUrl: "https://github.com/your-repo/table-maid",
    },
  ];
};

export default useProjectDetails;
