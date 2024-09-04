/** @jsxImportSource @emotion/react */
import * as s from "./style";
import value from "../../assets/img/내가 추구하는 가치.jpg";
import devil from "../../assets/img/악마는 프라다를 입는다.webp";
import Walter from "../../assets/img/월터의 상상은 현실이 된다.webp";
import baseball from "../../assets/img/스토브리그.webp";

function AboutMeList({ onImageClick }) {
  return (
    <div css={s.exList}>
      <img
        src={value}
        alt="가치 1"
        onClick={() =>
          onImageClick(
            <div css={s.layout}>
              <div css={s.listLayout}>
                <h1>1</h1>
                <div css={s.box}>
                  <img src={devil} alt="" />
                </div>
                <div css={s.contentLayout}>
                  <h3>첫 번째</h3>
                  <p>
                    인터랙티브한 페이지를 개발하는 것을 좋아하며{" "}
                    <b>사용자에게 편리한 UI</b>를 제공하는 웹을 만들기 위해
                    노력합니다.
                  </p>
                </div>
              </div>
              <div css={s.listLayout}>
                <h1>2</h1>
                <div css={s.box}>
                  <img src={Walter} alt="" />
                </div>
                <div css={s.contentLayout}>
                  <h3>두 번째</h3>
                  <p>
                    새롭게 배운 기술을 업무에 적용하여 <b>더 나은 서비스</b>를
                    구축해 나아가는것에 보람을 느낍니다.
                  </p>
                </div>
              </div>
              <div css={s.listLayout}>
                <h1>3</h1>
                <div css={s.box}>
                  <img src={baseball} alt="" />
                </div>
                <div css={s.contentLayout}>
                  <h3>세 번째</h3>
                  <p>
                    팀프로젝트를 통해 함께 의견을 나누고 고민하며 프로젝트의{" "}
                    <b>시작과 끝</b>을 맺은 경험이 있습니다.
                  </p>
                </div>
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
            <div>
              <h3>세 번째 가치는 지속 가능성입니다.</h3>
              <p>지속 가능한 방식으로 프로젝트를 관리합니다.</p>
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
