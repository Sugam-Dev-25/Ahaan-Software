import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://ahaan-admin.ahaanmedia.com/wp-json/wp/v2/testimonial"
        );

        const data = await response.json();

        const formattedData = await Promise.all(
          data.map(async (item) => {
            let imageUrl = "";

            if (item.acf?.client_image) {
              const mediaRes = await fetch(
                `https://ahaan-admin.ahaanmedia.com/wp-json/wp/v2/media/${item.acf.client_image}`
              );

              const mediaData = await mediaRes.json();
              imageUrl = mediaData.source_url;
            }

            return {
              name: item.acf?.client_name || "",
              review: item.acf?.client_review || "",
              rating: Number(item.acf?.rating) || 5,
              color: item.acf?.color || "#2196F3",
              image: imageUrl,
            };
          })
        );
        setTestimonials(formattedData);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Set visible cards based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCards(3);
      else if (width >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Scroll left/right
  // const scroll = (dir) => {
  //   const maxIndex = testimonials.length - visibleCards;
  //   let newIndex = dir === "left" ? index - 1 : index + 1;
  //   if (newIndex < 0) newIndex = 0;
  //   if (newIndex > maxIndex) newIndex = maxIndex;
  //   setIndex(newIndex);
  // };

  const scroll = (dir) => {
    const maxIndex = Math.max(0, testimonials.length - visibleCards);

    let newIndex = dir === "left" ? index - 1 : index + 1;

    if (newIndex < 0) newIndex = 0;
    if (newIndex > maxIndex) newIndex = maxIndex;

    setIndex(newIndex);
  };

  return (
    <div className="container section-header-tech">
      <h6 className="subtitle">
        Testimonials <span className="divider"></span>
      </h6>
      <h2 className="text-center mb-4 title">What Our Clients Say</h2>
      <p className="image-carousel-content"  >
        Driven to be future-ready, and push beyond the building blocks of
        technology, digital, and marketing, Ahaan Software Consulting proudly
        participated in The Asia Business Show 2024 in Singapore—the powerhouse
        of innovation and enterprise!
      </p>
      <div className="testimonial-slider">
        <div className="testimonial-wrapper">
          <button
            className={`testimonial-arrow-btn left ${index === 0 ? "disabled" : ""}`}
            onClick={() => scroll("left")}
          >
            <FaChevronLeft />
          </button>

          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                className="testimonial-card"
                key={i}
                style={{
                  flex:
                    visibleCards === 1
                      ? "0 0 auto"
                      : `0 0 calc(${100 / visibleCards}% - 20px)`,
                  height: "auto",
                }}
              >
                <div className="quote-icon" style={{ color: t.color }}>
                  “
                </div>
                <div className="testimonial-content">
                  <h3 style={{ color: t.color }}>{t.name}</h3>
                  <p className="review">{t.review}</p>
                  <div className="testimonial-stars">
                    {Array(5)
                      .fill(0)
                      .map((_, j) => (
                        <span
                          key={j}
                          style={{ color: j < t.rating ? t.color : "#ccc" }}
                        >
                          ★
                        </span>
                      ))}
                  </div>
                </div>
                <div
                  className="user-icon"
                  style={{ border: `6px solid ${t.color}` }}
                >
                  <img src={t.image} alt={t.name} />
                </div>
              </div>
            ))}
          </div>

          <button
            className={`testimonial-arrow-btn right ${index >= testimonials.length - visibleCards ? "disabled" : ""
              }`}
            onClick={() => scroll("right")}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

