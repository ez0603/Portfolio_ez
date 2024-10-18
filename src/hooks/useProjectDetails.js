import spring from "../assets/icon/Spring.png";
import cssIcon from "../assets/icon/CSS3.png";
import firebase from "../assets/icon/Firebase.png";
import html from "../assets/icon/HTML5.png";
import java from "../assets/icon/Java.png";
import js from "../assets/icon/JavaScript.png";
import mysql from "../assets/icon/MySQL.png";
import react from "../assets/icon/React.png";
import Github from "../assets/icon/GitHub.png";
import gumeongmain from "../assets/img/메뉴선택.gif";
import gumeongsale from "../assets/img/매출조회.gif";
import gumeongfeedback from "../assets/img/피드백.gif";
import gumeongtour from "../assets/img/관광지추천.gif";
import gumeonglogo from "../assets/img/로고 변경.gif";
import gumeong from "../assets/img/구멍가게.jpg";
import tableMaid from "../assets/img/tableMaid.jpg";
import tableMaidbord from "../assets/img/대시보드2.png";
import tableMaidsale from "../assets/img/매출 조회.png";
import tableMaidmenusale from "../assets/img/메뉴 매출 상세조회.png";
import tableMaidmenu from "../assets/img/메뉴 매출 조회.png";
import tableMaidphone from "../assets/img/메뉴 주문.png";
import tableMaidcart from "../assets/img/장바구니.png";
import tableMaidcartposmain from "../assets/img/포스 메인.png";
import tableMaidcartpos from "../assets/img/포스.png";
import projectMain from "../assets/img/mainpage.jpg";
import projectAboutme from "../assets/img/aboutme.png";
import projectpage from "../assets/img/project.jpg";
import portfolio from "../assets/img/portfolio.jpg";

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
      image: gumeong,
      githubUrl: "https://github.com/Novel-Ideas",

      contributions: [
        "React 기반의 전체 화면 UI 개발",
        "메뉴 CRUD",
        "피드백 추가 및 조회, 그래프 API를 사용하여 보기 쉽게 구현",
        "점포 이미지 변경 및 관리자 비밀번호 변경",
      ],
      detailedContributions: [
        "React와 CSS를 사용하여 UI 구현",
        "메뉴 추가, 수정, 삭제 기능을 통해 관리자 페이지에서 쉽게 메뉴 관리 가능",
        "사용자로부터 피드백을 받을 수 있는 기능을 제공하고, 수집된 피드백 데이터를 그래프 API를 활용해 시각적으로 표현하여 쉽게 이해할 수 있는 형태로 제공.",
        "관리자가 점포의 대표 이미지를 추가, 수정, 삭제할 수 있는 기능을 추가하고, 비밀번호를 업데이트할 수 있도록 제공",
      ],
      screenshots: [
        gumeongmain,
        gumeongsale,
        gumeongfeedback,
        gumeongtour,
        gumeonglogo,
      ],
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
      image: tableMaid,
      githubUrl: "https://github.com/table-maid/table_maid_front",

      contributions: [
        "React 기반의 전체 화면 UI 개발",
        "회원가입 및 로그인 기능",
        "아이디 및 비밀번호 찾기",
        "매출 대시보드와 총 매출 및 선택된 날짜 매출 조회",
      ],
      detailedContributions: [
        "React와 CSS를 사용하여 UI 구현",
        "사용자 인증을 위한 회원가입 및 로그인 기능을 구현, 비밀번호 암호화 및 JWT를 활용한 세션 관리",
        "사용자가 아이디 또는 비밀번호를 잊었을 경우, 사용자 정보를 통해 이메일로 아이디와 임시 비밀번호 전송",
        "매출 데이터를 그래프로 표현하는 대시보드를 구현, 총 매출 및 특정 날짜별 매출을 조회할 수 있는 기능을 개발",
      ],
      screenshots: [
        tableMaidbord,
        tableMaidsale,
        tableMaidmenusale,
        tableMaidmenu,
        tableMaidphone,
        tableMaidcart,
        tableMaidcartposmain,
        tableMaidcartpos,
      ],
    },
    {
      title: "Portfolio",
      period: "2024.09.02 ~ 진행 중",
      description: "포트폴리오",
      techStack: [cssIcon, html, js, react, Github],
      image: portfolio,
      githubUrl: "https://github.com/your-repo/table-maid",

      contributions: [
        "다양한 기기나 화면의 크기에 따라 자동으로 맞춤 렌더링이 되도록 반응형 웹 디자인을 구현",
      ],
      detailedContributions: [
        "진행했던 프로젝트, 개발 스택 등을 한번에 확인할 수 있는 포트폴리오 사이트 구현,  헤더 메뉴 통해 각각의 프로젝트를 클릭하면 세부 내용을 확인할 수 있는 모달창 구현",
      ],
      screenshots: [projectMain, projectAboutme, projectpage],
    },
  ];
};

export default useProjectDetails;
