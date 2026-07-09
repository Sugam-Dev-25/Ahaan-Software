import { useEffect, useState } from "react";
import { getAllUiUxDesignsAPI } from "../../../../Api/api";
import "./AllUiUxDesign.css";
import AllDesignBanner from "./AllDesignBanner";
import SecondBanner from "../../../Layouts/Body/SecondBanner";

import {
  FaThLarge,
  FaBriefcase,
  FaGraduationCap,
  FaShieldAlt,
  FaPlane,
  FaFilm,
  FaUtensils,
  FaCar,
  FaTshirt,
  FaLaptop,
  FaCode,
  FaHeartbeat,
  FaHome,
  FaUsers,
  FaFutbol,
  FaEllipsisH,
} from "react-icons/fa";

const AllUiUxDesign = () => {
  const [designs, setDesigns] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoryConfig = {
    all: {
      label: "All",
      icon: <FaThLarge />,
    },
    "business-services": {
      label: "Business Services",
      icon: <FaBriefcase />,
    },
    "education-books": {
      label: "Education",
      icon: <FaGraduationCap />,
    },
    "defense-security": {
      label: "Defense/Security",
      icon: <FaShieldAlt />,
    },
    travel: {
      label: "Travel",
      icon: <FaPlane />,
    },
    entertainment: {
      label: "Entertainment",
      icon: <FaFilm />,
    },
    "food-restaurant": {
      label: "Food Restaurant",
      icon: <FaUtensils />,
    },
    "cars-motorcycles": {
      label: "Cars/Motorcycles",
      icon: <FaCar />,
    },
    "fashion-beauty": {
      label: "Fashion Beauty",
      icon: <FaTshirt />,
    },
    electronics: {
      label: "Electronics",
      icon: <FaLaptop />,
    },
    "it-tech": {
      label: "IT/Tech",
      icon: <FaCode />,
    },
    "medical-healthcare": {
      label: "Medical/Healthcare",
      icon: <FaHeartbeat />,
    },
    "real-estate": {
      label: "Real Estate",
      icon: <FaHome />,
    },
    "society-people": {
      label: "Society People",
      icon: <FaUsers />,
    },
    "sports-outdoors-travel": {
      label: "Sports",
      icon: <FaFutbol />,
    },
    others: {
      label: "Others",
      icon: <FaEllipsisH />,
    },
  };

  useEffect(() => {
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

        setDesigns(data);
      } catch (err) {
        console.error(err);
        setDesigns([]);
      }
    };

    loadDesigns();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const filteredDesigns =
    selectedCategory === "all"
      ? designs
      : designs.filter((item) => item.category === selectedCategory);

  const visibleDesigns = filteredDesigns.slice(0, visibleCount);

  return (
    <>
      <AllDesignBanner />

      <div className="container py-5">
        <div className="uiux-layout">
          {/* LEFT SIDEBAR */}
          <div className="ui-category-sidebar">
            {Object.entries(categoryConfig).map(([slug, item]) => (
              <button
                key={slug}
                onClick={() => {
                  setSelectedCategory(slug);
                  setVisibleCount(12);
                }}
                className={`ui-filter-btn ${
                  selectedCategory === slug ? "active" : ""
                }`}
              >
                <span className="filter-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="uiux-content">
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

            {visibleCount < filteredDesigns.length && (
              <div className="text-center mt-4">
                <button
                  className="portfolio-load-more-btn"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <SecondBanner />
    </>
  );
};

export default AllUiUxDesign;
