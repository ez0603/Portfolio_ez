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

export const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const modalContentStyle = (isClosing) => css`
  position: fixed;
  width: 50%;
  height: 92%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
  background-color: #181818;
  will-change: transform, opacity;
  animation: ${isClosing ? popOut : popIn} ${isClosing ? "0.3s" : "0.5s"}
    ease-in-out;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 700px) {
    top: 10px;
    width: 90%;
    height: 96%;
    background-color: #252525;
  }
`;

export const modalContent = css`
  background: white;
  border-radius: 8px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  width: 100%;
  height: 100%;
  background-color: #181818;

  @media (max-width: 700px) {
    background-color: #252525;
  }
`;

export const closeButton = css`
  position: absolute;
  top: clamp(13px, 2vw, 15px);
  right: clamp(13px, 1vw, 20px);
  background-color: #181818;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  width: clamp(30px, 6vw, 40px);
  height: clamp(30px, 6vw, 40px);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const iconStyle = css`
  color: white;
  font-size: clamp(8px, 4vw, 23px);
  font-weight: 300;
`;

export const imageWrapper = css`
  position: relative;
  width: 100%;
  height: 350px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow: hidden;

  @media (max-width: 700px) {
    height: 180px;
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

export const backgroundBottom = css`
  position: absolute;
  width: 100%;
  height: 30%;
  top: 78%;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 9%, 0) 0%,
    hsla(0, 0%, 9%, 0.15) 25%,
    hsla(0, 0%, 9%, 0.35) 40%,
    hsla(0, 0%, 9%, 0.58) 60%,
    #181818 75%,
    #181818
  );

  @media (max-width: 700px) {
    background: none;
  }
`;

export const modalImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  position: relative;
`;
