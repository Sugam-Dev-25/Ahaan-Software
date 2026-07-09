import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleDown } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { BsCheckLg } from "react-icons/bs";
import { toast } from "react-toastify";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaFileAlt, FaTruck, FaGavel, FaBehance, FaGithub } from "react-icons/fa";
import "./Footer.css";
import PayglocalButton from "../../PayGlocal/PayglocalButton";

const Footer = () => {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Now only console log (Later you will connect API here)
  const onSubmit = (data) => {
    console.log("Newsletter Form Data:", data);
    toast.success("Form captured successfully!");
    reset();
  };

  return (
    <footer
      className="footer-main"
      style={{
        backgroundImage:
          "url('https://ahaanmedia.com/asc/layouts/Footer-Banner.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        padding: "150px 0 20px 0",
      }}
    >
      {/* Decorative shapes */}
      <img
        src="https://ahaanmedia.com/ahaanwebsite/All/footerimg2.png"
        alt="shape-1"
        className="footer-shape shape-one"
      />
      <img
        src="https://ahaanmedia.com/ahaanwebsite/All/footerimgs1.png"
        alt="shape-2"
        className="footer-shape shape-two"
      />

      <div className="container">
        <div className="row">
          {/* Logo & Newsletter */}
          <div className="col-md-3">
            <div className="footer-logo-input">
              <img
                src="https://ahaanmedia.com/ahaanwebsite/layouts/asc.webp"
                alt="Ahaan Logo"
                className="footer-logos"
              />
              <p className="newsletter-text">
                Subscribe to our newsletter to find out about all our latest
                offers.
              </p>
            </div>

            {/* ✅ Clean Newsletter Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <input
                  type="email"
                  placeholder="Email ID"
                  className={`form-control newsletter-input ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>

              <div className="d-flex justify-content-start">
                <button type="submit" className="newsletter-button">
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-3 quicklink-responsive">
            <button
              className="accordion-button-quick-link d-md-none"
              onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
              aria-expanded={isQuickLinksOpen}
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
              <h5 className="footer-heading m-0">QUICK LINKS</h5>
              <FaAngleDown
                className={`accordion-icon ${isQuickLinksOpen ? "open" : ""}`}
                style={{ marginLeft: "auto", color: "#fff" }}
              />
            </button>
            <ul
              className={`footer-links ${isQuickLinksOpen ? "open" : ""} d-md-block list-unstyled`}
            >
              <li className="quick-link-for-desktop">
                <h5 className="footer-heading">Quick Links</h5>
              </li>
              <li>
                <a href="/privacy-policy" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Cookie Policy
                </a>
              </li>
              <li>
                <a href="/grievance-policy" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Grievance Policy
                </a>
              </li>
              <li>
                <a
                  href="/information-security-policy"
                  className="text-decoration-none"
                >
                  <BsCheckLg className="quick-icon" /> Information Security
                  Policy
                </a>
              </li>
              <li>
                <a
                  href="/intellectual-property-policy"
                  className="text-decoration-none"
                >
                  <BsCheckLg className="quick-icon" /> Intellectual Property
                  Policy
                </a>
              </li>
              <li>
                <a href="/terms-conditions" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Terms Conditions
                </a>
              </li>
              <li>
                <a
                  href="/environmental-policy"
                  className="text-decoration-none"
                >
                  <BsCheckLg className="quick-icon" /> Environmental Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div className="col-md-3 quicklink-responsive">
            <button
              className="accordion-button-quick-link d-md-none"
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              aria-expanded={isPagesOpen}
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
              <h5 className="footer-heading m-0">PAGES</h5>
              <FaAngleDown
                className={`accordion-icon ${isPagesOpen ? "open" : ""}`}
                style={{ marginLeft: "auto", color: "#fff" }}
              />
            </button>

            <ul
              className={`footer-links ${isPagesOpen ? "open" : ""} d-md-block list-unstyled`}
            >
              <li className="quick-link-for-desktop">
                <h5 className="footer-heading">Pages</h5>
              </li>
              <li>
                <a href="/" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Portfolio
                </a>
              </li>
              <li>
                <a href="/solutions" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Solutions
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Case Study
                </a>
              </li>
              <li>
                <a href="/blog" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Blogs
                </a>
              </li>
              <li>
                <a href="/careers" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Career
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none">
                  <BsCheckLg className="quick-icon" /> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3">
            <button
              className="accordion-button d-md-none"
              onClick={() => setIsContactUsOpen(!isContactUsOpen)}
              aria-expanded={isContactUsOpen}
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
              <h5 className="footer-heading m-0 flex-grow-1 text-start">
                CONTACT US
              </h5>
              <FaAngleDown
                className={`accordion-icon ${isContactUsOpen ? "open" : ""}`}
                style={{ marginLeft: "auto", color: "#fff" }}
              />
            </button>

            <div
              className={`accordion-content ${isContactUsOpen ? "open" : ""} d-md-block`}
            >
              <h5 className="contact-us-heading-for-desktop footer-heading">
                Contact Us
              </h5>
              <ul className="contact-info list-unstyled">
                <li className="d-flex align-items-start flex-nowrap mb-2">
                  <FaMapMarkerAlt className="me-2 flex-shrink-0 footer-icon mt-1" />
                  <span className="add">
                    Bengal Eco Intelligent Park, EM Block, Sector V, Kolkata-700
                    091
                  </span>
                </li>
                <li className="d-flex align-items-center flex-nowrap mb-2">
                  <FaPhoneAlt className="me-2 flex-shrink-0 footer-icon" />
                  <span className="d-flex flex-wrap gap-1 add">
                    <a
                      href="tel:+1-646-575-9575"
                      rel="noopener noreferrer"
                      className="text-decoration-none "
                    >
                      +1-646-575-9575
                    </a>
                    <span>/</span>
                    <a
                      href="https://wa.me/919830371143"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none "
                    >
                      +91-983-037-1143
                    </a>
                  </span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaEnvelope className="me-2 flex-shrink-0 footer-icon" />
                  <a
                    href="mailto:support@ahaansoftware.com"
                    className="text-decoration-none "
                  >
                    support@ahaansoftware.com
                  </a>
                </li>
              </ul>
              <PayglocalButton />
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom mt-4 pt-3">
            <p
              className="footer-bottom-text mb-2"
              style={{ color: "#a3a3a3ff" }}
            >
              {isMobile
                ? "© 2026 Ahaan Software Consulting"
                : "© 2026 Ahaan Software, All rights reserved."}
            </p>

            <div className="footer-social-icons ">
              <a
                href="https://www.facebook.com/ahaansoftwareconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="icon facebook"
              >
                <span className="tooltip">Facebook</span>
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/ahaansoftware/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon instagram"
              >
                <span className="tooltip">Instagram</span>
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/ahaansoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="icon linkedin"
              >
                <span className="tooltip">LinkedIn</span>
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/AhaanSoftwareConsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="icon github"
              >
                <span className="tooltip">Github</span>
                <FaGithub />
              </a>
               <a
                href="https://dribbble.com/ahaan-software"
                target="_blank"
                rel="noopener noreferrer"
                className="icon dribbble"
              >
                <span className="tooltip">Dribbble</span>
                <FiDribbble />
              </a>
               <a
                href="https://www.behance.net/ahaansoftware01"
                target="_blank"
                rel="noopener noreferrer"
                className="icon behance"
              >
                <span className="tooltip">Behance</span>
                <FaBehance />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
