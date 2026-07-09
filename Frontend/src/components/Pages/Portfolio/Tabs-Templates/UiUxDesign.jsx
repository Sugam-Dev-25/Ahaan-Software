import { useEffect, useState, memo } from "react";
import "./UiUxDesign.css";
import { getAllUiUxDesignsAPI } from "../../../../Api/api";
import { Link } from "react-router-dom";

const DesignCard = memo(({ item }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="col-6 col-md-4 text-center">
      <div className="uiux-image-wrapper">
        {!loaded && <div className="uiux-card-skeleton" aria-hidden="true" />}

        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <img
            src={item.image}
            alt={item.title}
            className="uiux-image"
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.35s ease",
            }}
          />

          <div className="uiux-overlay">
            <div className="uiux-title">{item.title}</div>
          </div>
        </a>
      </div>
    </div>
  );
});

const UiUxDesign = () => {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadDesigns = async () => {
      try {
        const res = await getAllUiUxDesignsAPI();

        let data = [];

        if (Array.isArray(res)) {
          data = res;
        } else if (Array.isArray(res?.data)) {
          data = res.data;
        } else if (res?.data && typeof res.data === "object") {
          data = [res.data];
        }

        // Oldest → Newest
        data = [...data].reverse();

        if (!cancelled) {
          setDesigns(data);
        }
      } catch (error) {
        console.error("UIUX load error:", error);

        if (!cancelled) {
          setDesigns([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadDesigns();

    return () => {
      cancelled = true;
    };
  }, []);

  const visibleDesigns = designs.slice(0, 6);

  return (
    <div className="uiux-design-gallery-container container py-1">
      <div className="text-center mb-5">
        <h2 className="fw-bold portfolio-title">
          UI/UX Design Portfolio
        </h2>
        <p className="text-muted">
          Browse through our creative UI/UX layout designs
        </p>
      </div>

      {loading ? (
        <div className="row g-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="col-6 col-md-4">
              <div className="uiux-skeleton" />
            </div>
          ))}
        </div>
      ) : (
        <div className="row g-4">
          {visibleDesigns.map((item, index) => (
            <DesignCard key={item._id || index} item={item} />
          ))}
        </div>
      )}

      {!loading && designs.length > 6 && (
        <div className="text-center mt-5">
          <Link to="/all-design" className="portfolio-view-all-btn">
            View All
          </Link>
        </div>
      )}
    </div>
  );
};

export default UiUxDesign;