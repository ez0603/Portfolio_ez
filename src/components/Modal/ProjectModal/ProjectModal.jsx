/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import Github from "../../../assets/icon/GitHub.png";
import { TiPin } from "react-icons/ti";
import { SlScreenDesktop } from "react-icons/sl";

function ProjectModal({ isOpen, onClose, content }) {
  const [selectedImage, setSelectedImage] = useState(null); // 전체화면에 표시할 이미지 상태 관리

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

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc); // 클릭한 이미지로 상태 업데이트
  };

  const handleCloseImageModal = () => {
    setSelectedImage(null); // 이미지 모달 닫기
  };

  return (
    <div>
      {/* 기본 모달 */}
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

            {content.contributions && (
              <div css={s.contributionsStyle}>
                <h3 css={s.contributionsHeadingStyle}>
                  <TiPin size={30} /> 기여 부분
                </h3>
                <ul>
                  {content.contributions.map((contribution, index) => (
                    <li
                      key={index}
                      className={
                        contribution === "Back"
                          ? "highlight-back"
                          : contribution === "Front"
                          ? "highlight-front"
                          : ""
                      }
                    >
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.screenshots && (
              <div css={s.screenshotsStyle}>
                <h3 css={s.contributionsHeadingStyle}>
                  <SlScreenDesktop size={23} />
                  구현 화면
                </h3>
                <div css={s.screenshotsContainerStyle}>
                  {content.screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot}
                      alt={`screenshot-${index}`}
                      css={s.screenshotImageStyle}
                      onClick={() => handleImageClick(screenshot)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div css={s.fullscreenOverlayStyle} onClick={handleCloseImageModal}>
          <div css={s.fullscreenModalStyle}>
            <img
              src={selectedImage}
              alt="fullscreen"
              css={s.fullscreenImageStyle}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectModal;
