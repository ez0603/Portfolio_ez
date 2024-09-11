import { css } from "@emotion/react";

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

export const modalStyle = css`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  position: relative;
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
