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
  padding-bottom: clamp(50px, 15vw, 80px);

  @media (max-width: 700px) {
    padding-bottom: 80px;
  }
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
      bottom: -30%;
      left: 8%;
      font-size: 50px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  @media (max-width: 700px) {
    height: 90vh;
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

  @media (max-width: 700px) {
    position: absolute;
    top: -15%;
  }
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
    width: 80%;
    height: 50%;
    top: 4%;
    left: 22%;
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
    width: 100%;
    height: 45%;
    top: 2%;
  }
`;

export const fadeInText = css`
  opacity: 0;
  transition: opacity 2.5s ease-in-out, transform 2.5s ease-in-out;
  font-size: 5vw;

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
    top: 220px;
    left: 110px;
    transform: translateX(-50%);
    font-size: 70px;
  }
`;

export const projectLayout = css`
  width: 100%;
  height: clamp(500px, 20vw, 400px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    height: auto;
  }
`;

export const projectContainer = css`
  width: 90%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;

  @media (max-width: 1350px) {
    width: 80%;
    justify-content: flex-start;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 45px;
  }
`;

export const project = css`
  height: 95%;
  width: 100%;
  max-width: 370px;
  min-width: 330px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:nth-child(1) {
    transition-delay: 0.2s;
  }
  &:nth-child(2) {
    transition-delay: 0.4s;
  }
  &:nth-child(3) {
    transition-delay: 0.6s;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: scale(1.05);
    transition-delay: 0s;
  }

  @media (max-width: 1350px) {
    flex: 1 1 250px;
  }

  @media (max-width: 700px) {
    width: 75%;
    height: auto;
    min-height: 300px;
    transition-delay: 0s;
  }
`;

export const projectImg = (image) => css`
  width: 100%;
  height: 60%;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  min-height: 220px;

  @media (max-width: 700px) {
    width: 100%;
    height: 60%;
    min-height: 160px;
  }
`;

export const textBox = css`
  width: 90%;
  height: 40%;

  h1 {
    font-size: clamp(15px, 2vw, 19px);
    font-weight: 700;
    margin: 15px 0 0 0;
  }

  p {
    margin: 0;
    font-weight: 300;
    font-size: clamp(10px, 2vw, 13px);
  }

  h3 {
    font-size: clamp(12px, 2vw, 16px);
    font-weight: 500;
  }

  @media (max-width: 700px) {
    width: 90%;
    height: 50%;
  }
`;

export const skillIconsContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
  height: auto;
`;

export const skillIconWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const skillIcon = css`
  width: 23px;
  height: 23px;

  @media (max-width: 700px) {
    width: 15px;
    height: 15px;
  }
`;
