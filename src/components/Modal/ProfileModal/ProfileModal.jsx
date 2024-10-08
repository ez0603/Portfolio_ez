/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import profile from "../../../assets/img/이지언.jpg";
import deu from "../../../assets/img/동의대.png";
import Highschool from "../../../assets/img/삼정고.png";
import it from "../../../assets/img/코리아it.png";
import { GrClose } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import useContent from "../../../hooks/useContent";
import useSkillIcons from "../../../hooks/useSkillIcons";

function ProfileModal({ onClose }) {
  const [copiedField, setCopiedField] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const content = useContent();
  const skillIcons = useSkillIcons();
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeWithAnimation = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeWithAnimation();
    }
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      onClose();
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
      })
      .catch((err) => console.error("Error copying text: ", err));
  };

  const skillDescriptions = {
    React: content[0]?.text,
    "HTML5 / CSS3": content[1]?.text,
    JavaScript: content[2]?.text,
    Java: content[3]?.text,
    "Spring Boot": content[4]?.text,
    MySQL: content[5]?.text,
    Firebase: content[6]?.text,
    GitHub: content[7]?.text,
  };

  const handleSkillClick = (skill, e) => {
    e.stopPropagation();
    if (selectedSkill === skill) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
    }
  };

  const handleModalContentClick = () => {
    setSelectedSkill(null);
  };

  return (
    <>
      <div css={s.modalOverlayStyle} onClick={handleOverlayClick}>
        <div
          css={s.modalContentStyle(isClosing)}
          onClick={handleModalContentClick}
          onAnimationEnd={handleAnimationEnd}
        >
          <div css={s.closeButtonContainer}>
            <button onClick={closeWithAnimation} css={s.closeButton}>
              <span css={s.iconStyle}>
                <GrClose />
              </span>
            </button>
          </div>
          <div css={s.container}>
            <div css={s.header}>
              <h1>이지언</h1>
              <div css={s.backgroundBottom}></div>
              <div css={s.profileBackground(profile)}></div>
            </div>

            <div css={s.profile}>
              <div css={s.iconTextBox}>
                <div css={s.iconText}>
                  <MdEmail />
                  <span>dlwldjs3132@naver.com</span>
                  <button
                    onClick={() =>
                      copyToClipboard("dlwldjs3132@naver.com", "email")
                    }
                    css={copiedField === "email" ? s.copied : s.copy}
                  >
                    {copiedField === "email" ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div css={s.iconText}>
                  <FaGithub />
                  <span>https://github.com/ez0603</span>
                  <button
                    onClick={() =>
                      copyToClipboard("https://github.com/ez0603", "github")
                    }
                    css={copiedField === "github" ? s.copied : s.copy}
                  >
                    {copiedField === "github" ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <div css={s.skillContainer}>
                <h3>Front</h3>
                <div css={s.skillBar}>
                  {Object.keys(skillIcons.frontend).map((skill) => (
                    <div
                      key={skill}
                      css={[
                        s.skillbox,
                        selectedSkill === skill && s.selectedSkill,
                      ]}
                      onClick={(e) => handleSkillClick(skill, e)}
                    >
                      <div css={s.skillContentRow}>
                        {Array.isArray(skillIcons.frontend[skill]) ? (
                          skillIcons.frontend[skill].map((icon, index) => (
                            <img key={index} src={icon} alt={skill} />
                          ))
                        ) : (
                          <img src={skillIcons.frontend[skill]} alt={skill} />
                        )}
                        <p>{skill}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {selectedSkill &&
                  Object.keys(skillIcons.frontend).includes(selectedSkill) && (
                    <div css={s.skillDescription} key={selectedSkill}>
                      <div css={s.skillDescriptionBox}>
                        <p css={s.skillLine}>
                          {skillDescriptions[selectedSkill]}
                        </p>
                      </div>
                    </div>
                  )}

                <h3>Back</h3>
                <div css={s.skillBar}>
                  {Object.keys(skillIcons.backend).map((skill) => (
                    <div
                      key={skill}
                      css={[
                        s.skillbox,
                        selectedSkill === skill && s.selectedSkill,
                      ]}
                      onClick={(e) => handleSkillClick(skill, e)}
                    >
                      <div css={s.skillContentRow}>
                        <img src={skillIcons.backend[skill]} alt={skill} />
                        <p>{skill}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {selectedSkill &&
                  Object.keys(skillIcons.backend).includes(selectedSkill) && (
                    <div css={s.skillDescription} key={selectedSkill}>
                      <div css={s.skillDescriptionBox}>
                        <p css={s.skillLine}>
                          {skillDescriptions[selectedSkill]}
                        </p>
                      </div>
                    </div>
                  )}

                <h3>Database</h3>
                <div css={s.skillBar}>
                  {Object.keys(skillIcons.database).map((skill) => (
                    <div
                      key={skill}
                      css={[
                        s.skillbox,
                        selectedSkill === skill && s.selectedSkill,
                      ]}
                      onClick={(e) => handleSkillClick(skill, e)}
                    >
                      <div css={s.skillContentRow}>
                        <img src={skillIcons.database[skill]} alt={skill} />
                        <p>{skill}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {selectedSkill &&
                  Object.keys(skillIcons.database).includes(selectedSkill) && (
                    <div css={s.skillDescription} key={selectedSkill}>
                      <div css={s.skillDescriptionBox}>
                        <p css={s.skillLine}>
                          {skillDescriptions[selectedSkill]}
                        </p>
                      </div>
                    </div>
                  )}
              </div>

              <div css={s.boxLayout}>
                <div css={s.list}>
                  <div css={s.box}>
                    <img
                      src={deu}
                      alt="University"
                      onContextMenu={(e) => e.preventDefault()}
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
                      onContextMenu={(e) => e.preventDefault()}
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
                      onContextMenu={(e) => e.preventDefault()}
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
                      onContextMenu={(e) => e.preventDefault()}
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
      </div>
    </>
  );
}

export default ProfileModal;
