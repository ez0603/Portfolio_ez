/** @jsxImportSource @emotion/react */
import { IoMdClose } from "react-icons/io";
import * as s from "./style";

function AboutMeModal({ description, image, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div css={s.modalOverlay} onClick={handleOverlayClick}>
      <div css={s.modalContent}>
        <button onClick={onClose} css={s.closeButton}>
          <IoMdClose css={s.iconStyle} />
        </button>
        <img src={image} alt="" css={s.modalImage} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AboutMeModal;
