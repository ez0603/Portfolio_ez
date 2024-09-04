/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import PageLayout from "../../components/PageComponents/PageLayout/PageLayout";
import * as s from "./style";
import main from "../../assets/img/rotated_바다사진.jpg";
import profile from "../../assets/img/이지언2.jpg";
import spring from "../../assets/icon/Spring.png";
import cssIcon from "../../assets/icon/CSS3.png";
import Git from "../../assets/icon/GitHub.png";
import firebase from "../../assets/icon/Firebase.png";
import html from "../../assets/icon/HTML5.png";
import java from "../../assets/icon/Java.png";
import js from "../../assets/icon/JavaScript.png";
import mysql from "../../assets/icon/MySQL.png";
import reactIcon from "../../assets/icon/React.png";
import useContent from "../../hooks/useContent";
import AboutMeModal from "../../components/Modal/AboutMeModal/AboutMeModal";
import AboutMeList from "../../components/AboutMeList/AboutMeList";

function AboutMePage(props) {
  const listRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const content = useContent();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    description: "",
    image: "",
  });

  const startAutoScroll = () => {
    const list = listRef.current;
    const scrollSpeed = 1;

    scrollIntervalRef.current = setInterval(() => {
      list.scrollLeft += scrollSpeed;
      if (list.scrollLeft >= list.scrollWidth - list.clientWidth) {
        list.scrollLeft = 0;
      }
    }, 15);
  };

  const stopAutoScroll = () => {
    clearInterval(scrollIntervalRef.current);
  };

  useEffect(() => {
    if (isModalOpen) {
      stopAutoScroll();
    } else {
      startAutoScroll();
    }
    return () => {
      stopAutoScroll();
    };
  }, [isModalOpen]);

  const handleOpenModal = (description, image) => {
    setModalContent({ description, image });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMouseEnter = (index) => {
    stopAutoScroll();
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    startAutoScroll();
    setHoveredIndex(null);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const images = [
    reactIcon,
    [cssIcon, html],
    js,
    java,
    spring,
    mysql,
    firebase,
    Git,
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <PageLayout>
      <div css={s.layout}>
        <div css={s.container}>
          <div css={s.aboutme}>
            <img
              src={main}
              alt="main"
              onContextMenu={handleContextMenu}
              draggable="false"
            />
            <div css={s.introduce}>
              <h1>이지언</h1>
              <p className="wave">시련은 있어도 실패는 없다</p>
              <p className="wave"># 사용자가 편리한 UI</p>
              <p className="wave"># 더 나은 서비스 구축</p>
              <p className="wave"># 학습하고 성장할 수 있는 기회</p>
            </div>
            <img
              src={profile}
              className="profile"
              alt="profile"
              onContextMenu={handleContextMenu}
              draggable="false"
            />
          </div>
          <div css={s.subheading}>
            <h2>
              SKILLS <b>RANKING</b>
            </h2>
          </div>
          <div css={s.profileLayout}>
            <div css={s.listLayout} ref={listRef}>
              {duplicatedImages.map((img, index) => (
                <div css={s.contentWrapper} key={index}>
                  <div css={s.contentBackground}>
                    {(index % images.length) + 1}
                  </div>
                  <div
                    css={s.contentCard}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {Array.isArray(img) ? (
                      img.map((subImg, subIndex) => (
                        <img
                          key={subIndex}
                          src={subImg}
                          alt={`Content ${(index % images.length) + 1}-${
                            subIndex + 1
                          }`}
                          onContextMenu={handleContextMenu}
                          draggable="false"
                        />
                      ))
                    ) : (
                      <img
                        src={img}
                        alt={`Content ${(index % images.length) + 1}`}
                        onContextMenu={handleContextMenu}
                        draggable="false"
                      />
                    )}
                    <div className="hover-content">
                      <h3>{content[index % content.length].title}</h3>
                      <p>{content[index % content.length].text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div css={s.aboutmeExLayout}>
            <div css={s.exContainer}>
              <h2># 나에 관하여</h2>
              <AboutMeList onImageClick={handleOpenModal} />
            </div>
            {isModalOpen && (
              <AboutMeModal
                description={modalContent.description}
                image={modalContent.image}
                onClose={handleCloseModal}
              />
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default AboutMePage;
