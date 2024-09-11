/** @jsxImportSource @emotion/react */
import PageLayout from "../../components/PageComponents/PageLayout/PageLayout";
import * as s from "./style";
import main from "../../assets/img/main.jpg";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import ProfileModal from "../../components/Modal/ProfileModal/ProfileModal";
import { useLocation } from "react-router-dom";
import tableMaid from "../../assets/img/tableMaid.jpg";
import useSkillIcons from "../../hooks/useSkillIcons";

function MainPage(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const textRef = useRef(null);
  const location = useLocation();
  const [key, setKey] = useState(0);
  const skillIcons = useSkillIcons();
  const [isMobile, setIsMobile] = useState(false);

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
    setKey((prevKey) => prevKey + 1);
  }, [location]);

  useEffect(() => {
    const textElement = textRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textElement.classList.add("visible");
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
  }, [key]);

  useEffect(() => {
    const projects = document.querySelectorAll(".project-item");

    const observerOptions =
      window.innerWidth <= 700
        ? { threshold: 0.1, rootMargin: "0px 0px 500px 0px" }
        : { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);

    projects.forEach((project) => {
      observer.observe(project);
    });

    return () => {
      projects.forEach((project) => observer.unobserve(project));
    };
  }, [location]);

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 700);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

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
            <h1 ref={textRef} key={key} css={s.bounceText}>
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
              {isMobile ? (
                <>
                  일을 맡으면 끝까지 하는 끈기와 책임감을 가지고 있습니다.
                  <br />
                  웹 개발을 위한 프론트엔드와 백엔드 기술을 배운 적이 있어
                  <br />
                  협업을 할 때 팀원들과의 소통에 더 능하다는 장점이 있습니다.
                  <br />
                </>
              ) : (
                <>
                  일을 맡으면 끝까지 하는 끈기와 책임감을 가지고 있습니다.
                  <br />
                  웹 개발을 위한 프론트엔드와 백엔드 기술을 배운 적이 있어
                  협업을 할 때
                  <br />
                  팀원들과의 소통에 더 능하다는 장점이 있습니다.
                  <br />
                </>
              )}
            </p>
            <button css={s.look} onClick={handleOpenModal}>
              <IoMdInformationCircleOutline />
              상세 정보
            </button>
          </div>
          <div css={s.profileLayout}>
            <div css={s.projectLayout}>
              <div css={s.projectHeader}>
                <h1>My Project</h1>
              </div>
              <ul css={s.projectContainer}>
                <li className="project-item" css={s.project}>
                  <div css={s.projectImg(tableMaid)} />
                  <div className="textBox" css={s.textBox}>
                    <h1>Table Maid</h1>
                    <p>2024.05.24 ~ 2024.08.12</p>
                    <h3>
                      관리자와 사용자 모드가 나누어 관리할 수 있는 비대면 주문
                      결제 서비스
                    </h3>
                    <div css={s.skillIconsContainer}>
                      {Object.entries(skillIcons.list).map(([skill, icon]) => (
                        <div key={skill} css={s.skillIconWrapper}>
                          <img src={icon} alt={skill} css={s.skillIcon} />
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="project-item" css={s.project}>
                  <div css={s.projectImg(tableMaid)} />
                  <div className="textBox" css={s.textBox}>
                    <div className="textBox" css={s.textBox}>
                      <h1>Table Maid</h1>
                      <p>2024.05.24 ~ 2024.08.12</p>
                      <h3>
                        관리자와 사용자 모드가 나누어 관리할 수 있는 비대면 주문
                        결제 서비스
                      </h3>
                    </div>
                    <div css={s.skillIconsContainer}>
                      {Object.entries(skillIcons.list).map(([skill, icon]) => (
                        <div key={skill} css={s.skillIconWrapper}>
                          <img src={icon} alt={skill} css={s.skillIcon} />
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="project-item" css={s.project}>
                  <div css={s.projectImg(tableMaid)} />
                  <div className="textBox" css={s.textBox} />
                </li>
              </ul>
            </div>
            <div css={s.test}>fsdf</div>
          </div>
        </div>
      </div>
      {isModalOpen && <ProfileModal onClose={handleCloseModal} />}
    </PageLayout>
  );
}

export default MainPage;
