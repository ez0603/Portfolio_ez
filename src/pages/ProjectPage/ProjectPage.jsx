/** @jsxImportSource @emotion/react */
import PageLayout from "../../components/PageComponents/PageLayout/PageLayout";
import * as s from "./style";
import projectPad from "../../assets/img/backPad3.png";
import projectPhone from "../../assets/img/backPhone2.png";
import { useEffect, useRef } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useLocation } from "react-router-dom";

function ProjectPage(props) {
  const location = useLocation();
  const headingRef = useRef(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const images = document.querySelectorAll(".fade-in-image");
    images.forEach((img) => {
      img.classList.remove("visible");
      setTimeout(() => {
        img.classList.add("visible");
      }, 100);
    });

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
  }, [location]);

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
          <div css={s.projectLayout}></div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ProjectPage;
