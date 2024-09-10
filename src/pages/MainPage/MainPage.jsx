/** @jsxImportSource @emotion/react */
import PageLayout from "../../components/PageComponents/PageLayout/PageLayout";
import * as s from "./style";
import main from "../../assets/img/main.jpg";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import ProfileModal from "../../components/Modal/ProfileModal/ProfileModal";
import { useLocation } from "react-router-dom";

function MainPage(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const textRef = useRef(null);
  const location = useLocation();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const textElement = textRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textElement.classList.remove("visible");
            setTimeout(() => {
              textElement.classList.add("visible");
            }, 50);
          } else {
            textElement.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textElement) {
      observer.observe(textElement);
    }

    return () => {
      if (textElement) {
        observer.unobserve(textElement);
      }
    };
  }, [location]);

  return (
    <PageLayout>
      <div css={s.layout}>
        <div css={s.container}>
          <div css={s.aboutme} onContextMenu={handleContextMenu}>
            <div
              css={s.mainImg(main)}
              draggable="false"
              onContextMenu={handleContextMenu}
            >
              <div css={s.backgroundBottom}></div>
            </div>
            <h1 ref={textRef} css={s.bounceText}>
              <span>끈</span>
              <span>기</span>
              <span>있</span>
              <span>는</span>
              <br />
              <span>개</span>
              <span>발</span>
              <span>자</span>
            </h1>
            <p>
              일을 맡으면 끝까지 하는 끈기와 책임감을 가지고 있습니다.
              <br />
              웹 개발을 위한 프론트엔드와 백엔드 기술을 배운 적이 있어 협업을 할
              때
              <br />
              팀원들과의 소통에 더 능하다는 장점이 있습니다.
              <br />
            </p>
            <button css={s.look} onClick={handleOpenModal}>
              <IoMdInformationCircleOutline />
              상세 정보
            </button>
          </div>
          <div css={s.profileLayout}>
            <div css={s.test}></div>
          </div>
        </div>
      </div>
      {isModalOpen && <ProfileModal onClose={handleCloseModal} />}
    </PageLayout>
  );
}

export default MainPage;
