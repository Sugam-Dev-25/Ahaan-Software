import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { a } from "react-router-dom";
import "./Header.css";
import { FiPhoneCall, FiMessageSquare } from "react-icons/fi"; // Phone icon add kora hoyeche
import MobileSidebar from "./MobileSidebar";
import MenuToggle from "./MenuToggle";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Tablet and Mobile range
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const openCallWidget = (e) => {
    e.preventDefault();

    const widgetButton = document.querySelector(
      "#callhippo-widget-container button",
    );

    if (widgetButton) {
      widgetButton.click();
    } else {
      alert("Call widget is loading...");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg py-2 py-lg-4 sticky-top header-main ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container asc-tablet-container">
        <a className=" d-flex align-items-center" href="/">
          <img
            src="https://ahaanmedia.com/ahaanwebsite/layouts/asc.webp"
            alt="logo"
            className="asc-logo"
          />
        </a>

        <div className="header-left-side d-flex align-items-center">
          <ul className="d-flex desktop-nav-menu">
            <li>
              <a exact="true" href="/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/service" className="nav-link">
                Services
              </a>
            </li>
            {/* <li><a href="/blog" className="nav-link">Blogs</a></li> */}
            <li>
              <a href="/case-studies" className="nav-link">
                Case Study
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="header-right-actions d-flex align-items-center">
          {/* Phone Number Section */}
          <div className="phone-contact-wrapper">
            <a href="tel:+1-646-575-9575" className="phone-link">
              <FiPhoneCall className="phone-icon" />
              <span className="phone-text">+1-646-575-9575</span>
            </a>
          </div>

          <div className="header-left-part">
            <div className="header-left-side">
              <div className="get-quote-container-1">
                {isMobile ? (
                  <a href="https://calendly.com/leads-ahaansoftware/free-consultation"  style={{ padding: 0 }}>
                    <FiMessageSquare size={32} className="phone-get-qt" />
                  </a>
                ) : (
                  <a
                    href="https://calendly.com/leads-ahaansoftware/free-consultation"
                    className="get-quote-btn"
                  
                  >
                    Request A Quote
                  </a>
                )}
              </div>

              <div className="asc-header">
                <MenuToggle
                  toggle={toggleSidebar}
                  isOpen={sidebarOpen}
                  ref={toggleRef}
                />
                <MobileSidebar
                  setSidebarOpen={setSidebarOpen}
                  isOpen={sidebarOpen}
                  toggleButtonRef={toggleRef}
                />
              </div>
            </div>

            <div className="get-quote-container-2">
              <a
                href="https://calendly.com/leads-ahaansoftware/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="get-quote-btn"
              >
                Book a Free Discovery Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
