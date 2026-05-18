import "./ServiceBanner.css";

const ServiceBanner = () => {
  const bannerStyle = {
    backgroundImage: `url("https://ahaanmedia.com/ahaanwebsite/Banner/Service.webp")`,
  };

  return (
    <section className="service-banner-section" style={bannerStyle}>
      {/* Overlay */}
      <div className="service-banner-overlay"></div>

      <div className="container service-banner-content">
        <div className="service-banner-text">
          <h1 className="service-banner-title">Our Services</h1>

          <p className="service-banner-subtitle">
            We deliver innovative digital solutions including web development,
            UI/UX design, branding, and performance marketing to help your
            business grow faster and smarter in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
