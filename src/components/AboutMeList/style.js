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
    width: clamp(250px, 20vw, 280px);
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    -webkit-user-drag: none;
    user-drag: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export const listLayout = css`
  background-color: aqua;
  /* width: 90%; */
  padding: 0 clamp(5px, 2vw, 20px);
  display: flex;
  align-items: center;
  font-size: clamp(10px, 1vw, 20px);
`;

export const box = css`
  width: clamp(80px, 10vw, 100px);
  height: clamp(70px, 10vw, 100px);
  border-radius: 8px;
  background-color: white;
  font-size: clamp(10px, 10vw, 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const contentLayout = css`
  background-color: orange;
  width: 85%;
  padding: 0 clamp(8px, 1vw, 20px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    margin-bottom: 0;
  }
`;
