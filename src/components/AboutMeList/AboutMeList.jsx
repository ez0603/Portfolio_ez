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
          onImageClick(
            "가치 1",
            <div css={s.listLayout}>
              <div css={s.box}>1</div>
              <div css={s.contentLayout}>
                <h3>첫 번째 가치는 혁신입니다.</h3>
                <p>
                  혁신적인 사고와 접근 방식을 통해 더 나은 결과를 도출합니다.
                </p>
              </div>
            </div>,
            value
          )
        }
      />
      <img
        src={value}
        alt="가치 2"
        onClick={() =>
          onImageClick(
            "가치 2",
            <div>
              <h3>두 번째 가치는 팀워크입니다.</h3>
              <p>협력과 소통을 통해 목표를 달성합니다.</p>
            </div>,
            value
          )
        }
      />
      <img
        src={value}
        alt="가치 3"
        onClick={() =>
          onImageClick(
            "가치 3",
            <div>
              <h3>세 번째 가치는 지속 가능성입니다.</h3>
              <p>지속 가능한 방식으로 프로젝트를 관리합니다.</p>
            </div>,
            value
          )
        }
      />
    </div>
  );
}

export default AboutMeList;
