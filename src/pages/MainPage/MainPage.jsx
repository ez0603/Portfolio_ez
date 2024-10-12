/** @jsxImportSource @emotion/react */
import PageLayout from "../../components/PageComponents/PageLayout/PageLayout";
import * as s from "./style";
import main from "../../assets/img/main.jpg";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import ProfileModal from "../../components/Modal/ProfileModal/ProfileModal";
import ProjectModal from "../../components/Modal/ProjectModal/ProjectModal";
import { useLocation } from "react-router-dom";
import tableMaid from "../../assets/img/tableMaid.jpg";
import useSkillIcons from "../../hooks/useSkillIcons";
import useProjectDetails from "../../hooks/useProjectDetails";
import AboutMeModal from "../../components/Modal/AboutMeModal/AboutMeModal";
import AboutMeList from "../../components/AboutMeList/AboutMeList";

function MainPage(props) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalContent, setModalContent] = useState({ description: "", image: "" });

  const textRef = useRef(null);
  const location = useLocation();
  const [key, setKey] = useState(0);
  const skillIcons = useSkillIcons();
  const [isMobile, setIsMobile] = useState(false);
  const projects = useProjectDetails();

  const handleOpenProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const handleCloseProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  const handleOpenAboutMeModal = (description, image) => {
    setModalContent({ description, image });
    setIsAboutMeModalOpen(true);
  };

  const handleCloseAboutMeModal = () => {
    setIsAboutMeModalOpen(false);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const handleOpenProjectModal = (project) => {
    setSelectedProject(project);
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
            <button css={s.look} onClick={handleOpenProfileModal}>
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
                {projects.map((project, index) => (
                  <li
                    key={index}
                    className="project-item"
                    css={s.project}
                    onClick={() => handleOpenProjectModal(project)}
                  >
                    <div css={s.projectImg(tableMaid)} />
                    <div className="textBox" css={s.textBox}>
                      <h1>{project.title}</h1>
                      <p>{project.period}</p>
                      <h3>{project.description}</h3>
                      <div css={s.skillIconsContainer}>
                        {Object.entries(skillIcons.list).map(([skill, icon]) => (
                          <div key={skill} css={s.skillIconWrapper}>
                            <img src={icon} alt={skill} css={s.skillIcon} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div css={s.aboutmeExLayout}>
              <div css={s.exContainer}>
                <h2># 나에 관하여</h2>
                <AboutMeList onImageClick={handleOpenAboutMeModal} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
          content={selectedProject}
        />
      )}

      {isProfileModalOpen && (
        <ProfileModal onClose={handleCloseProfileModal} />
      )}

      {isAboutMeModalOpen && (
        <AboutMeModal
          description={modalContent.description}
          image={modalContent.image}
          onClose={handleCloseAboutMeModal}
        />
      )}
    </PageLayout>
  );
}

export default MainPage;
