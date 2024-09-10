import { css } from "@emotion/react";

export const layout = css`
  width: 100%;
  height: clamp(20px, 10vw, 80px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 999;
  padding: 0 clamp(10px, 3vw, 60px);
  background-color: transparent;
  transition: background-color 0.3s ease;
`;

export const scrolledLayout = css`
  background-color: #141414;
`;

export const logoLayout = css`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: clamp(50px, 10vw, 130px);
    height: clamp(7px, 4vw, 40px);
    cursor: pointer;
    position: relative;
    top: 3px;
  }

  @media (max-width: 700px) {
    img {
      top: 2px;
    }
  }
`;

export const categoryLayout = css`
  width: 25%;
  height: 100%;
  display: flex;
  margin-left: 20px;
  align-items: center;
  gap: 20px;

  @media (max-width: 700px) {
    margin-left: 5px;
    gap: 8px;
  }
`;

export const link = css`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  color: #ccc;
  font-size: clamp(5px, 2vw, 20px);
`;
