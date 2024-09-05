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
  }

  p {
    font-size: clamp(5px, 1.5vw, 23px);
    color: white;
    z-index: 2;
    font-family: "Pretendard-Regular", sans-serif;
    margin: clamp(0px, 1vw, 20px) 0;
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
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0) 15%
      ),
      linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 40%),
      linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 40%),
      linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 10%);
    z-index: 1;
    pointer-events: none;
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

export const look = css`
  padding: 0.5vw 1vw;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 4px;
  font-size: clamp(8px, 2vw, 20px);
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;
  z-index: 2;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #dbdbdb;
  }

  svg {
    width: clamp(10px, 3vw, 40px);
    height: clamp(10px, 3vw, 40px);
  }
`;

export const profileLayout = css`
  width: 100%;
  height: 500px;
  background-color: #2d4949;
`;

export const test = css`
  width: 100%;
  height: 250px;
  background-color: orange;
`;
