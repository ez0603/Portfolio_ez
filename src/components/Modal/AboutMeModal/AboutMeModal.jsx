/** @jsxImportSource @emotion/react */
import { IoMdClose } from "react-icons/io";
import * as s from "./style"; //

function AboutMeModal({ title, description, image, onClose }) {
  return (
    <div css={s.modalOverlay}>
      <div css={s.modalContent}>
        <button onClick={onClose} css={s.closeButton}>
          <IoMdClose size={24} />
        </button>
        <h2>{title}</h2>
        <img src={image} alt={title} css={s.modalImage} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AboutMeModal;
