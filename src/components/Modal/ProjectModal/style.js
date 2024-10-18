import { css, keyframes } from "@emotion/react";

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

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
  cursor: default;
`;

export const modalStyle = css`
  position: fixed;
  width: 70%;
  height: 88%;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
  will-change: transform, opacity;
  animation: ${popIn} 0.3s ease-in-out;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: #fff;
  padding: 20px;

  @media (max-width: 700px) {
    top: 10px;
    width: 86%;
    height: 92%;
    padding: 17px;
  }
`;

export const closeButtonStyle = css`
  position: absolute;
  top: clamp(13px, 2vw, 15px);
  right: clamp(13px, 1vw, 20px);
  background-color: #181818;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  width: clamp(30px, 6vw, 40px);
  height: clamp(30px, 6vw, 40px);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  padding: 0;

  @media (max-width: 700px) {
    background-color: #3a3a3a;
  }
`;

export const iconStyle = css`
  color: white;
  font-size: clamp(8px, 4vw, 22px);
  line-height: 1;
  vertical-align: middle;
`;

export const contentStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0;
    margin-top: 40px;
    font-size: 30px;
  }

  h3 {
    font-size: 13px;
    font-weight: 300;
    margin-top: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 10px;
    margin: 10px 0;
  }

  li {
    display: inline-block;
    width: 25px;
    height: 25px;
  }

  li img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  p {
    margin-bottom: 35px;
  }

  @media (max-width: 700px) {
    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      gap: 12px;
      margin: 15px 0 20px 0;
    }

    li {
      display: inline-block;
      width: 23px;
      height: 23px;
    }

    h1 {
      margin-top: 15px;
      font-size: 26px;
    }

    h3 {
      margin: 15px 0;
      font-size: 12px;
    }

    p {
      margin: 10px 0 20px 0;
      font-size: 14px;
    }
  }
`;

export const githubLinkStyle = css`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #838383;
  cursor: pointer;

  &:hover {
    color: #333;
  }

  @media (max-width: 700px) {
    font-size: 13px;
  }
`;

export const githubIconStyle = css`
  width: 23px;
  height: 23px;
  margin-right: 7px;
  vertical-align: middle;

  @media (max-width: 700px) {
  }
`;

export const contributionsStyle = css`
  margin-top: 20px;
  width: 95%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  ul {
    width: 95%;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    line-height: 1.3;
    font-size: 1.1rem;
    margin: 0;
  }

  li {
    width: 100%;
    height: 100%;
    white-space: normal;
    word-break: break-word;
  }

  @media (max-width: 700px) {
    width: 100%;
    ul {
      height: 100%;
      padding-left: 5px;
      line-height: 1.8;
      font-size: 1rem;
    }
    li {
      word-break: break-word;
      white-space: normal;
      flex-wrap: wrap;
    }
  }
`;

export const screenshotsStyle = css`
  margin-top: 20px;
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;


  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-weight: 700;
  }

  ul {
    width: 95%;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    line-height: 1.6;
    margin: 0;
  }

  li {
    width: 100%;
    height: 100%;
    white-space: normal;
    word-break: break-word;
  }
  
  p {
    margin: 0 0 10px 0;
  }

  @media (max-width: 700px) {
    width: 100%;

    ul {
      padding-left: 5px;
    }
  }
`;

export const screenshotsContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: flex-start;
  margin-top: 10px;
  padding: 0 20px;
  padding-bottom: 30px;
  cursor: pointer;

  @media (max-width: 700px) {
    padding: 0 0 30px 0;
  }
`;

export const screenshotImageStyle = css`
  box-sizing: border-box;
  width: 30%;
  min-width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  border: 1px solid #dbdbdb;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const contributionsHeadingStyle = css`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  gap: 10px;
`;

export const contributionsgStyle = css`
  display: flex;
  align-items: center;
  font-weight: 700;

  div {
    width: 95%;
    background-color: #e7e5e4;
    padding: 13px 15px;
  }

  p {
    padding: 0 20px;
    font-size: 0.9em;
    font-weight: 400;
    margin: 15px 0 20px 0;
  }

  svg {
    padding-right: 5px;
  }

  @media (max-width: 700px) {
    p {
      padding: 0;
    }

    div {
      width: 100%;
      background-color: #dbdbdb;
      padding: 7px 0px 7px 7px;
    }
  }
`;

export const fullscreenOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(32, 32, 32, 0.76);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const fullscreenModalStyle = css`
  position: relative;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const fullscreenImageStyle = css`
  width: 60%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
