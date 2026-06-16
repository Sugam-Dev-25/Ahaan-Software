import React, { memo, useState } from "react";
import "./AppDevelopment.css";

const imageLinks = [
  "https://ahaanmedia.com/ahaanwebsite/AppDevelopment/1.webp",
  "https://ahaanmedia.com/ahaanwebsite/AppDevelopment/2.webp",
  "https://ahaanmedia.com/ahaanwebsite/AppDevelopment/3.webp",
  "https://ahaanmedia.com/ahaanwebsite/AppDevelopment/4.webp",
  "https://ahaanmedia.com/ahaanwebsite/AppDevelopment/5.webp",
];

const AppCard = memo(({ src, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="appdev-card">
      {!loaded && <div className="appdev-skeleton-overlay" aria-hidden="true" />}
      <img
        src={src}
        alt={`App Design ${index + 1}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease" }}
      />
    </div>
  );
});

const AppDevelopment = () => (
  <section className="appdev-section">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="appdev-title">App Development Designs</h2>
        <p className="appdev-subtitle">
          Clean and modern designs for mobile and web applications
        </p>
      </div>
      <div className="appdev-gallery">
        {imageLinks.map((img, index) => (
          <AppCard key={img} src={img} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default AppDevelopment;
