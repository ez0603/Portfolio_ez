/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";

function ProjectModal({ isOpen, onClose, content }) {
  const [isClosing, setIsClosing] = useState(false);

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

  const closeWithAnimation = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div css={s.overlayStyle} onClick={handleOverlayClick}>
      <div css={s.modalStyle(isClosing)}>
        <button css={s.closeButtonStyle} onClick={closeWithAnimation}>
          <MdClose css={s.iconStyle} />
        </button>
        <div css={s.contentStyle}>
          <h1>{content.title}</h1>
          <p>{content.period}</p>
          <p>{content.description}</p>
          <h3>사용된 기술:</h3>
          <div>
            {content.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
