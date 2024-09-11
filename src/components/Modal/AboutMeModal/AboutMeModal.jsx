/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { createPortal } from "react-dom";

function AboutMeModal({ description, image, onClose }) {
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

  return createPortal(
    <div css={s.modalOverlayStyle} onClick={handleOverlayClick}>
      <div css={s.modalContentStyle(isClosing)}>
        <button onClick={closeWithAnimation} css={s.closeButton}>
          <span css={s.iconStyle}>X</span>
        </button>
        <div css={s.modalContent}>
          <div css={s.imageWrapper}>
            <img src={image} alt="" css={s.modalImage} />
            <div css={s.backgroundBottom}></div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default AboutMeModal;
