/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { MdClose } from "react-icons/md";

function ProjectModal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div css={s.overlayStyle}>
      <div css={s.modalStyle}>
        <button css={s.closeButtonStyle} onClick={onClose}>
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
