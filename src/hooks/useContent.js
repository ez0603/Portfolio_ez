import { useMemo } from "react";

function useContent() {
  const content = useMemo(
    () => [
      {
        title: "React",
        text: `컴포넌트를 분리하여 컴포넌트의 재사용성을 높입니다.
        \n useState, useEffect를 사용할 수 있습니다.
        \n 여러가지 Hook을 사용할 수 있으며, 
        \n Recoil로 전역 상태 관리가 가능합니다.`,
      },
      {
        title: "HTML5 / CSS3",
        text: `웹 표준을 지키고 웹 접근성 개선에 노력합니다.
        \n ::before ::after 선택자를 활용한 인터렉션 UI 제작할 수 있습니다.
        \n JavaScript의 변수를 사용해 동적 스타일링이 가능합니다.`,
      },
      {
        title: "JavaScript",
        text: `이벤트 루프의 동작 원리를 이해하여 사용합니다.
        \n API를 사용하여 그래프, 지도 등을 불러와 구현할 수 있습니다.
        \n 조건문과 반복문, 배열 메서드를 활용하여 
        \n 효율적인 데이터 처리가 가능합니다.`,
      },
      {
        title: "Java",
        text: `기본적인 문법을 알고 있으며,
		\n 기본 자료형 및 컬렉션 프레임 워크를 사용할 수 있습니다.
		\n 클래스 간의 상속 구조 설계를 통하여 
		\n 유연성 있는 코드 구현이 가능합니다.`,
      },
      {
        title: "Spring Boot",
        text: `REST API를 활용하여 웹 서비스를 개발하였습니다.
		\n  데이터베이스 연동 및 CRUD 구현이 가능합니다.
		\n Spring Security를 활용하여 회원가입을 구현 가능합니다.
	  	\n JWT 토큰을 발급하여 로그인 구현이 가능합니다.`,
      },
      {
        title: "MySQL",
        text: `CRUD 작업을 수행할 수 있는 SQL 쿼리를 작성할 수 있습니다.
		\n 정규화된 테이블 구조 설계를 해본 경험이 있습니다.
		`,
      },
      {
        title: "Firebase",
        text: `업로드된 이미지의 URL을 데이터베이스에 저장한 후, 
		\n 메뉴 이미지를 변경한 프로젝트를 진행한 경험이 있습니다. 
		\n 비동기 작업 처리 및 오류 처리가 가능합니다.`,
      },
      {
        title: "GitHub",
        text: `브랜치를 나누어 작업하며 메인 브랜치에 marge하는
		\n 커밋을 세분화하는 방식으로 작업하고 있습니다.`,
      },
    ],
    []
  );

  return content;
}

export default useContent;
