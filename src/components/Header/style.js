import { css } from "@emotion/react";

export const layout = css`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 999;
  padding: 0 60px;
  background-color: transparent;
  transition: background-color 0.3s ease;
`;

export const scrolledLayout = css`
  background-color: #141414;
`;

export const logoLayout = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 100px;
    height: 35px;
    cursor: pointer;
    position: relative;
  }
`;

export const categoryLayout = css`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin-left: 30px;
`;

export const link = css`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  color: #ccc;
  font-size: 20px;
`;
