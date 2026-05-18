import React from "react";
import "./ContactBanner.css";

const ContactBanner = () => {

  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/ahaanwebsite/Banner/Contact.webp)`,
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
            Contact Us
          </h1>

<p className="contact-banner-subtitle">
  Let’s connect and discuss how we can help transform your business 
  with innovative digital solutions, strategic insights, and tailored 
  technology that drives measurable growth and long-term success.
</p>

        </div>
      </div>

    </section>
  );
};

export default ContactBanner;
