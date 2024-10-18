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
`;

export const container = css`
  width: 100%;
  height: 100%;
  background-color: #141414;
  padding-bottom: clamp(50px, 15vw, 80px);
  cursor: default;

  @media (max-width: 700px) {
    padding-bottom: 50px;
  }
`;

export const aboutme = css`
  position: relative;
  width: 100%;
  height: 56.25vw;
  max-height: 100vh;
  background-color: #ffffff;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5%;
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

  @font-face {
    font-family: "Tenada";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/Tenada.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  h1 {
    font-size: 5vw;
    color: white;
    z-index: 2;
    font-family: "CWDangamAsac-Bold", sans-serif;
    margin: 0;

    @media (max-width: 700px) {
      font-family: "Tenada", sans-serif;
      font-size: 45px;
      position: relative;
      bottom: 11%;
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

    @media (max-width: 700px) {
      font-size: 15px;

      position: relative;
      bottom: 10%;
    }
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

  @media (max-width: 700px) {
    height: 85vh;
    &::before {
      background: linear-gradient(
          to bottom,
          rgba(20, 20, 20, 0.5),
          rgba(20, 20, 20, 0) 25%
        ),
        linear-gradient(to top, rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0) 25%);
    }
  }
`;

export const mainImg = (image) => css`
  width: 100%;
  height: 100%;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  -webkit-user-drag: none;
  user-drag: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
`;

export const backgroundBottom = css`
  position: absolute;
  width: 100%;
  height: 60%;
  top: 57%;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 8%, 0) 0%,
    hsla(0, 0%, 8%, 0.15) 15%,
    hsla(0, 0%, 8%, 0.35) 29%,
    hsla(0, 0%, 8%, 0.58) 44%,
    #141414 68%,
    #141414
  );

  @media (max-width: 700px) {
    height: 100%;
    top: 23%;
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 8%, 0) 0%,
      hsla(0, 0%, 8%, 0.15) 15%,
      hsla(0, 0%, 8%, 0.35) 29%,
      hsla(0, 0%, 8%, 0.58) 44%,
      #141414 68%,
      #141414
    );
  }
`;

export const bounceText = css`
  display: inline-block;
  color: white;

  span {
    display: inline-block;
    position: relative;
    animation: bounce 1s ease forwards;
    opacity: 0;
  }

  span:nth-of-type(1) {
    animation-delay: 0.1s;
  }
  span:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  span:nth-of-type(3) {
    animation-delay: 1s;
  }
  span:nth-of-type(4) {
    animation-delay: 1.5s;
  }
  span:nth-of-type(6) {
    animation-delay: 2s;
  }
  span:nth-of-type(7) {
    animation-delay: 2.5s;
  }
  span:nth-of-type(8) {
    animation-delay: 3s;
  }

  &.visible span {
    animation-play-state: running;
    opacity: 1;
  }

  @keyframes bounce {
    0% {
      top: 0;
      opacity: 1;
    }
    50% {
      top: -10px;
    }
    100% {
      top: 0;
      opacity: 1;
    }
  }

  @media (max-width: 700px) {
    @keyframes bounce {
      0% {
        top: 0;
        opacity: 1;
      }
      50% {
        top: -3px;
      }
      100% {
        top: 0;
        opacity: 1;
      }
    }
  }
`;

export const look = css`
  padding: 0.5vw 1vw;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 4px;
  font-size: clamp(7px, 1vw, 20px);
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;
  z-index: 2;
  transition: background-color 0.3s ease;
  margin-top: clamp(5px, 1vw, 10px);

  &:hover {
    background-color: #dbdbdb;
  }

  svg {
    width: clamp(10px, 2vw, 35px);
    height: clamp(10px, 3vw, 35px);
  }

  @media (max-width: 700px) {
    position: relative;
    padding: 9px 12px;
    font-size: 13px;
    gap: 5px;
    bottom: 9%;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const profileLayout = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0 0 0;
  gap: clamp(10px, 2vw, 20px);

  @media (max-width: 700px) {
    height: auto;
    padding: 0;
  }
`;

export const projectLayout = css`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.4s ease-in-out;
  padding: 20px 0;

  @media (max-width: 700px) {
    height: auto;
  }
`;

export const projectHeader = css`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    font-weight: 500;
    color: white;
    font-size: clamp(15px, 2vw, 25px);
    z-index: 1;
  }

  @media (max-width: 700px) {
    width: 70%;
    height: 100%;
    justify-content: center;

    h1 {
      font-size: 25px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 1350px) {
    width: 80%;
  }
`;

export const projectContainer = css`
  width: 90%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  gap: clamp(15px, 5vw, 35px);
  margin: clamp(5px, 1vw, 10px) auto;
  padding: 0 0 30px 0;
  list-style-type: none;
  transition: height 0.5s ease, opacity 0.5s ease;

  @media (max-width: 1350px) {
    width: 80%;
    justify-content: flex-start;
  }

  @media (max-width: 700px) {
    width: 90%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 45px;
  }
`;

export const project = css`
  box-sizing: border-box;
  width: 100%;
  max-width: 300px;
  height: 200px;
  /* background-color: #ffffff; */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(50px);
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:nth-of-type(1) {
    transition-delay: 0.2s;
  }
  &:nth-of-type(2) {
    transition-delay: 0.4s;
  }
  &:nth-of-type(3) {
    transition-delay: 0.6s;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    height: auto;
    transform: scale(1.05);
  }

  &:hover .textBox {
    max-height: none;
    height: auto;
    opacity: 1;
    overflow: visible;
  }
  /* &:not(:hover) {
    transition: transform 0.1s ease-in-out, height 0.2s ease-in-out;
  } */

  @media (max-width: 1350px) {
    flex: 1 1 250px;
  }

  @media (max-width: 700px) {
    width: 75%;
    height: auto;
    min-height: 300px;
  }
`;

export const projectImg = (image) => css`
  width: 100%;
  height: 100%;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  min-height: 200px;

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    min-height: 160px;
  }
`;

export const textBox = css`
  width: 90%;
  padding: 0 20px;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: height 0.5s ease, opacity 0.5s ease;
  background-color: #fff;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

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
    font-size: clamp(12px, 2vw, 15px);
    font-weight: 500;
  }

  &:hover {
    height: 200px;
    height: auto;
    opacity: 1;
    overflow: visible;
  }

  @media (max-width: 700px) {
    max-height: none;
    height: auto;
    opacity: 1;
    overflow: visible;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

export const skillIconsContainer = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
`;

export const skillIconWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  gap: 10px;
`;

export const skillIcon = css`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;

  @media (max-width: 700px) {
    width: 15px;
    height: 15px;
  }
`;

export const aboutmeExLayout = css`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in-out;
`;

export const exContainer = css`
  width: 100%;
  height: 100%;

  h2 {
    font-weight: 500;
    color: white;
    font-size: clamp(15px, 2vw, 25px);
  }

  @media (max-width: 700px) {
    h2 {
      font-size: 25px;
      margin-bottom: 35px;
    }
  }
`;
