import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { getAllDevelopmentsAPI } from "../../../../Api/api";

import "swiper/css";
import "./WebDevelopment.css";

const WebDevelopment = () => {
  const [items, setItems] = useState([]);

  // 🔥 Load development projects from backend
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await getAllDevelopmentsAPI();
        setItems(res.data.data); // Array from MongoDB
      } catch (error) {
        console.error("❌ Failed to fetch development data:", error);
      }
    };
    loadData();
  }, []);

  // 🔥 Column division logic
  const colCount = 4;
  const columns = Array.from({ length: colCount }, () => []);

  items.forEach((item, i) => {
    columns[i % colCount].push(item);
  });

  // 🔥 Offset animations (same as your previous version)
  useEffect(() => {
    const offsetCols = document.querySelectorAll(
      ".offset-swiper .swiper-wrapper"
    );
    offsetCols.forEach((col) => {
      col.style.transform = "translateY(-25%)";
    });
  }, [items]);

  return (
    <div className="webdev-gallery container py-3">
      <div className="text-center mb-5">
        <h2 className="fw-bold portfolio-title">Web Development Projects</h2>
        <p className="text-muted">Explore our recent website projects</p>
      </div>

      <div className="webdev-columns">
        {columns.map((colImages, colIndex) => (
          <Swiper
            key={colIndex}
            direction="vertical"
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: colIndex % 2 === 1,
              pauseOnMouseEnter: true,
            }}
            speed={2500}
            modules={[Autoplay]}
            className={`webdev-gallery-swiper ${
              colIndex === 1 || colIndex === 3 ? "offset-swiper" : ""
            }`}
          >
            {colImages.map((item, index) => (
              <SwiperSlide key={index} className="webdev-slide">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="webdev-gallery-image"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link to="/all-development" className="portfolio-view-all-btn" target="_blank">
          View All
        </Link>
      </div>
    </div>
  );
};

export default WebDevelopment;
