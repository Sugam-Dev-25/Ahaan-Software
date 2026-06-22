import { useEffect, useState } from "react";
import { getAllUiUxDesignsAPI } from "../../../../Api/api";
import "./AllUiUxDesign.css";
import AllDesignBanner from "./AllDesignBanner";
import SecondBanner from "../../../Layouts/Body/SecondBanner";

const AllUiUxDesign = () => {
  const [designs, setDesigns] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const loadDesigns = async () => {
      try {
        const res = await getAllUiUxDesignsAPI();

        let data = [];
        if (Array.isArray(res)) data = res;
        else if (Array.isArray(res?.data)) data = res.data;
        else if (res?.data && typeof res.data === "object") data = [res.data];

        setDesigns(data);
      } catch (err) {
        console.error(err);
        setDesigns([]);
      }
    };

    loadDesigns();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const visibleDesigns = designs.slice(0, visibleCount);

  return (
    <>
      <AllDesignBanner />

      <div className="container py-5">
        <div className="all-uiux-grid">
          {visibleDesigns.map((item, index) => (
            <a
              key={item._id || index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="all-uiux-card"
            >
              <img src={item.image} alt={item.title} />
              <div className="all-uiux-title">{item.title}</div>
            </a>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < designs.length && (
          <div className="text-center mt-4">
            <a className="portfolio-load-more-btn" onClick={handleLoadMore}>
              Load More
            </a>
          </div>
        )}
      </div>

      <SecondBanner />
    </>
  );
};

export default AllUiUxDesign;