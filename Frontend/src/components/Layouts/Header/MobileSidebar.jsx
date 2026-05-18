import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { HiHome } from "react-icons/hi2";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";
import { PiFactoryFill } from "react-icons/pi";
import { RiFileList3Fill } from "react-icons/ri";
import { FaBloggerB } from "react-icons/fa";
import { BsFillSuitcaseLgFill } from "react-icons/bs";

import "./MobileSidebar.css";

const MobileSidebar = ({ isOpen, setSidebarOpen, toggleButtonRef }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedOutsideSidebar =
        sidebarRef.current && !sidebarRef.current.contains(e.target);
      const clickedToggleButton =
        toggleButtonRef?.current && toggleButtonRef.current.contains(e.target);

      if (clickedOutsideSidebar && !clickedToggleButton) {
        setSidebarOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, setSidebarOpen, toggleButtonRef]);

  return (
    <nav
      ref={sidebarRef}
      // The class "open" will trigger the slide-in transition
      className={`sidebar-container ${isOpen ? "open" : ""}`}
    >
      <div style={styles.contentWrapper} className="content-wrapper">
        <div style={styles.navLinks} className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setSidebarOpen(false)}
          >
            <HiHome style={{ marginRight: "8px", fontSize: "22px" }} /> Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setSidebarOpen(false)}
          >
            <BiSolidMessageSquareEdit
              style={{ marginRight: "8px", fontSize: "22px" }}
            />{" "}
            About us
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setSidebarOpen(false)}
          >
            <RiFileList3Fill style={{ marginRight: "8px", fontSize: "22px" }} />{" "}
            Portfolio
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setSidebarOpen(false)}
          >
            <MdHomeRepairService
              style={{ marginRight: "8px", fontSize: "22px" }}
            />{" "}
            Services
          </NavLink>
          <NavLink
            to="/solutions"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setSidebarOpen(false)}
          >
            <PiFactoryFill style={{ marginRight: "8px", fontSize: "22px" }} />{" "}
            Solutions
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setSidebarOpen(false)}
          >
            <FaBloggerB style={{ marginRight: "8px", fontSize: "22px" }} /> Blog
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setSidebarOpen(false)}
          >
            <BsFillSuitcaseLgFill style={{ marginRight: "8px", fontSize: "22px" }} /> Career
          </NavLink>
        </div>

        <div style={styles.socialLinks} className="social-links">
          <a
            href="https://www.facebook.com/ahaansoftwareconsulting"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://www.instagram.com/ahaansoftware/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/ahaansoftware"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://github.com/AhaanSoftware/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

// Kept your style object for layout, but moved animation logic to CSS
const styles = {
  contentWrapper: {
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  navLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  socialLinks: {
    display: "flex",
    gap: 15,
    marginTop: "50px",
  },
};

export default MobileSidebar;
