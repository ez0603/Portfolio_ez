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
        title: "세 번째 카드",
        text: `이벤트 루프의 동작 원리를 이해하여 사용합니다.
        \n API를 사용하여 그래프, 지도 등을 불러와 구현할 수 있습니다.
        \n 조건문과 반복문, 배열 메서드를 활용하여 
        \n 효율적인 데이터 처리가 가능합니다.`,
      },
      {
        title: "네 번째 카드",
        text: "",
      },
      {
        title: "다섯 번째 카드",
        text: `마 - 다섯 번째 카드의 내용입니다.
        \n이는 다른 내용과 함께 카드에 표시됩니다.`,
      },
      {
        title: "여섯 번째 카드",
        text: `바 - 여섯 번째 카드의 내용입니다.
        \n충분히 긴 문장을 포함하고 있습니다.`,
      },
      {
        title: "일곱 번째 카드",
        text: `사 - 일곱 번째 카드의 내용입니다.
        \n여러 문장을 포함할 수 있습니다.`,
      },
      {
        title: "여덟 번째 카드",
        text: `아 - 여덟 번째 카드의 내용입니다.
        \n긴 내용도 처리할 수 있습니다.`,
      },
    ],
    []
  );

  return content;
}

export default useContent;
