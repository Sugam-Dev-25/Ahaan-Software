import "./BlogBanner.css";

const BlogSearchBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://ahaanmedia.com/ahaanwebsite/Banner/Search-Blog.webp)`,
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
          <h1 className="blog-banner-heading">
            Search Blogs
          </h1>

          <p className="blog-banner-subtitle">
  Insights, trends, and expert perspectives designed to help you stay ahead 
  in the fast-evolving digital landscape, empowering your business with 
  knowledge-driven strategies and informed decision-making.
</p>

        </div>
      </div>
    </section>
  );
};

export default BlogSearchBanner;
