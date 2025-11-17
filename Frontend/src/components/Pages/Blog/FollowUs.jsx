import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./FollowUs.css";

const FollowUs = () => {
  return (
    <div className="follow-us-box mt-5">
      <h3 className="sidebar-heading mb-4">Follow Us</h3>
      <div className="d-flex gap-2 justify-content-start">
        <a href="https://www.facebook.com/ahaansoftwareconsulting" target="_blank" rel="noreferrer" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/ahaansoftware/" target="_blank" rel="noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/ahaansoftware" target="_blank" rel="noreferrer" className="social-icon">
          <FaLinkedinIn />
        </a>
                <a href="#" target="_blank" rel="noreferrer" className="social-icon">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default FollowUs;
