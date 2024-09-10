/** @jsxImportSource @emotion/react */
import PageLayout from "../../components/PageComponents/PageLayout/PageLayout";
import * as s from "./style";
import projectPad from "../../assets/img/backPad3.png";
import projectPhone from "../../assets/img/backPhone2.png";
import tableMaid from "../../assets/img/tableMaid.jpg";
import tableMaidMobile from "../../assets/img/tableMaidMobile.jpg";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useLocation } from "react-router-dom";

const imageMappings = {
  web: {
    tableMaid: tableMaid,
  },
  mobile: {
    tableMaid: tableMaidMobile,
  },
};

function ProjectPage() {
  const location = useLocation();
  const headingRef = useRef(null);
  const [images, setImages] = useState(imageMappings.web);

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
            entry.target.classList.remove("fadeInTextVisible"); // 화면에서 벗어나면 제거
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
            <div css={s.backgroundBottom} />
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
              <li className="project-item" css={s.project}>
                <div css={s.projectImg(images.tableMaid)} />
                <div css={s.textBox}>
                  <h1>Table Maid</h1>
                  <p>2024.05.24 ~ 2024.08.12</p>
                  <h3>
                    관리자와 사용자 모드가 나누어 관리할 수 있는 비대면 주문
                    결제 서비스
                  </h3>
                </div>
              </li>
              <li className="project-item" css={s.project}>
                <div css={s.projectImg(images.tableMaid)} />
              </li>
              <li className="project-item" css={s.project}>
                <div css={s.projectImg(images.tableMaid)} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ProjectPage;
