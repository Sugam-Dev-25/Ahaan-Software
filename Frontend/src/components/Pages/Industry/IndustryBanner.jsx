import React from "react";
import "./IndustryBanner.css";

const IndustryBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/ahaanwebsite/Banner/Solution.webp)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      {/* CLEAN BANNER */}
      <section className="industry-banner-section" style={bannerStyle}>
        {/* Dark Overlay */}
        <div className="banner-overlay"></div>

        {/* Banner Content */}
        <div className="container industry-banner-content">
          <div className="industry-banner-text">
            <h1 className="industry-banner-heading">Our Solutions</h1>

            <p className="industry-banner-subtitle">
              Delivering scalable enterprise software solutions tailored to your
              industry needs, driving efficiency and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* BELOW BANNER SECTION (UNCHANGED) */}
      <div className="container industry-section section-header-tech">
        <h6 className="industry-subtitle">
          Solutions Service <span className="divider"></span>
        </h6>
        <h3 className="fw-bold industry-heading">
          Enterprise Software Development Services
        </h3>
        <p className="industry-subheading">
          True success comes from software solutions that deliver real impact!
          Whether it's enterprise software development or seamless integration,
          we build solutions tailored to your business goals—ensuring measurable
          results across industries.
        </p>
      </div>
    </>
  );
};

export default IndustryBanner;
