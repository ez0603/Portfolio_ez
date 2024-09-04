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
