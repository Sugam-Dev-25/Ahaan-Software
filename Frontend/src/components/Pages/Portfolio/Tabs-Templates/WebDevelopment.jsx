import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./WebDevelopment.css";

const WebDevelopment = () => {
  const imageLinks = [
    { url: "https://ahaanmedia.com/asc/Landing/Blueprint.png", link: "https://www.blueprintecosys.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/BNP.png", link: "https://www.bnpcoefficient.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Innovare.png", link: "https://innovare-group.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/C2V.png", link: "https://c2v.ahaanmedia.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Ekyaa.png", link: "https://ekyaa.in/" },
    { url: "https://ahaanmedia.com/asc/Landing/HELI.png", link: "https://heliclothing.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Hillpeak.png", link: "https://hillpeaktours.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Veniyok.png", link: "https://hotel-vinayak.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/TrishaLoanOfficer.png", link: "https://trishloanofficer.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Drizzel.png", link: "https://drizzle.ahaanmedia.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Pawshion.png", link: "https://demo3website.myshopify.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Manufacture.png", link: "http://sugamdemo.great-site.net/" },
    { url: "https://ahaanmedia.com/asc/portfolio/BossAutomative.jpg", link: "https://boss.ahaanmedia.com/" },
    { url: "https://ahaanmedia.com/asc/portfolio/Horizon.jpg", link: "https://ecommerce.ahaanmedia.com/" },
    { url: "https://ahaanmedia.com/asc/portfolio/VictoryVault.jpg", link: "https://woocommerce.ahaanmedia.com/" },
    { url: "https://ahaanmedia.com/asc/Landing/Grocery.png", link: "http://website-asc.42web.io/" },
  ];

  const colCount = 4;
  const columns = Array.from({ length: colCount }, () => []);
  imageLinks.forEach((img, i) => columns[i % colCount].push(img));

  useEffect(() => {
    // shift 2nd and 4th Swipers down by half an image height
    const offsetCols = document.querySelectorAll(".offset-swiper .swiper-wrapper");
    offsetCols.forEach((col) => {
      col.style.transform = "translateY(-25%)"; // half of one slide (since 2 per view)
    });
  }, []);

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
            slidesPerView={2}                 // fixed 2 slides visible
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: colIndex % 2 === 1,
              pauseOnMouseEnter: true,
            }}
            speed={2500}
            modules={[Autoplay]}
            className={`webdev-gallery-swiper ${colIndex === 1 || colIndex === 3 ? "offset-swiper" : ""}`}
          >
            {colImages.map((item, index) => (
              <SwiperSlide key={index} className="webdev-slide">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.url} alt={`Web Design ${index + 1}`} className="webdev-gallery-image" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}


      </div>
    </div>
  );
};

export default WebDevelopment;
