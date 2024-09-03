/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import PageLayout from "../../components/PageComponents/PageLayout/PageLayout";
import * as s from "./style";
import main from "../../assets/img/rotated_바다사진.jpg";
import profile from "../../assets/img/이지언2.jpg";
import spring from "../../assets/icon/Spring.png";
import cssIcon from "../../assets/icon/CSS3.png";
import aws from "../../assets/icon/AWS.png";
import firebase from "../../assets/icon/Firebase.png";
import html from "../../assets/icon/HTML5.png";
import java from "../../assets/icon/Java.png";
import js from "../../assets/icon/JavaScript.png";
import mysql from "../../assets/icon/MySQL.png";
import reactIcon from "../../assets/icon/React.png";

function AboutMePage(props) {
  const listRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const page = pageRef.current;
  
    const handleWheel = (e) => {
      const atStart = list.scrollLeft === 0;
      const atEnd = list.scrollLeft >= list.scrollWidth - list.clientWidth;
  
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // 사용자 스크롤이 가로 방향일 때 가로 스크롤 처리
        if (!atEnd || (!atStart && e.deltaX < 0)) {
          e.preventDefault();
          list.scrollLeft += e.deltaX * 0.5; // 가로 스크롤 속도 조정
        }
      } else {
        // 세로 스크롤 처리
        if ((atEnd && e.deltaY > 0) || (atStart && e.deltaY < 0)) {
          page.scrollTop += e.deltaY;
        } else {
          e.preventDefault();
          list.scrollLeft += e.deltaY * 0.5; // 가로 스크롤 속도 조정
        }
      }
    };
  
    page.addEventListener("wheel", handleWheel, { passive: false });
  
    return () => {
      page.removeEventListener("wheel", handleWheel);
    };
  }, []);
  
  

  const images = [
    profile,
    spring,
    cssIcon,
    aws,
    firebase,
    html,
    java,
    js,
    mysql,
    reactIcon,
  ];

  return (
    <PageLayout>
      <div css={s.layout} ref={pageRef}>
        <div css={s.container}>
          <div css={s.aboutme}>
            <img src={main} alt="main" />
            <h1>이지언</h1>
            <p>시련은 있어도 실패는 없다</p>
            <p># 사용자가 편리한 UI</p>
            <p># 더 나은 서비스 구축</p>
            <p># 학습하고 성장할 수 있는 기회</p>
            <img src={profile} className="profile" alt="profile" />
          </div>
          <div css={s.profileLayout}>
            <div css={s.listLayout} ref={listRef}>
              {images.map((img, index) => (
                <div css={s.contentWrapper} key={index}>
                  <div css={s.contentBackground}>{index + 1}</div>
                  <div css={s.contentCard}>
                    <img src={img} alt={`Content ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div css={s.test}>추가 내용</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default AboutMePage;
