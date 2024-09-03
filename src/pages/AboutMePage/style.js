import { css } from "@emotion/react";

export const layout = css`
  z-index: 0;
  width: 100%;
  height: 100%; /* 부모 요소인 body의 높이를 100%로 상속받음 */
  background-color: #141414;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5%;
  padding-right: 5%;
  overflow: hidden;

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
    margin: 20px 0;
    max-width: 60%;
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

  .profile {
    position: absolute;
    top: 50%;
    left: 35%;
    transform: translate(100%, -50%);
    width: 20%;
    height: auto;
    z-index: 2;
    object-fit: cover;
  }
`;

export const profileLayout = css`
  width: 100%;
  height: 250px;
  background-color: #141414;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const listLayout = css`
  width: 90%;
  height: 100%;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px;
`;

export const contentWrapper = css`
  position: relative;
  width: 180px;
  scroll-snap-align: start;
  flex: 0 0 auto;
`;

export const contentBackground = css`
  position: absolute;
  top: 50%;
  left: -70%;
  transform: translate(50%, -50%);
  font-size: 200px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.1);
  z-index: 1;
  pointer-events: none;
`;

export const contentCard = css`
  position: relative;
  z-index: 2;
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  text-align: center;
  color: white;

  img {
    width: 50%;
    height: auto;
    border-radius: 10px;
  }
`;

export const test = css`
  width: 100%;
  height: 500px;
  background-color: orange;
`;

