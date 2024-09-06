/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import profile from "../../../assets/img/이지언.jpg";
import deu from "../../../assets/img/동의대.png";
import Highschool from "../../../assets/img/삼정고.png";
import it from "../../../assets/img/코리아it.png";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import spring from "../../../assets/icon/Spring.png";
import cssIcon from "../../../assets/icon/CSS3.png";
import firebase from "../../../assets/icon/Firebase.png";
import html from "../../../assets/icon/HTML5.png";
import java from "../../../assets/icon/Java.png";
import js from "../../../assets/icon/JavaScript.png";
import mysql from "../../../assets/icon/MySQL.png";
import react from "../../../assets/icon/React.png";

function ProfileModal({ onClose }) {
  const [copiedField, setCopiedField] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const copyToClipboard = (text, field) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
      })
      .catch((err) => console.error("Error copying text: ", err));
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div css={s.modalOverlayStyle} onClick={onClose} />
      <div css={s.modalContentStyle}>
        <button onClick={onClose} css={s.closeButton}>
          <IoCloseCircleSharp />
        </button>
        <div css={s.container}>
          <div css={s.header}>
            <h1>이지언</h1>
            <div css={s.profileBackground(profile)} />
          </div>
          <div css={s.profile}>
            <div css={s.iconText}>
              <MdEmail fontSize={20} />
              <span>dlwldjs3132@naver.com</span>
              <button
                onClick={() =>
                  copyToClipboard("dlwldjs3132@naver.com", "email")
                }
                css={s.copy}
              >
                {copiedField === "email" ? "Copied!" : "Copy"}
              </button>
            </div>
            <div css={s.iconText}>
              <FaGithub fontSize={20} />
              <span>https://github.com/ez0603</span>
              <button
                onClick={() =>
                  copyToClipboard("https://github.com/ez0603", "github")
                }
                css={s.copy}
              >
                {copiedField === "github" ? "Copied!" : "Copy"}
              </button>
            </div>
            <div css={s.skillLayout}>
              <h3>Front</h3>
              <div css={s.skillboxContainer}>
                <div css={s.skillbox}>
                  <img
                    src={react}
                    alt="React"
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  />
                  <p>REACT</p>
                </div>
                <div css={s.skillbox}>
                  <img
                    src={cssIcon}
                    alt="CSS3"
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  />
                  <p>CSS3</p>
                </div>
                <div css={s.skillbox}>
                  <img
                    src={js}
                    alt="JavaScript"
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  />
                  <p>JAVASCRIPT</p>
                </div>
                <div css={s.skillbox}>
                  <img
                    src={html}
                    alt="HTML5"
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  />
                  <p>HTML5</p>
                </div>
              </div>
              <h3>Back</h3>
              <div css={s.skillboxContainer}>
                <div css={s.skillbox}>
                  <img
                    src={java}
                    alt="Java"
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  />
                  <p>JAVA</p>
                </div>
                <div css={s.skillbox}>
                  <img
                    src={spring}
                    alt="SpringBoot"
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  />
                  <p>SPRINGBOOT</p>
                </div>
              </div>
              <h3>DataBase</h3>
              <div css={s.skillboxContainer}>
                <div css={s.skillbox}>
                  <img
                    src={mysql}
                    alt="MySQL"
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  />
                  <p>MYSQL</p>
                </div>
                <div css={s.skillbox}>
                  <img
                    src={firebase}
                    alt="Firebase"
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  />
                  <p>FIREBASE</p>
                </div>
              </div>
            </div>
            <div css={s.boxLayout}>
              <div css={s.list}>
                <div css={s.box}>
                  <img
                    src={deu}
                    alt="University"
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  />
                </div>
                <div css={s.textContainer}>
                  <h3>2018.03 ~ 2023.02</h3>
                  <div css={s.inlineText}>
                    <p>동의대</p>
                    <p className="small">로봇공학과</p>
                  </div>
                </div>
              </div>
              <div css={s.list}>
                <div css={s.box}>
                  <img
                    src={Highschool}
                    alt="High School"
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  />
                </div>
                <div css={s.textContainer}>
                  <h3>2015.03 ~ 2018.02</h3>
                  <div css={s.inlineText}>
                    <p>삼정고등학교</p>
                    <p className="small">이과(자연계열)</p>
                  </div>
                </div>
              </div>
              <div css={s.list}>
                <div css={s.box}>
                  <img
                    src={it}
                    alt="Korea IT"
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  />
                </div>
                <div css={s.textContainer}>
                  <h3>2024.12 ~ 2024.05</h3>
                  <div css={s.inlineText}>
                    <p>빅데이터 AI기반 헬스케어 플랫폼 개발 과정 수료</p>
                  </div>
                </div>
              </div>
              <div css={s.list}>
                <div css={s.box}>
                  <img
                    src={it}
                    alt="Web Frontend"
                    onContextMenu={handleContextMenu}
                    draggable="false"
                  />
                </div>
                <div css={s.textContainer}>
                  <h3>2024.12 ~ 2024.07</h3>
                  <div css={s.inlineText}>
                    <p>웹프론트엔드 과정 수료</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileModal;
