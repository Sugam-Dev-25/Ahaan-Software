import React from 'react'
import "./PrivacyPolicyBanner.css";

const CookiePolicyBanner = () => {
  const bannerStyle = {
    backgroundImage: `url("https://ahaanmedia.com/ahaanwebsite/Banner/Policy.webp")`,
  };

  return (
    <section className="service-banner-section" style={bannerStyle}>
      <div className="service-banner-overlay"></div>

      <div className="container service-banner-content">
        <div className="service-banner-text">
          <h1 className="service-banner-title">Cookie Policy</h1>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicyBanner;