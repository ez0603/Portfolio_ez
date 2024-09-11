import { css, keyframes } from "@emotion/react";

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const popOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
`;

export const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const modalStyle = (isClosing) => css`
  position: fixed;
  width: 50%;
  height: 92%;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
  will-change: transform, opacity;
  animation: ${isClosing ? popOut : popIn} ${isClosing ? "0.3s" : "0.3s"}
    ease-in-out;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: #fff;

  @media (max-width: 700px) {
    width: 90%;
    height: 90vh;
  }
`;

export const closeButtonStyle = css`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const iconStyle = css`
  font-size: 24px;
  color: #333;
`;

export const contentStyle = css`
  margin-top: 20px;
`;
