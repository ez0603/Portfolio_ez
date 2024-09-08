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

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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
  cursor: default;

  @media (max-width: 700px) {
    width: 93%;
    height: 75vh;
  }
`;

export const closeButtonContainer = css`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  top: clamp(5px, 2vw, 10px);
`;

export const closeButton = css`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: clamp(20px, 7vw, 40px);
  z-index: 10;
  padding-right: 15px;

  &:hover {
    color: #ccc;
  }

  @media (max-width: 700px) {
    padding-right: 10px;
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
  background: linear-gradient(to right, #c2d2d9 48%, #a6b9c0 52%);
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
    z-index: 1;
  }

  @media (min-width: 700px) {
    &::after {
      background: linear-gradient(
        to top,
        rgba(24, 24, 24, 0.5),
        rgba(24, 24, 24, 0) 30%
      );
    }
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

export const backgroundBottom = css`
  position: absolute;
  width: 100%;
  height: 25%;
  bottom: -4%;
  z-index: 1;

  @media (min-width: 700px) {
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 9%, 0) 0%,
      hsla(0, 0%, 9%, 0.15) 25%,
      hsla(0, 0%, 9%, 0.35) 40%,
      hsla(0, 0%, 9%, 0.58) 60%,
      #181818 75%,
      #181818
    );
  }
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
  align-items: flex-start;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
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

export const skillbox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  background-color: #282828;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }

  &.active {
    background-color: #0071e3;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;

    img {
      width: clamp(25px, 2vw, 40px);
      height: clamp(25px, 2vw, 40px);
      border-radius: 5px;
    }

    p {
      font-size: clamp(12px, 1.5vw, 16px);
    }
  }
`;

export const skillContainer = css`
  width: 100%;
`;

export const skillBar = css`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const skillContentRow = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    width: clamp(25px, 2vw, 40px);
    height: clamp(25px, 2vw, 40px);
    border-radius: 5px;
  }

  p {
    margin: 0;
    font-size: clamp(12px, 1.5vw, 16px);
  }
`;

export const skillDescription = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const skillDescriptionBox = css`
  width: 100%;
  background-color: #282828;
  padding: 20px;
  border-radius: 8px;
  color: white;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 10px 15px;

    p {
      font-size: clamp(11px, 2vw, 20px);
    }
  }
`;

export const skillLine = css`
  white-space: pre-line;
`;

export const selectedSkill = css`
  background-color: #0076df;

  img {
    width: clamp(25px, 2vw, 40px);
    height: clamp(25px, 2vw, 40px);
    border-radius: 5px;
  }

  p {
    margin: 0;
    font-size: clamp(12px, 1.5vw, 16px);
  }

  :hover {
    background-color: #0076df;
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

  @media (max-width: 768px) {
    border-bottom: none;
  }
`;

export const box = css`
  width: clamp(130px, 10vw, 170px);
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

  h3 {
    font-size: clamp(13px, 2vw, 20px);
  }
`;

export const inlineText = css`
  display: flex;
  align-items: baseline;
  gap: 10px;

  p {
    margin: 0;
    font-size: clamp(12px, 2vw, 17px);
  }

  .small {
    position: relative;
    top: 1px;
    font-size: clamp(10px, 2vw, 14px);
    color: #ccc;
  }
`;

export const fullScreenModal = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #181818;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2000;

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: clamp(10px, 4vw, 15px);
    text-align: center;
    padding: 0 20px;
  }
`;
