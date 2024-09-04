/** @jsxImportSource @emotion/react */
import * as s from "./style";
import value from "../../assets/img/내가 추구하는 가치.jpg";

function AboutMeList({ onImageClick }) {
  return (
    <div css={s.exList}>
      <img
        src={value}
        alt="가치 1"
        onClick={() =>
          onImageClick("가치 1", "첫 번째 가치는 혁신입니다.", value)
        }
      />
      <img
        src={value}
        alt="가치 2"
        onClick={() =>
          onImageClick("가치 2", "두 번째 가치는 팀워크입니다.", value)
        }
      />
      <img
        src={value}
        alt="가치 3"
        onClick={() =>
          onImageClick("가치 3", "세 번째 가치는 지속 가능성입니다.", value)
        }
      />
    </div>
  );
}

export default AboutMeList;
