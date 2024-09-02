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
    position: absolute;
    top: 25%;
    left: 15%;
    transform: translate(-50%, -50%);
    font-size: 5vw;
    color: white;
    text-align: center;
    z-index: 2;
    font-family: "CWDangamAsac-Bold", sans-serif;
  }

  p {
    position: absolute;
    top: 50%;
    left: 22%;
    transform: translate(-50%, -50%);
    font-size: 1vw;
    color: white;
    z-index: 2;
    font-family: "Pretendard-Regular", sans-serif;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
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
