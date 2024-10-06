/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import Github from "../../../assets/icon/GitHub.png";

function ProjectModal({ isOpen, onClose, content }) {
  const [topMargin, setTopMargin] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        const viewportHeight = window.visualViewport.height;
        const documentHeight = window.innerHeight;
        if (viewportHeight < documentHeight) {
          const margin = documentHeight - viewportHeight;
          setTopMargin(margin);
        } else {
          setTopMargin(0);
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.visualViewport.addEventListener("resize", handleResize);
      handleResize();
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
      }
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
      <div css={[s.modalStyle, { marginTop: `${topMargin}px` }]}>
        <button css={s.closeButtonStyle} onClick={onClose}>
          <MdClose css={s.iconStyle} />
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
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
