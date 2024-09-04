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
  height: 87%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  top: 53%;
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
  top: clamp(13px, 2vw, 25px);
  right: clamp(13px, 1vw, 20px);
  background-color: #181818;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  width: clamp(10px, 6vw, 40px);
  height: clamp(10px, 6vw, 40px);

  display: flex;
  align-items: center;
  justify-content: center; 
`;

export const iconStyle = css`
  color: white;
  font-size: clamp(15px, 10vw, 28px);
`;

export const modalImage = css`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  transition: height 0.2s ease-in-out;

  @media (max-width: 500px) {
    height: 250px;
  }
  @media (max-width: 360px) {
    height: 150px;
  }
`;
