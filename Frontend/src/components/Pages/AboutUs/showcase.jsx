import React from "react";
import "./showcase.css";

const Showcase = () => {
  return (
    <section className="showcase-section">
      <div className="container">
        <h2 className="showcase-title">
          Deliverables for the SMM service
        </h2>

        <div className="showcase-wrapper">

          {/* SVG Connections */}
          <svg
            className="connection-lines"
            viewBox="0 0 1400 700"
            preserveAspectRatio="none"
          >
            {/* Left Side */}
            <path d="M700 350 C620 250 500 140 320 120" />
            <path d="M700 350 C620 300 500 270 320 270" />
            <path d="M700 350 C620 400 500 430 320 430" />
            <path d="M700 350 C620 500 500 570 320 580" />

            {/* Right Side */}
            <path d="M700 350 C780 250 900 140 1080 120" />
            <path d="M700 350 C780 300 900 270 1080 270" />
            <path d="M700 350 C780 400 900 430 1080 430" />
            <path d="M700 350 C780 500 900 570 1080 580" />
          </svg>

          {/* Left Side */}
          <div className="showcase-side left-side">
            <div className="showcase-box">
              10 contents creation per company per month
            </div>

            <div className="showcase-box">
              Content planning
            </div>

            <div className="showcase-box">
              Posting
            </div>

            <div className="showcase-box">
              Performance reporting
            </div>
          </div>

          {/* Center Logo */}
          <div className="showcase-center">
            <div className="logo-circle">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="center-logo"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="showcase-side right-side">
            <div className="showcase-box">
              Social media management for HEW Motor, HEW Auto & HEW WORKS
            </div>

            <div className="showcase-box">
              Comments engagement up to 15 to 30 comments per post
            </div>

            <div className="showcase-box">
              Solutions
            </div>

            <div className="showcase-box">
              Weekly content update
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Showcase;