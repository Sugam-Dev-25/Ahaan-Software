import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./NewTestimonials.css";

const NewTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [transition, setTransition] = useState(true);
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

  useEffect(() => {
  if (!testimonials.length) return;

  const interval = setInterval(() => {
    setIndex((prev) => prev + 1);
  }, 3000);

  return () => clearInterval(interval);
}, [testimonials]);

useEffect(() => {
  if (
    testimonials.length &&
    index >= testimonials.length
  ) {
    const timer = setTimeout(() => {
      setTransition(false);
      setIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true);
        });
      });
    }, 700);

    return () => clearTimeout(timer);
  }
}, [index, testimonials.length]);
  const scroll = (dir) => {
  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  if (dir === "left") {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  } else {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }
};

const sliderData =
  testimonials.length > 0
    ? [...testimonials, ...testimonials]
    : [];


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
            className="testimonial-arrow-btn left"
            onClick={() => scroll("left")}
          >
            <FaChevronLeft />
          </button>

         <div
  className="testimonial-track"
  style={{
    transition: transition
      ? "transform .7s ease"
      : "none",
    transform: `translateX(-${
      index * (100 / visibleCards)
    }%)`,
  }}
>
           {sliderData.map((t, i) => (
            <div
  className="testimonial-card"
  key={i}
  style={{
  flex:
    visibleCards === 1
      ? "0 0 100%"
      : `0 0 calc(${100 / visibleCards}% - 20px)`
}}
>
  <div
    className="quote-top"
    style={{ color: t.color }}
  >
    ❝
  </div>

  <div
    className="client-pill"
    style={{ background: t.color }}
  >
    <div className="client-image">
      <img src={t.image} alt={t.name} />
    </div>

    <div className="client-details">
      <h4>{t.name}</h4>
    </div>
  </div>

  <div className="testimonial-content">
    <p>{t.review}</p>

    <div className="card-line"></div>

    <div className="testimonial-stars">
      {Array(5)
        .fill(0)
        .map((_, j) => (
          <span
            key={j}
            style={{
              color: j < t.rating ? t.color : "#ddd",
            }}
          >
            ★
          </span>
        ))}
    </div>
  </div>

  <div
    className="quote-bottom"
    style={{ color: t.color }}
  >
    ❞
  </div>
</div>
            ))}
          </div>

          <button
            className="testimonial-arrow-btn right"
            onClick={() => scroll("right")}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTestimonials;