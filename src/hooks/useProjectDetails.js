const useProjectDetails = () => {
  return [
    {
      title: "Table Maid",
      period: "2024.05.24 ~ 2024.08.12",
      description:
        "관리자와 사용자 모드가 나누어 관리할 수 있는 비대면 주문 결제 서비스",
      techStack: [
        "React",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Java",
        "Spring Boot",
        "MySQL",
        "Firebase",
      ],
      imageKey: "tableMaid",
    },
    {
      title: "Another Project",
      period: "2023.01.15 ~ 2023.04.20",
      description: "프로젝트 관리 시스템",
      techStack: [
        "React",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Java",
        "Spring Boot",
        "MySQL",
        "Firebase",
      ],
      imageKey: "project2",
    },
    {
      title: "Third Project",
      period: "2022.11.01 ~ 2023.02.15",
      description: "온라인 교육 플랫폼",
      techStack: ["Angular", "Express"],
      imageKey: "project3",
    },
  ];
};

export default useProjectDetails;
