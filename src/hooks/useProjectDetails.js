import spring from "../assets/icon/Spring.png";
import cssIcon from "../assets/icon/CSS3.png";
import firebase from "../assets/icon/Firebase.png";
import html from "../assets/icon/HTML5.png";
import java from "../assets/icon/Java.png";
import js from "../assets/icon/JavaScript.png";
import mysql from "../assets/icon/MySQL.png";
import react from "../assets/icon/React.png";
import Github from "../assets/icon/GitHub.png";
import main from "../assets/img/메뉴선택.gif";
import sale from "../assets/img/매출조회.gif";
import feedback from "../assets/img/피드백.gif";
import tour from "../assets/img/관광지추천.gif";
import logo from "../assets/img/로고 변경.gif";

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

      contributions: [
        "React 기반의 전체 화면 UI 개발",
        "메뉴 CRUD",
        "피드백 추가 및 조회, 그래프 API를 사용하여 보기 쉽게 구현",
        "점포 이미지 변경 및 관리자 비밀번호 변경",
      ],
      screenshots: [main, sale, feedback, tour, logo],
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

      contributions: [
        "UI/UX 디자인 기획 및 개발",
        "Spring Boot와 React 연동 작업",
        "결제 모듈 개발 및 테스트",
      ],
      screenshots: [
        "../assets/img/screenshot3.png",
        "../assets/img/screenshot4.png",
      ],
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

      contributions: [
        "백엔드 API 설계 및 구현",
        "React로 강의 리스트 및 상세 페이지 개발",
        "AWS 배포 자동화 스크립트 작성",
      ],
      screenshots: [
        "../assets/img/screenshot5.png",
        "../assets/img/screenshot6.png",
      ],
    },
  ];
};

export default useProjectDetails;
