import { css } from "@emotion/react";

export const layout = css`
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: hidden;
  cursor: default;
`;

export const container = css`
  width: 100%;
  height: 100%;
  background-color: #141414;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: clamp(30px, 10vw, 50px);
`;

export const background = css`
  position: relative;
  width: 100%;
  height: 56.25vw;
  max-height: 100vh;
  background-color: #141414;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5%;
  overflow: hidden;

  @font-face {
    font-family: "CWDangamAsac-Bold";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/CWDangamAsac-Bold.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  h1 {
    font-size: 5vw;
    color: white;
    z-index: 2;
    font-family: "CWDangamAsac-Bold", sans-serif;
    margin: 0;
    position: relative;
    left: 3%;

    @media (max-width: 700px) {
      bottom: -7%;
    }
  }

  p {
    font-size: clamp(5px, 1.5vw, 25px);
    color: white;
    z-index: 2;
    font-family: "Pretendard-Regular", sans-serif;
    margin: clamp(0px, 1vw, 10px) 0;
    line-height: 1.4;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        rgba(20, 20, 20, 0.5),
        rgba(20, 20, 20, 0) 25%
      ),
      linear-gradient(to right, rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0) 25%),
      linear-gradient(to left, rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0) 10%);
    z-index: 1;
    pointer-events: none;
  }
`;

export const imageContainer = css`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const backPhoneImg = (image) => css`
  width: 30%;
  height: 83%;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  position: relative;
  top: 2%;
  left: 15%;
  -webkit-user-drag: none;
  user-drag: none;
  -webkit-user-select: none;
  user-select: none;
  z-index: 1;

  opacity: 0;
  transform: translate3d(0, 50px, 0);
  transition: opacity 1s ease, transform 1s ease;

  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: -webkit-optimize-contrast;

  &.visible {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  &:hover {
    transform: translateY(-15px);
    transition: transform 0.5s ease;
  }

  @media (max-width: 700px) {
    width: 20%;
    height: 70%;
    top: 6%;
    left: 17%;
  }
`;

export const backPadImg = (image) => css`
  width: 50%;
  height: 80%;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  position: relative;
  top: -2%;
  left: 2%;
  -webkit-user-drag: none;
  user-drag: none;
  -webkit-user-select: none;
  user-select: none;

  opacity: 0;
  transform: translate3d(0, 50px, 0);
  transition: opacity 1s ease, transform 1s ease;

  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: -webkit-optimize-contrast;

  &.visible {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  &:hover {
    transform: translateY(-15px);
    transition: transform 0.5s ease;
  }

  @media (max-width: 700px) {
    width: 50%;
    height: 70%;
    top: 2%;
    left: 5%;
  }
`;

export const backgroundBottom = css`
  position: absolute;
  width: 100%;
  height: 20%;
  top: 85%;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 8%, 0) 0%,
    hsla(0, 0%, 8%, 0.15) 15%,
    hsla(0, 0%, 8%, 0.35) 29%,
    hsla(0, 0%, 8%, 0.58) 44%,
    #141414 68%,
    #141414
  );
`;

export const fadeInText = css`
  opacity: 0;
  transition: opacity 2.5s ease-in-out, transform 2.5s ease-in-out;

  &.fadeInTextVisible {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const arrowContainer = css`
  display: flex;
  justify-content: center;
`;

export const arrow = css`
  font-size: clamp(20px, 8vw, 150px);
  color: #ccc;
  opacity: 0;
  position: relative;
  top: 35%;
  left: 120%;
  animation: arrowAnimation 3.5s ease-in-out forwards, bounce 1.5s infinite 3.5s;

  @keyframes arrowAnimation {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(clamp(5px, 1vw, 10px));
    }
  }

  @media (max-width: 700px) {
    animation: arrowAnimation 3.5s ease-in-out forwards,
      bounce 1.5s infinite 3.5s;
    transform: translateY(-50%);
    top: 65%;
  }
`;

export const projectLayout = css`
  width: 100%;
  height: 500px;
`;
