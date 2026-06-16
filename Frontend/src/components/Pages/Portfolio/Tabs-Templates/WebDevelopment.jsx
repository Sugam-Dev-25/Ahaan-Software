import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { getAllDevelopmentsAPI } from "../../../../Api/api";
import "./WebDevelopment.css";

// ✅ No Swiper — replaced with CSS-only infinite scroll animation.
// Swiper adds ~80KB JS, runs a requestAnimationFrame loop continuously,
// and its DOM manipulation via useEffect caused layout thrashing on iOS Safari.

const COLUMN_COUNT = 4;

// ✅ Memoized image to prevent full re-renders on parent state change
const GalleryImage = React.memo(({ src, alt, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="webdev-slide"
  >
    <img
      src={src}
      alt={alt}
      className="webdev-gallery-image"
      loading="lazy"       // ✅ Browser-native lazy load
      decoding="async"     // ✅ Non-blocking image decode
    />
  </a>
));

// ✅ Each column is a CSS animation scroll strip — no JS timers
const ScrollColumn = React.memo(({ images, reverse }) => {
  // Duplicate items so the loop appears seamless
  const doubled = [...images, ...images];

  return (
    <div className="webdev-column-track-wrapper">
      <div
        className={`webdev-column-track ${reverse ? "webdev-track-reverse" : ""}`}
        // Pause on hover via CSS class toggling — no JS needed
      >
        {doubled.map((item, i) => (
          <GalleryImage
            key={`${item._id || i}-${i}`}
            src={item.image}
            alt={item.title}
            href={item.link}
          />
        ))}
      </div>
    </div>
  );
});

const WebDevelopment = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false; // ✅ Prevent state update on unmounted component

    const loadData = async () => {
      try {
        const res = await getAllDevelopmentsAPI();
        if (!cancelled) {
          setItems(res.data.data);
        }
      } catch (err) {
        console.error("❌ Failed to fetch development data:", err);
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadData();
    return () => { cancelled = true; };
  }, []);

  // ✅ Memoized column split — only recomputes when items change
  const columns = React.useMemo(() => {
    const cols = Array.from({ length: COLUMN_COUNT }, () => []);
    items.forEach((item, i) => cols[i % COLUMN_COUNT].push(item));
    return cols;
  }, [items]);

  if (loading) {
    return (
      <div className="webdev-gallery container py-3">
        <div className="text-center mb-5">
          <h2 className="fw-bold portfolio-title">Web Development Projects</h2>
          <p className="text-muted">Explore our recent website projects</p>
        </div>
        {/* ✅ Skeleton loader instead of blank screen */}
        <div className="webdev-columns">
          {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
            <div key={i} className="webdev-skeleton-col">
              {Array.from({ length: 3 }).map((_, j) => (
                <div key={j} className="webdev-skeleton-card" />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || items.length === 0) {
    return (
      <div className="webdev-gallery container py-3 text-center">
        <h2 className="fw-bold portfolio-title">Web Development Projects</h2>
        <p className="text-muted">Could not load projects. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="webdev-gallery container py-3">
      <div className="text-center mb-5">
        <h2 className="fw-bold portfolio-title">Web Development Projects</h2>
        <p className="text-muted">Explore our recent website projects</p>
      </div>

      {/* ✅ CSS scroll animation — GPU-composited, no JS timers */}
      <div className="webdev-columns">
        {columns.map((colImages, colIndex) => (
          colImages.length > 0 && (
            <ScrollColumn
              key={colIndex}
              images={colImages}
              reverse={colIndex % 2 === 1}
            />
          )
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/all-development" className="portfolio-view-all-btn">
          View All
        </Link>
      </div>
    </div>
  );
};

export default WebDevelopment;
