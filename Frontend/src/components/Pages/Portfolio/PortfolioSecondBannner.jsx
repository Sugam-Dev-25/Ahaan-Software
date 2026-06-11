import "../Service/serviceBanner/ServiceBanner.css";

const PortfolioSecondBannner = () => {
  const bannerStyle = {
    backgroundImage: `url("https://ahaanmedia.com/ahaanwebsite/Banner/Portfolios.jpg")`,
  };

  return (
    <section className="service-banner-section" style={bannerStyle}>
      {/* Overlay */}
      <div className="service-banner-overlay"></div>

      <div className="container service-banner-content">
        <div className="service-banner-text">
          <h1 className="service-banner-title">Our Portfolio</h1>

          <p className="service-banner-subtitle">
We create innovative digital solutions through web development, UI/UX design, branding, eCommerce, and custom software development. Our portfolio reflects creativity, technical expertise, and a commitment to delivering exceptional user experiences.          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSecondBannner; ;
