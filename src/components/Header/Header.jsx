/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import * as s from "./style";
import logo from "../../assets/img/포트폴리오 로고.png";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      console.log("window.scrollY:", window.scrollY); // 스크롤 위치 출력
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div css={[s.layout, isScrolled && s.scrolledLayout]}>
      <div css={s.logoLayout}>
        <img src={logo} alt="Logo" onClick={handleLogoClick} />
      </div>
      <div css={s.categoryLayout}>
        <Link to="/AboutMe" css={s.link}>
          About Me
        </Link>
        <Link to="/Project" css={s.link}>
          Project
        </Link>
      </div>
    </div>
  );
}

export default Header;
