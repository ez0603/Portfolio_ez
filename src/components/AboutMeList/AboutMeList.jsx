/** @jsxImportSource @emotion/react */
import * as s from "./style";
import value from "../../assets/img/내가 추구하는 가치.jpg";
import devil from "../../assets/img/악마는 프라다를 입는다.webp";
import Walter from "../../assets/img/월터의 상상은 현실이 된다.webp";
import baseball from "../../assets/img/스토브리그.webp";
import chess from "../../assets/img/퀸즈 갬빗.webp";

function AboutMeList({ onImageClick }) {
  const handleFullScreen = (imgSrc) => {
    const imageElement = document.createElement("img");
    imageElement.src = imgSrc;
    imageElement.style.maxWidth = "100vw"; 
    imageElement.style.maxHeight = "100vh"; 
    imageElement.style.objectFit = "contain";
    imageElement.style.margin = "auto";

    const fullScreenElement = document.createElement("div");
    fullScreenElement.style.position = "fixed";
    fullScreenElement.style.top = "0";
    fullScreenElement.style.left = "0";
    fullScreenElement.style.width = "100vw"; 
    fullScreenElement.style.height = "100vh";
    fullScreenElement.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    fullScreenElement.style.display = "flex";
    fullScreenElement.style.alignItems = "center";
    fullScreenElement.style.justifyContent = "center"; 
    fullScreenElement.style.zIndex = "1000";
    fullScreenElement.appendChild(imageElement);

    document.body.appendChild(fullScreenElement);

    fullScreenElement.addEventListener("click", () => {
      document.body.removeChild(fullScreenElement);
    });
  };

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
                  <img
                    src={devil}
                    alt=""
                    onClick={() => handleFullScreen(devil)} // 잘못된 값 'value'에서 'devil'로 수정
                  />
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
                  <img
                    src={Walter}
                    alt=""
                    onClick={() => handleFullScreen(Walter)}
                  />{" "}
                  {/* 올바른 이미지 소스를 전달 */}
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
                  <img
                    src={baseball}
                    alt=""
                    onClick={() => handleFullScreen(baseball)}
                  />{" "}
                  {/* 올바른 이미지 소스를 전달 */}
                </div>
                <div css={s.contentLayout}>
                  <h3>세 번째</h3>
                  <p>
                    팀프로젝트를 통해 함께 의견을 나누고 고민하며 프로젝트의{" "}
                    <b>시작과 끝</b>을 맺은 경험이 있습니다.
                  </p>
                </div>
              </div>
              <div css={s.listLayout}>
                <h1>4</h1>
                <div css={s.box}>
                  <img
                    src={chess}
                    alt=""
                    onClick={() => handleFullScreen(chess)}
                  />{" "}
                  {/* 올바른 이미지 소스를 전달 */}
                </div>
                <div css={s.contentLayout}>
                  <h3>마지막으로</h3>
                  <p>
                    저는 새로운 기술을 배우고 문제를 해결하는 과정에서 즐거움을
                    느끼고, <br /> 그 과정에서 지속적으로 <b>학습하고 성장</b>할
                    수 있는 기회를 제공해 주는 개발을 좋아합니다.
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
