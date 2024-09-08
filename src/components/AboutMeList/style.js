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
    width: clamp(170px, 20vw, 280px);
    height: clamp(100px, 10vw, 200px);
    object-fit: cover;
    cursor: pointer;
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
  padding-bottom: clamp(10px, 10vw, 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0px, 1.5vw, 20px);
  background-color: #181818;
  color: white;
  overflow-x: hidden;
`;

export const intro = css`
  width: 90%;
  font-size: clamp(10px, 1vw, 16px);
  line-height: 1.6;
  font-weight: 300;
`;

export const listLayout = css`
  width: 90%;
  height: 100%;
  border-radius: 10px;
  border-bottom: 1px solid #ccc;
  padding: clamp(10px, 2vw, 20px) clamp(5px, 2vw, 20px);
  display: flex;
  flex-direction: column;
  gap: clamp(5px, 2vw, 20px);
  font-size: clamp(10px, 1vw, 20px);
  margin: 0 auto;

  @media (min-width: 701px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (max-width: 700px) {
    position: relative;
    border-bottom: none;
  }
`;

export const imageAndTitle = css`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    color: #ccc;
    font-weight: 500;
    font-size: clamp(8px, 5vw, 23px);
    display: none;
  }

  @media (min-width: 701px) {
    h1 {
      display: block;
    }
  }

  @media (min-width: 701px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
  }
`;

export const box = css`
  width: clamp(90px, 10vw, 200px);
  height: clamp(50px, 10vw, 100px);
  border-radius: 8px;
  background-color: #38383883;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
`;

export const contentLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-weight: 500;
    font-size: clamp(10px, 5vw, 18px);
    margin: 0;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-weight: 300;
    font-size: clamp(10px, 1vw, 16px);
  }

  .mobileTitle {
    display: none;
    margin-right: 5px;
  }

  @media (min-width: 701px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 700px) {
    position: relative;

    h3 {
      position: absolute;
      transform: translateY(-100%);
      left: 33%;
      top: -50%;
      margin: 0;
      font-size: 13px;
    }

    .mobileTitle {
      display: inline;
      font-weight: 500;
      font-size: 13px;
    }
  }
`;
