import { css, keyframes } from "@emotion/react";

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const modalContentStyle = css`
  position: fixed;
  width: 50%;
  height: 90%;
  background-color: #181818;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  animation: ${popIn} 0.5s ease-out;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: hidden;

  @media (max-width: 700px) {
    width: 93%;
    height: 75vh;
  }
`;

export const closeButton = css`
  position: absolute;
  right: clamp(5px, 2vw, 15px);
  transform: translate(20%, 25%);
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: clamp(20px, 7vw, 40px);
  z-index: 10;

  &:hover {
    color: #ccc;
  }

  @media (max-width: 700px) {
    right: 5px;
    transform: translate(0%, 25%);
  }
`;

export const container = css`
  background-color: #181818;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  p {
    text-align: center;
  }
`;

export const header = css`
  width: 100%;
  background: linear-gradient(to right, #c2d2d9 50%, #a6b9c0 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  h1 {
    transform: translate(-100%, 100%);
    font-size: clamp(20px, 2.5vw, 100px);
    z-index: 10;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      #181818,
      rgba(0, 0, 0, 0.43) 15%,
      rgba(0, 0, 0, 0.18) 30%,
      rgba(0, 0, 0, 0.03) 45%,
      rgba(0, 0, 0, 0.01) 60%,
      rgba(0, 0, 0, 0) 100%
    );

    z-index: 1; /* 이미지 위에 그라데이션을 위치시킴 */
  }
`;

export const profileBackground = (image) => css`
  position: relative;
  width: clamp(120px, 15vw, 200px);
  height: clamp(150px, 20vw, 270px);
  transform: translate(-40%, 0%);
  left: clamp(25px, 1vw, 20px);
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  -webkit-user-drag: none;
  user-drag: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
`;

export const profile = css`
  background-color: #181818;
  width: 90%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const iconTextBox = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
`;

export const iconText = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: clamp(310px, 40%, 600px);
  margin: 10px 0;
  gap: 10px;

  span {
    flex-grow: 1;
    font-size: clamp(8px, 3vw, 15px);
  }
`;

export const copy = css`
  padding: clamp(5px, 2vw, 8px) clamp(5px, 2vw, 11px);
  border: none;
  background-color: white;
  color: #0071e3;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #dbdbdb;
  }
`;

export const skillLayout = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
  gap: 10px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const skillboxContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const skillbox = css`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 10px;
  color: white;
  gap: 13px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }

  p {
    margin: 0;
    font-size: clamp(12px, 1.5vw, 16px);
  }

  &:hover {
    background-color: #333;
  }
`;

export const boxLayout = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const list = css`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-radius: 10px;
  gap: 20px;
  border-bottom: 1px solid #ccc;

  p {
    margin: 0;
    line-height: 1.5;
  }

  h3 {
    margin: 0 0 5px 0;
  }

  :hover {
    background-color: #333;
  }
`;

export const box = css`
  width: clamp(130px, 10vw, 150px);
  height: 85%;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const textContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const inlineText = css`
  display: flex;
  align-items: baseline;
  gap: 10px;

  p {
    margin: 0;
    font-size: 17px;
  }

  .small {
    font-size: 0.85em;
    color: #ccc;
  }
`;
