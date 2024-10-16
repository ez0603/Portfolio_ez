/** @jsxImportSource @emotion/react */
import * as s from "./style";
import value from "../../assets/img/내가 추구하는 가치.jpg";
import target from "../../assets/img/나의 목표.jpg";
import devil from "../../assets/img/악마는 프라다를 입는다.webp";
import Walter from "../../assets/img/월터의 상상은 현실이 된다.webp";
import baseball from "../../assets/img/스토브리그.webp";
import chess from "../../assets/img/퀸즈 갬빗.webp";

function AboutMeList({ onImageClick }) {
  const handleFullScreen = (imgSrc) => {
    const fullHeight = window.innerHeight + "px";

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
    fullScreenElement.style.height = fullHeight;
    fullScreenElement.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    fullScreenElement.style.display = "flex";
    fullScreenElement.style.alignItems = "center";
    fullScreenElement.style.justifyContent = "center";
    fullScreenElement.style.zIndex = "1000";
    fullScreenElement.style.overflow = "hidden";
    fullScreenElement.style.padding = "0";

    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";

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
              <div css={s.intro}>
                <span>
                  <b>'시련은 있어도 실패는 없다'</b> 라는 마음가짐으로 개발에
                  임하고 있습니다. <br class="keep-br" />
                  개발 과정에서 때때로 어려움이 있지만, 그 과정이 저를 더 나은
                  개발자로 성장시키는 발판이라고 생각합니다.
                  <br class="keep-br" /> 문제가 발생했을 때 해결책을 찾기 위해
                  끝까지 포기하지 않으며, 지속적인 학습을 통해 항상 한 단계씩
                  나아가고 있습니다.
                </span>
              </div>
              <div css={s.listLayout}>
                <div css={s.imageAndTitle}>
                  <h1 data-h1="1 .">1</h1>
                  <div css={s.box}>
                    <img
                      src={devil}
                      alt=""
                      onClick={() => handleFullScreen(devil)}
                    />
                  </div>
                </div>
                <div css={s.contentLayout}>
                  <h3>
                    <span className="mobileTitle">1. </span> 첫 번째
                  </h3>
                  <p>
                    인터랙티브한 페이지를 개발하는 것을 좋아하며{" "}
                    <b>사용자에게 편리한 UI</b>를 제공하는 웹을 만들기 위해
                    노력합니다.
                  </p>
                </div>
              </div>
              <div css={s.listLayout}>
                <div css={s.imageAndTitle}>
                  <h1 data-h1="2 .">2</h1>
                  <div css={s.box}>
                    <img
                      src={Walter}
                      alt=""
                      onClick={() => handleFullScreen(Walter)}
                    />
                  </div>
                </div>
                <div css={s.contentLayout}>
                  <h3>
                    <span className="mobileTitle">2. </span> 두 번째
                  </h3>
                  <p>
                    새롭게 배운 기술을 업무에 적용하여 <b>더 나은 서비스</b>를
                    구축해 나아가는 것에 보람을 느낍니다.
                  </p>
                </div>
              </div>
              <div css={s.listLayout}>
                <div css={s.imageAndTitle}>
                  <h1 data-h1="3 .">3</h1>
                  <div css={s.box}>
                    <img
                      src={baseball}
                      alt=""
                      onClick={() => handleFullScreen(baseball)}
                    />
                  </div>
                </div>
                <div css={s.contentLayout}>
                  <h3>
                    <span className="mobileTitle">3. </span> 세 번째
                  </h3>
                  <p>
                    팀 프로젝트를 통해 함께 의견을 나누고 고민하며 프로젝트의{" "}
                    <b>시작과 끝</b>을 맺은 경험이 있습니다.
                  </p>
                </div>
              </div>
              <div css={s.listLayout}>
                <div css={s.imageAndTitle}>
                  <h1 data-h1="4 .">4</h1>
                  <div css={s.box}>
                    <img
                      src={chess}
                      alt=""
                      onClick={() => handleFullScreen(chess)}
                    />
                  </div>
                </div>
                <div css={s.contentLayout}>
                  <h3>
                    <span className="mobileTitle">4. </span> 마지막으로
                  </h3>
                  <p>
                    새로운 기술을 배우고 문제를 해결하는 과정에서 즐거움을
                    느끼고, 그 과정에서 <b>학습하고 성장</b>할 수 있는 기회를
                    제공해 주는 개발을 좋아합니다.
                  </p>
                </div>
              </div>
            </div>,
            value
          )
        }
      />
      {/* <img
        src={target}
        alt="가치 2"
        onClick={() =>
          onImageClick(
            <div css={s.layout}>
              <div css={s.listLayout}>
                <div css={s.imageAndTitle}>
                  <div css={s.box}>
                    <img
                      src={devil}
                      alt=""
                      onClick={() => handleFullScreen(devil)}
                    />
                  </div>
                  <h1>1</h1>
                  <h3>첫 번째</h3>
                </div>
                <div css={s.contentLayout}>
                  <p>
                    인터랙티브한 페이지를 개발하는 것을 좋아하며{" "}
                    <b>사용자에게 편리한 UI</b>를 제공하는 웹을 만들기 위해
                    노력합니다.
                  </p>
                </div>
              </div>
            </div>,
            target
          )
        }
      /> */}
    </div>
  );
}

export default AboutMeList;
