import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UiUxDesign.css";
import { getAllUiUxDesignsAPI } from "../../../../Api/api";
import { Link } from "react-router-dom";

const UiUxDesign = () => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const loadDesigns = async () => {
      try {
        const res = await getAllUiUxDesignsAPI();

        let data = [];
        if (Array.isArray(res)) data = res;
        else if (Array.isArray(res?.data)) data = res.data;
        else if (res?.data && typeof res.data === "object") data = [res.data];

        setDesigns(data);
      } catch (error) {
        console.error("UIUX load error:", error);
        setDesigns([]);
      }
    };

    loadDesigns();
  }, []);

  return (
    <div className="uiux-design-gallery-container container py-1">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold portfolio-title">UI/UX Design Portfolio</h2>
        <p className="text-muted">
          Browse through our creative UI/UX layout designs
        </p>
      </div>

      {/* Image Grid (ONLY 12) */}
      <div className="row g-4">
        {designs.slice(0, 12).map((item, index) => (
          <div key={item._id || index} className="col-6 col-md-4 text-center">
            <div className="uiux-image-wrapper">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="uiux-image"
                />
                <div className="uiux-overlay">
                  <div className="uiux-title">{item.title}</div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {designs.length > 2 && (
        <div className="text-center mt-5">
          <Link to="/all-design" className="portfolio-view-all-btn" target="_blank">
            View All
          </Link>
        </div>
      )}
    </div>
  );
};

export default UiUxDesign;
