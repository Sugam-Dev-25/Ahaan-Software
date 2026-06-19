import React from "react";
import "./ThirdSection.css";

const technologies = [
  {
    name: "Figma",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Figma.webp",
  },
  {
    name: "Framer",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Framer.webp",
  },
  {
    name: "Photoshop",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Photoshop.webp",
  },
  {
    name: "Wix",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Wix.webp",
  },
  {
    name: "React JS",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/React.webp",
  },
  {
    name: "Next JS",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Next.webp",
  },
  {
    name: "Node JS",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Node.webp",
  },
  {
    name: "MongoDB",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Mongodb.webp",
  },
  {
    name: "Python",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Python.webp",
  },
  {
    name: "MySQL",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Mysql.webp",
  },
  {
    name: "WordPress",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Wordpress.webp",
  },
  {
    name: "Shopify",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Shopify.webp",
  },
  {
    name: "Webflow",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Webflow.webp",
  },
  {
    name: "PHP",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Php.webp",
  },
  {
    name: "Odoo",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Odoo.webp",
  },
  {
    name: "Tailwind",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/Tailwind.webp",
  },
  {
    name: "JavaScript",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/JS.webp",
  },
  {
    name: "TypeScript",
    image: "https://ahaanmedia.com/ahaanwebsite/technology/TS.webp",
  },
];

const TabBar = () => {
  return (
    <section className="technology-section">
      <div className="container">
        <div className="mt-5 section-header-tech">
          <h6 className="technology-subtitle">
            Technology Use <span className="divider"></span>
          </h6>

          <h2 className="technology-title">Our Technology Use</h2>

          <p className="image-carousel-content">
            The success of our services depends on a perfectly laid-out process
            from the beginning to the end. And, we put YOU at the centre of
            everything we do, turning our promises into reality! We specialize
            in transforming business operations through the power of human and
            tech collaboration.
          </p>
        </div>

        <div className="technology-grid-wrapper">
          <div className="row g-4">
            {technologies.map((item, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="technology-card">
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabBar;
