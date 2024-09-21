/** @jsxImportSource @emotion/react */
import PageLayout from "../../components/PageComponents/PageLayout/PageLayout";
import * as s from "./style";
import projectPad from "../../assets/img/backPad3.png";
import projectPhone from "../../assets/img/backPhone2.png";
import tableMaid from "../../assets/img/tableMaid.jpg";
import tableMaidMobile from "../../assets/img/tableMaidMobile.jpg";
import project2 from "../../assets/img/main.jpg";
import project3 from "../../assets/img/rotated_바다사진.jpg";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useLocation } from "react-router-dom";
import useSkillIcons from "../../hooks/useSkillIcons";
import ProjectModal from "../../components/Modal/ProjectModal/ProjectModal";
import useProjectDetails from "../../hooks/useProjectDetails";

const imageMappings = {
  web: {
    tableMaid: tableMaid,
    project2: project2,
    project3: project3,
  },
  mobile: {
    tableMaid: tableMaidMobile,
    project2: project2,
    project3: project3,
  },
};

function ProjectPage() {
  const location = useLocation();
  const headingRef = useRef(null);
  const [images, setImages] = useState(imageMappings.web);
  const skillIcons = useSkillIcons();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const projectDetails = useProjectDetails();

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const updateImages = () => {
    if (window.innerWidth <= 700) {
      setImages(imageMappings.mobile);
    } else {
      setImages(imageMappings.web);
    }
  };

  useEffect(() => {
    updateImages();
    window.addEventListener("resize", updateImages);
    return () => {
      window.removeEventListener("resize", updateImages);
    };
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const projects = document.querySelectorAll(".project-item");
    const images = document.querySelectorAll(".fade-in-image");

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

    images.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      projects.forEach((project) => observer.unobserve(project));
      images.forEach((img) => observer.unobserve(img));
    };
  }, [location]);

  useEffect(() => {
    const headingElement = headingRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeInTextVisible");
          } else {
            entry.target.classList.remove("fadeInTextVisible");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingElement) {
      observer.observe(headingElement);
    }

    return () => {
      if (headingElement) {
        observer.unobserve(headingElement);
      }
    };
  }, []);

  return (
    <PageLayout>
      <div css={s.layout}>
        <div css={s.container}>
          <div css={s.background} onContextMenu={handleContextMenu}>
            <div css={s.imageContainer}>
              <div
                className="fade-in-image"
                css={s.backPhoneImg(projectPhone)}
              />
              <div className="fade-in-image" css={s.backPadImg(projectPad)} />
            </div>
            <h1 ref={headingRef} css={s.fadeInText}>
              Project
            </h1>
            <div css={s.arrowContainer}>
              <div css={s.arrow}>
                <MdKeyboardDoubleArrowDown />
              </div>
            </div>
          </div>
          <div css={s.projectLayout}>
            <ul css={s.projectContainer}>
              {projectDetails.map((project, index) => (
                <li
                  key={index}
                  className="project-item"
                  css={s.project}
                  onClick={() => openModal(project)}
                >
                  <div css={s.projectImg(images[project.imageKey])} />
                  <div css={s.textBox}>
                    <h1>{project.title}</h1>
                    <p>{project.period}</p>
                    <h3>{project.description}</h3>
                    <div css={s.skillIconsContainer}>
                      {project.techStack.map((tech, techIndex) => (
                        <div key={techIndex} css={s.skillIconWrapper}>
                          <img
                            src={tech}
                            alt={`tech-${techIndex}`}
                            css={s.skillIcon}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {modalContent && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          content={modalContent}
        />
      )}
    </PageLayout>
  );
}

export default ProjectPage;
