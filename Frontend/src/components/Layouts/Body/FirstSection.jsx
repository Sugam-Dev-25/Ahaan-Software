import React from "react";
// Removed Container, Row, Col, Image imports
import "./FirstSection.css";

const clients = [
  { src: "https://ahaanmedia.com/ahaanwebsite/client/1.webp", alt: "EKYAA" },
  { src: "https://ahaanmedia.com/ahaanwebsite/client/2.webp", alt: "LOGIX" },
  { src: "https://ahaanmedia.com/ahaanwebsite/client/3.webp", alt: "Fs" },
  { src: "https://ahaanmedia.com/ahaanwebsite/client/4.webp", alt: "Helli" },
  { src: "https://ahaanmedia.com/ahaanwebsite/client/5.webp", alt: "Jazzyln Nolen" },
  { src: "https://ahaanmedia.com/ahaanwebsite/client/6.webp", alt: "NextDoor Urgent Care" },
  { src: "https://ahaanmedia.com/ahaanwebsite/client/7.webp", alt: "finanza_ally" },
  { src: "https://ahaanmedia.com/ahaanwebsite/client/8.webp", alt: "Johat enterprises" },
  { src: "https://ahaanmedia.com/ahaanwebsite/client/9.webp", alt: "johat trust" },
  { src: "https://ahaanmedia.com/ahaanwebsite/client/10.webp", alt: "psitpops" },

];

const FirstSection = () => {
  return (
    <div className="container selected-clients section-header-tech">
      <h6 className="subtitle">
        Trusted Client <span className="divider"></span>
      </h6>
      <label className="title">Our Clients</label>
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
                  loading="lazy"
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