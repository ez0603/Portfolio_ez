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
  height: 89%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  background-color: #181818;
  animation: ${popIn} 0.5s ease-out;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 700px) {
    width: 90%;
    height: 80vh;
    max-width: none;
    max-height: none;
  }
`;

export const modalContent = css`
  background: white;
  border-radius: 10px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  width: 100%;
  height: 100%;
  background-color: #181818;
`;

export const closeButton = css`
  position: absolute;
  top: clamp(13px, 2vw, 28px);
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
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 500px) {
    height: 200px;
  }
  @media (max-width: 390px) {
    height: 150px;
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
        #181818,
        rgba(0, 0, 0, 0.43) 15%,
        rgba(0, 0, 0, 0.18) 30%,
        rgba(0, 0, 0, 0.03) 45%,
        rgba(0, 0, 0, 0.01) 60%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
`;

export const modalImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  position: relative;
`;
