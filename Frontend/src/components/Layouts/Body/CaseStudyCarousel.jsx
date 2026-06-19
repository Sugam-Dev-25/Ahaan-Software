import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CaseStudyCarousel.css";

const CaseStudyCarousel = () => {

  const slides = [
    { img: "https://ahaanmedia.com/ahaanwebsite/casestudy/1.webp", link: "/case-studies" },
    { img: "https://ahaanmedia.com/ahaanwebsite/casestudy/2.webp", link: "/case-studies" },
    { img: "https://ahaanmedia.com/ahaanwebsite/casestudy/3.webp", link: "/case-studies" },
    { img: "https://ahaanmedia.com/ahaanwebsite/casestudy/4.webp", link: "/case-studies" },
    { img: "https://ahaanmedia.com/ahaanwebsite/casestudy/5.webp", link: "/case-studies" },
    { img: "https://ahaanmedia.com/ahaanwebsite/casestudy/6.webp", link: "/case-studies" },
    { img: "https://ahaanmedia.com/ahaanwebsite/casestudy/7.webp", link: "/case-studies" },
    { img: "https://ahaanmedia.com/ahaanwebsite/casestudy/8.webp", link: "/case-studies" },
    { img: "https://ahaanmedia.com/ahaanwebsite/casestudy/9.webp", link: "/case-studies" },
    { img: "https://ahaanmedia.com/ahaanwebsite/casestudy/10.webp", link: "/case-studies" },
 
  ];

  return (
    <section className="case-section py-5 mb-5">
      <div className="container">

        {/* 🔹 Section Heading */}
        <div className="row text-center mb-4">
          <div className="col">

            <div className="section-header-tech">
            </div>

            <p className="technology-title" style={{ textAlign: "left", color: "#fff" }}>
              Case Study
            </p>

            <p className="image-carousel-content">
              We understand, collaborate, and empower! From complex Software
              Development Service to Seamless Integration, experience how our
              next-gen IT consulting and software solutions can transform and
              accelerate your business.
            </p>

          </div>
        </div>

        {/* 🔹 Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          speed={4500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 1.3, spaceBetween: 15 },
            768: { slidesPerView: 2.3, spaceBetween: 25 },
            992: { slidesPerView: 3.3, spaceBetween: 30 },
            1200: { slidesPerView: 5, spaceBetween: 40 },
          }}
          className="case-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div
                  className="case-card"
                  style={{
                    marginTop: index % 2 === 0 ? "40px" : "0px",
                  }}
                >
                  <img
                    src={slide.img}
                    alt={`Case ${index + 1}`}
                    className="img-fluid"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔹 Right-Aligned Button */}
        <div className="view-all-btn d-flex justify-content-end mt-4 mb-4">
          <a href="/case-studies" className="text-decoration-none">
            View All →
          </a>
        </div>

      </div>
    </section>
  );
};

export default CaseStudyCarousel;
