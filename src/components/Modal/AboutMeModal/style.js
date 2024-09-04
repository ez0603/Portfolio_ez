import { css } from "@emotion/react";

export const modalOverlay = css`
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

export const modalContent = css`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  position: relative;
  text-align: center;
`;

export const closeButton = css`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const modalImage = css`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 20px;
`;
