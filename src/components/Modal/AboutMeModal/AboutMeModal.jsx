/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import * as s from "./style";

function AboutMeModal({ description, image, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div css={s.modalOverlayStyle} onClick={handleOverlayClick}>
      <div css={s.modalContentStyle}>
        <button onClick={onClose} css={s.closeButton}>
          <IoMdClose css={s.iconStyle} />
        </button>
        <div css={s.modalContent}>
          <img src={image} alt="" css={s.modalImage} />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeModal;
