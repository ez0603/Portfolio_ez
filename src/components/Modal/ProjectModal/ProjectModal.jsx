/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { GrClose } from "react-icons/gr";
import { useEffect } from "react";
import Github from "../../../assets/icon/GitHub.png";

function ProjectModal({ isOpen, onClose, content }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div css={s.overlayStyle} onClick={handleOverlayClick}>
      <div css={s.modalStyle}>
        <button css={s.closeButtonStyle} onClick={onClose}>
          <span css={s.iconStyle}>
            <GrClose />
          </span>
        </button>
        <div css={s.contentStyle}>
          <h1>{content.title}</h1>
          <h3>{content.period}</h3>
          <ul>
            {content.techStack.map((tech, index) => (
              <li key={index}>
                <img src={tech} alt={`tech-${index}`} />
              </li>
            ))}
          </ul>
          <p>{content.description}</p>

          {content.githubUrl && (
            <a
              href={content.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              css={s.githubLinkStyle}
            >
              <img src={Github} alt="Github" css={s.githubIconStyle} />
              깃허브에서 보기
            </a>
          )}

          {content.features && (
            <div css={s.mainfunctionsLayout}>
              <h3>주요 기능 및 특징</h3>
              <ul>
                {content.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 기여 부분 */}
          {content.contributions && (
            <div css={s.contributionsStyle}>
              <h3>기여 부분</h3>
              <ul>
                {content.contributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 구현 화면 */}
          {content.screenshots && (
            <div css={s.screenshotsStyle}>
              <h3>구현 화면</h3>
              <div css={s.screenshotsContainerStyle}>
                {content.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`screenshot-${index}`}
                    css={s.screenshotImageStyle}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
