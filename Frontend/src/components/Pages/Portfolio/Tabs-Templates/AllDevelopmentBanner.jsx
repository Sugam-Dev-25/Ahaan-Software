import React from "react";
import "./AllDevelopmentBanner.css";

const AllDevelopmentBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/ahaanwebsite/Banner/Development.webp)`,
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
            Web Development Projects
          </h1>
          <p className="contact-banner-subtitle">
            Discover our powerful web development solutions built with
            performance, scalability, and modern technologies to help
            businesses grow digitally with confidence.
          </p>
        </div>
      </div>

    </section>
  );
};

export default AllDevelopmentBanner;
