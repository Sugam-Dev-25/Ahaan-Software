import "./CareerBanner.css";

const CareerBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/ahaanwebsite/Banner/Career.webp)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="blog-banner-section" style={bannerStyle}>
      {/* Overlay */}
      <div className="blog-banner-overlay"></div>

      {/* Content */}
      <div className="container blog-banner-content">
        <div className="blog-banner-text">
          <h1 className="blog-banner-heading">Career Opportunities</h1>

          <p className="blog-banner-subtitle">
            Build your future with Ahaan Software by joining a passionate team
            focused on innovation, creativity, and growth. Explore exciting
            career opportunities where your skills, ideas, and dedication can
            make a real impact in delivering cutting-edge digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;
