import React from "react";
import "./AllDesignBanner.css";

const AllDesignBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/ahaanwebsite/Banner/Design.webp)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="contact-banner-section" style={bannerStyle}>
      
      {/* Overlay */}
      <div className="contact-banner-overlay"></div>

      {/* Content */}
      <div className="container contact-banner-content">
        <div className="contact-banner-text">
          <h1 className="contact-banner-heading">
            Web-Design Projects
          </h1>

          <p className="contact-banner-subtitle">
            Explore our creative web design projects crafted with innovation,
            strategy, and modern technology to deliver impactful digital
            experiences that elevate brands and drive real business growth.
          </p>
        </div>
      </div>

    </section>
  );
};

export default AllDesignBanner;
