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
import css from "../../../assets/icon/CSS3.png";
import aws from "../../../assets/icon/AWS.png";
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

  return (
    <>
      <div css={s.modalOverlayStyle} onClick={onClose} />
      <div css={s.modalContentStyle}>
        <button onClick={onClose} css={s.closeButton}>
          <IoCloseCircleSharp size={40} />
        </button>
        <div css={s.container}>
          <div css={s.header}>
            <h1>이지언</h1>
            <img src={profile} alt="" />
          </div>
          <div css={s.profile}>
            <div css={s.iconText}>
              <MdEmail fontSize={20} />
              <span>dlwldjs3132@naver.com</span>
              <button
                onClick={() => copyToClipboard("dlwldjs3132@naver.com", "email")}
                css={s.copy}
              >
                Copy
              </button>
              {copiedField === "email" && <span css={s.copySuccess}>Copied!</span>}
            </div>
            <div css={s.iconText}>
              <FaGithub fontSize={20} />
              <span>https://github.com/ez0603</span>
              <button
                onClick={() => copyToClipboard("https://github.com/ez0603", "github")}
                css={s.copy}
              >
                Copy
              </button>
              {copiedField === "github" && <span css={s.copySuccess}>Copied!</span>}
            </div>
            <div css={s.skillLayout}>
              <h3>Front</h3>
              <div css={s.slillboxContainer}>
                <div css={s.slillbox}>
                  <img src={react} alt="" />
                  <p>REACT</p>
                </div>
                <div css={s.slillbox}>
                  <img src={css} alt="" />
                  <p>CSS3</p>
                </div>
                <div css={s.slillbox}>
                  <img src={js} alt="" />
                  <p>JAVASCRIPT</p>
                </div>
                <div css={s.slillbox}>
                  <img src={html} alt="" />
                  <p>HTML5</p>
                </div>
              </div>
              <h3>Back</h3>
              <div css={s.slillboxContainer}>
                <div css={s.slillbox}>
                  <img src={java} alt="" />
                  <p>JAVA</p>
                </div>
                <div css={s.slillbox}>
                  <img src={spring} alt="" />
                  <p>SPRINGBOOT</p>
                </div>
                <div css={s.slillbox}>
                  <img src={aws} alt="" />
                  <p>AMAZON AWS</p>
                </div>
              </div>
              <h3>DataBase</h3>
              <div css={s.slillboxContainer}>
                <div css={s.slillbox}>
                  <img src={mysql} alt="" />
                  <p>MYSQL</p>
                </div>
                <div css={s.slillbox}>
                  <img src={firebase} alt="" />
                  <p>FIREBASE</p>
                </div>
              </div>
            </div>
            <div css={s.boxLayout}>
              <div css={s.list}>
                <div css={s.box}>
                  <img src={deu} alt="" />
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
                  <img src={Highschool} alt="" />
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
                  <img src={it} alt="" />
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
                  <img src={it} alt="" />
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