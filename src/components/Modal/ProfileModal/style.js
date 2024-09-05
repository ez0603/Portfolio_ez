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
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  background-color: #181818;
  animation: ${popIn} 0.5s ease-out;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: hidden;

  @media (max-width: 700px) {
    width: 93%;
    height: 75vh;
    max-width: none;
    max-height: none;
  }
`;

export const closeButton = css`
  position: absolute;
  top: clamp(-15px, 2vw, 15px);
  right: clamp(-15px, 2vw, 15px);
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: clamp(20px, 7vw, 40px);

  &:hover {
    color: #ccc;
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
  cursor: default;

  h1 {
    position: relative;
    top: 5%;
    right: 5%;
    transform: translate(-100%, 100%);
    font-size: clamp(20px, 2.5vw, 100px);
  }
`;

export const profileBackground = (image) => css`
  width: clamp(120px, 15vw, 200px);
  height: clamp(150px, 20vw, 270px);
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  position: relative;
  left: clamp(20px, 5vw, 3px);
  transform: translate(-40%, 0);
  -webkit-user-drag: none;
  user-drag: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
`;

export const profile = css`
  background-color: #181818;
  width: 90%;
  height: auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
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
  box-sizing: border-box;
  padding: clamp(5px, 2vw, 8px) clamp(5px, 2vw, 10px);
  border: none;
  background-color: white;
  color: #0071e3;
  border-radius: 8px;
  cursor: pointer;
  margin-left: auto;
  font-weight: bold;

  &:hover {
    background-color: #dbdbdb;
  }
`;

export const copySuccess = css`
  position: absolute;
  top: 50%;
  left: 110%;
  transform: translateY(-50%);
  color: #0071e3;
  font-weight: bold;
  background-color: #f3f5ff;
  border-radius: 4px;
  padding: 8px;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -5px;
    transform: translateY(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent #e8f5e9 transparent transparent;
  }

  @media (max-width: 400px) {
    left: 85%;
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
  justify-content: flex-start;
  padding: 10px 15px;
  border-radius: 10px;
  color: white;
  gap: 13px;
  cursor: default;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    border-radius: 5px;
    -webkit-user-drag: none;
    user-drag: none;
    -webkit-user-select: none;
    user-select: none;
  }

  p {
    margin: 0;
    font-size: clamp(12px, 1.5vw, 16px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  &:hover {
    background-color: #333;
  }
`;

export const boxLayout = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const list = css`
  width: 95%;
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
    background-color: #333333;
  }
`;

export const box = css`
  width: 20%;
  height: 85%;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    -webkit-user-drag: none;
    user-drag: none;
    -webkit-user-select: none;
    user-select: none;
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
