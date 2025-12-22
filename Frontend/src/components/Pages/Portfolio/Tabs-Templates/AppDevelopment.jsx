import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppDevelopment.css";

const AppDevelopment = () => {
  const imageLinks = [
    "https://ahaanmedia.com/asc/AppDevelopment/1.jpg",
    "https://ahaanmedia.com/asc/AppDevelopment/2.jpg",
    "https://ahaanmedia.com/asc/AppDevelopment/3.jpg",
    "https://ahaanmedia.com/asc/AppDevelopment/4.jpg",
    "https://ahaanmedia.com/asc/AppDevelopment/5.jpg",
  ];

  return (
    <section className="appdev-section">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="appdev-title">App Development Designs</h2>
          <p className="appdev-subtitle">
            Clean and modern designs for mobile and web applications
          </p>
        </div>

        {/* Gallery */}
        <div className="appdev-gallery">
          {imageLinks.map((img, index) => (
            <div className="appdev-card" key={index}>
              <img src={img} alt={`App Design ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDevelopment;
