import { css } from "@emotion/react";

export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.671);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const modalContent = css`
  background: white;
  border-radius: 10px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  width: 90%;
  max-width: 900px;
  position: relative;
  text-align: center;
`;

export const closeButton = css`
  position: absolute;
  top: 10px;
  right: clamp(8px, 1vw, 15px);
  background-color: #181818;
  border-radius: 50%;
  border: none;
  color: white;
  cursor: pointer;
  font-size: clamp(10px, 5vw, 30px);
`;

export const iconStyle = css`
  color: white; /* X 부분 하얀색 */
  transform: translate(0%, 10%);
`;

export const modalImage = css`
  width: 100%;
  height: clamp(150px, 20vw, 350px);
  object-fit: cover;
  margin-bottom: 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
