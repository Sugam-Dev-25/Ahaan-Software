import React from "react";
// Removed Container, Row, Col, Image imports
import "./FirstSection.css";

const clients = [
  { src: "https://ahaanmedia.com/ahaanwebsite/clients/1.webp", alt: "EKYAA" },
  { src: "https://ahaanmedia.com/ahaanwebsite/clients/2.webp", alt: "LOGIX" },
  { src: "https://ahaanmedia.com/ahaanwebsite/clients/3.webp", alt: "Fs" },
  { src: "https://ahaanmedia.com/ahaanwebsite/clients/4.webp", alt: "Helli" },
  { src: "https://ahaanmedia.com/ahaanwebsite/clients/5.webp", alt: "Jazzyln Nolen" },
  { src: "https://ahaanmedia.com/ahaanwebsite/clients/6.webp", alt: "NextDoor Urgent Care" },
  { src: "https://ahaanmedia.com/ahaanwebsite/clients/8.webp", alt: "finanza_ally" },
  { src: "https://ahaanmedia.com/ahaanwebsite/clients/7.webp", alt: "Johat enterprises" },
  { src: "https://ahaanmedia.com/ahaanwebsite/clients/10.jpg", alt: "johat trust" },
  { src: "https://ahaanmedia.com/ahaanwebsite/clients/9.webp", alt: "psitpops" },
  { src: "https://ahaanmedia.com/ahaanwebsite/clients/12.webp", alt: "abc" },
  { src: "https://ahaanmedia.com/ahaanwebsite/clients/11.webp", alt: "def" },

];

const FirstSection = () => {
  return (
    <div className="container selected-clients section-header-tech">
      <h6 className="technology-subtitle">
        Trusted Client <span className="divider"></span>
      </h6>
      <label className="technology-title">Our Clients</label>
      <p className="image-carousel-content">
        We understand, collaborate, and empower! From complex Software
        Development Service to Seamless Integration, experience how our next-gen
        IT consulting and software solutions can transform and accelerate your
        business.
      </p>

      {/* Grid Layout using Standard Bootstrap Row/Col classes */}
      <div className="clients-carousel mt-4">
        <div className="clients-track">
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="client-item">
              <div className="first-client-col">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="img-fluid first-client-image"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;