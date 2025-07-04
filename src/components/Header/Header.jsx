import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import logo from "../../assets/logo.png"; // ✅ Make sure image is in src/assets

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    const handleMediaQueryChange = (mq) => {
      setIsSmallScreen(mq.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const toggleNav = () => setNavVisibility(!isNavVisible);

  return (
    <header className="Header">
      <img src={logo} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <a href="/">About</a>
          <button>Logout</button>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>
  );
}
