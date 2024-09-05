import { css } from "@emotion/react";

export const exList = css`
  width: 100%;
  height: clamp(100px, 10vw, 200px);
  display: flex;
  align-items: center;
  gap: clamp(10px, 3vw, 30px);
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: #141414;

  img {
    width: clamp(260px, 20vw, 280px);
    height: clamp(100px, 10vw, 200px);
    object-fit: cover;
    aspect-ratio: 4 / 3;
    cursor: pointer;
    -webkit-user-drag: none;
    user-drag: none;
    -webkit-user-select: none;
    user-select: none;
    border-radius: 8px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const layout = css`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;

export const listLayout = css`
  width: 90%;
  height: 100%;
  border-radius: 10px;
  border-bottom: 1px solid #ccc;
  padding: clamp(10px, 2vw, 20px) clamp(5px, 2vw, 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(10px, 1vw, 20px);
  margin: 0 auto;
  gap: clamp(5px, 2vw, 15px);

  h1 {
    color: #ccc;
    font-weight: 300;
    font-size: clamp(8px, 10vw, 25px);
  }
`;

export const box = css`
  width: clamp(100px, 10vw, 200px);
  height: clamp(70px, 10vw, 100px);
  border-radius: 8px;
  background-color: #bebebe57;
  font-size: clamp(10px, 10vw, 80px);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
`;

export const contentLayout = css`
  width: 90%;
  padding: 0 clamp(8px, 1vw, 20px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;

  h3 {
    margin: 0;
  }

  p {
    margin: 10px 0;
    font-weight: 300;
    font-size: clamp(9px, 1vw, 17px);
  }
`;
