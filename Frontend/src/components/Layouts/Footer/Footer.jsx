import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleDown } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaFileAlt, FaTruck, FaGavel } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      className="footer-main"
      style={{
        backgroundImage:
          "url('https://ahaanmedia.com/asc/layouts/Footer-Banner.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        padding: "50px 0 20px 0",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Logo & Newsletter */}
          <div className="col-md-4">
            <div className="footer-logo-input">
              <img
                src="https://ahaanmedia.com/asc/layouts/asc.png"
                alt="Ahaan Logo"
                className="footer-logo"
              />
              <p className="newsletter-text">
                Subscribe to our newsletter to find out about all our latest
                offers.
              </p>
            </div>
            <div className="newsletter">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control"
              />
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 quicklink-responsive">
            <button
              className="accordion-button-quick-link d-md-none"
              onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
              aria-expanded={isQuickLinksOpen ? "true" : "false"}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                padding: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <h5 className="footer-heading" style={{ margin: 0 }}>
                QUICK LINKS
              </h5>
              <FaAngleDown
                className={`accordion-icon ${isQuickLinksOpen ? "open" : ""}`}
                style={{ marginLeft: "auto" }}
              />
            </button>
            <ul
              className={`footer-links ${
                isQuickLinksOpen ? "open" : ""
              } d-md-block`}
            >
              <li className="quick-link-for-desktop">
                <h5 className="footer-heading">QUICK LINKS</h5>
              </li>
              <li>
                <a href="../../../assets/privacy/Privacy Policy.docx" download>
                  <FaFileAlt className="quick-icon" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="../../../assets/privacy/Shipping Policy.docx" download>
                  <FaTruck className="quick-icon" /> Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="../../../assets/privacy/Terms and Conditions.docx"
                  download
                >
                  <FaGavel className="quick-icon" /> Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-4">
            <button
              className="accordion-button d-md-none"
              onClick={() => setIsContactUsOpen(!isContactUsOpen)}
              aria-expanded={isContactUsOpen ? "true" : "false"}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                padding: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <h5 className="footer-heading" style={{ margin: 0, flex: 1 }}>
                CONTACT US
              </h5>
              <FaAngleDown
                className={`accordion-icon ${isContactUsOpen ? "open" : ""}`}
                style={{ marginLeft: "auto" }}
              />
            </button>

            <div
              className={`accordion-content ${
                isContactUsOpen ? "open" : ""
              } d-md-block`}
            >
              <h5 className="contact-us-heading-for-desktop footer-heading">
                CONTACT US
              </h5>

              <p className="contact-info">
                <FaMapMarkerAlt className="footer-icon" /> Bengal Eco
                Intelligent Park, EM Block, Sector V, Kolkata-700 091
              </p>
              <p className="contact-info">
                <FaPhoneAlt className="footer-icon" />
                <a href="tel:+13214210740">+1 321-421-0740</a> &nbsp;/&nbsp;
                <a href="tel:+919830371143">+91 983-037-1143</a>
              </p>
              <p className="contact-info">
                <FaEnvelope className="footer-icon" />
                <a href="mailto:sales@ahaansoftware.com">
                  sales@ahaansoftware.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom mt-4 pt-3 border-top">
          <p className="footer-bottom-text mb-2 text-center">
            {isMobile
              ? "© 2025 Ahaan Software Consulting"
              : "© 2025 Ahaan Software, All rights reserved."}
          </p>
          <div className="footer-social-icons text-center">
            <a
              href="https://www.facebook.com/ahaansoftwareconsulting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ahaansoftware/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/ahaansoftware"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
