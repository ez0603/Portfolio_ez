import { css } from "@emotion/react";

export const layout = css`
  z-index: 0;
  width: 100%;
  height: 100%;
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

export const subheading = css`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: 300;
    color: white;
  }
`;

export const profileLayout = css`
  width: 100%;
  height: 270px;
  background-color: #141414;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const listLayout = css`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  overflow-x: auto;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;

  /* 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE 및 Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const contentWrapper = css`
  position: relative;
  width: 180px;
  height: 100%;
  scroll-snap-align: start;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 80px;
  overflow: visible;
`;

export const contentBackground = css`
  position: absolute;
  top: 50%;
  left: -85%;
  transform: translate(50%, -50%);
  font-size: 220px;
  font-weight: bold;
  font-family: Freesentation-9Black;
  color: #000000;
  z-index: 1;
  pointer-events: none;
  @font-face {
    font-family: 'Freesentation-9Black';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-9Black.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
}
  text-shadow: 3px 3px 0 #595959, -3px -3px 0 #595959, -3px 3px 0 #595959,
    3px -3px 0 #595959, 3px 0 0 #595959, -3px 0 0 #595959, 0 3px 0 #595959,
    0 -3px 0 #595959;
`;

export const contentCard = css`
  position: relative;
  height: 55%;
  width: 170px;
  z-index: 2;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;

  transform-origin: center;

  &:hover {
    transform: scale(1.8);
    width: clamp(150px, 20vw, 250px);
    z-index: 10;
    position: absolute;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.562);
  }

  img {
    width: 50%;
    height: 50%;
    border-radius: 10px;
    transition: opacity 0.3s ease;
  }

  .hover-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -35%);
    color: black;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
    white-space: pre;
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; /* 타이틀과 내용을 균등하게 분배 */
    align-items: center; /* 중앙 정렬 */
    padding: 10px;
  }

  h3 {
    margin: 0;
    font-size: clamp(10px, 0.9vw, 15px);
    font-weight: 700;
    flex-shrink: 0; /* 타이틀의 높이를 고정 */
  }

  p {
    margin-top: 5px;
    font-size: clamp(6px, 0.9vw, 9px);
    line-height: 1.4;
    flex-grow: 1; /* 내용의 높이를 고정된 비율로 설정 */
  }

  &:hover .hover-content {
    opacity: 1;
  }

  &:hover img {
    opacity: 0.3;
    transform: translate(0%, -70%) scale(0.5);
  }
`;


export const test = css`
  width: 100%;
  height: 500px;
  background-color: orange;
`;
