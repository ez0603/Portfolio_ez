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

  @media (max-width: 700px) {
    width: 100%;
    height: 40px;
    padding: 7px 10px;
  }
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
  }

  @media (max-width: 700px) {
    img {
      width: 100px;
      height: 35px;
    }
  }
`;

export const categoryLayout = css`
  width: 25%;
  height: 100%;
  display: flex;
  margin-left: 30px;
  align-items: center;
  gap: 30px;

  @media (max-width: 700px) {
    margin-left: 5px;
    gap: 8px;
    width: 100%;
  }
`;

export const link = css`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  color: #ccc;
  font-size: clamp(5px, 2vw, 20px);
  line-height: 1;

  @media (max-width: 700px) {
    font-size: 13px;
  }
`;
