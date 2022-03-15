import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import $ from "jquery";

import { Connect } from "../Connect";

const Navbar = () => {
  const [isSideNavActive, setIsSideNavActive] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavActive((prevState) => !prevState);
  };

  useEffect(() => {
    $(".nav-sm a").click(function () {
      setIsSideNavActive(false);
    });
  }, []);

  return (
    <>
      <div className={`nav-sm ${isSideNavActive ? "active" : ""}`}>
        <div className="close" onClick={toggleSideNav}>
          &times;
        </div>
        <Link to="#hero" offset={-100}>
          Home
        </Link>
        <Link to="about" offset={-80}>
          Story
        </Link>
        <Link to="NFT" offset={-80}>
          Hams
        </Link>
        <Link to="team" offset={-80}>
          Team
        </Link>
        <Link to="roadmap" offset={-80}>
          Roadmap
        </Link>
        <Link to="FAQ" offset={-80}>
          FAQ
        </Link>
        <div className="btn connect">
          {/* <img src="./assets/img/connect.png" alt="connect" /> */}
          <Connect />
        </div>
        <div className="btns">
          <a
            className="btn"
            href="https://twitter.com/HamtonsPigs"
            target="_blank"
          >
            <img src="./assets/img/twitter.png" alt="twitter" />
          </a>
          <a
            className="btn"
            href="https://discord.com/invite/nEfa4pmqDR"
            target="_blank"
          >
            <img src="./assets/img/discord.png" alt="discord" />
          </a>
          <a
            className="btn"
            href="https://www.youtube.com/channel/UCL11HnSvsdSFNle78Iy46LQ"
            target="_blank"
          >
            <img src="./assets/img/youtube.png" alt="youtube" />
          </a>
        </div>
      </div>
      <div id="navbar">
        <div className="logo">
          <img src={"./assets/img/logo.png"} alt="logo" />
        </div>
        <div className="hamburger d-lg-none d-block" onClick={toggleSideNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="nav d-lg-flex d-none">
          <Link to="hero" offset={-80}>
            Home
          </Link>
          <Link to="about" offset={-80}>
            Story
          </Link>
          <Link to="NFT" offset={-80}>
            Hams
          </Link>
          <Link to="team" offset={-80}>
            Team
          </Link>
          <Link to="roadmap" offset={-80}>
            Roadmap
          </Link>
          <Link to="FAQ" offset={-80}>
            FAQ
          </Link>
        </div>

        <div className="cta d-lg-flex d-none">
          <div className="btn connect">
            {/* <img src="./assets/img/connect.png" alt="connect" /> */}
            <Connect />
          </div>
          <a
            className="btn"
            href="https://twitter.com/HamtonsPigs"
            target="_blank"
          >
            <img src="./assets/img/twitter.png" alt="twitter" />
          </a>
          <a
            className="btn"
            href="https://discord.com/invite/nEfa4pmqDR"
            target="_blank"
          >
            <img src="./assets/img/discord.png" alt="discord" />
          </a>
          <a
            className="btn"
            href="https://www.youtube.com/channel/UCL11HnSvsdSFNle78Iy46LQ"
            target="_blank"
          >
            <img src="./assets/img/youtube.png" alt="youtube" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
