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

  useEffect(() => {
    const list = listRef.current;

    const scrollSpeed = 1; // 스크롤 속도 설정
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        list.scrollLeft += scrollSpeed;

        // 스크롤이 끝에 도달하면, 처음으로 돌아가는 효과
        if (list.scrollLeft >= list.scrollWidth / 2) {
          list.scrollLeft = 0;
        }
      }, 20); // 20ms마다 스크롤 업데이트
    };

    startAutoScroll(); // 컴포넌트 마운트 시 자동 스크롤 시작

    return () => {
      clearInterval(scrollInterval); // 컴포넌트 언마운트 시 자동 스크롤 중지
    };
  }, []);

  const images = [
    reactIcon,
    cssIcon,
    js,
    spring,
    html,
    java,
    mysql,
    firebase,
    aws,
  ];

  // 리스트 아이템을 두 번 렌더링하여 무한 스크롤 효과
  const duplicatedImages = [...images, ...images];

  return (
    <PageLayout>
      <div css={s.layout}>
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
          <div css={s.subheading}>
            <h2>SKILLS <b>RANKING</b></h2>
          </div>
          <div css={s.profileLayout}>
            <div css={s.listLayout} ref={listRef}>
              {duplicatedImages.map((img, index) => (
                <div css={s.contentWrapper} key={index}>
                  <div css={s.contentBackground}>
                    {(index % images.length) + 1}
                  </div>
                  <div css={s.contentCard}>
                    <img
                      src={img}
                      alt={`Content ${(index % images.length) + 1}`}
                    />
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
