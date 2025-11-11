import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";

const HeroSection = () => {
  const items = [
    {
      title: "Web Development",
      subtitle: "Building responsive and dynamic websites",
      icon: ""
    },
    {
      title: "UI/UX Designing",
      subtitle: "Crafting intuitive and visually stunning user experiences",
      icon: ""
    },
    {
      title: "Application Development",
      subtitle: "Creating seamless mobile and web applications",
      icon: ""
    },
    {
      title: "E-Commerce Development",
      subtitle: "Powering secure and scalable online stores",
      icon: ""
    }
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentItem = items[textIndex];

  // Typing effect
  useEffect(() => {
    const currentText = currentItem.title;
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentText.substring(0, charIndex - 1)
        : currentText.substring(0, charIndex + 1);

      setDisplayText(updatedText);
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % items.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, currentItem.title, items]);

  // Generate random bubbles and stars with more bubbles for better coverage
  useEffect(() => {
    const hero = document.querySelector(".hero-section");

    // Create more bubbles for entire banner coverage, but not excessive (25 total)
    for (let i = 0; i < 25; i++) {
      const bubble = document.createElement("span");
      bubble.classList.add("bubble");
      // Ensure even distribution by using a pseudo-random grid-like approach
      const col = (i % 5) / 5; // Divide into 5 columns
      const row = Math.floor(i / 5) / 5; // Divide into 5 rows
      bubble.style.left = (col * 100 + (Math.random() - 0.5) * 20) + "%"; // Jitter around grid
      bubble.style.top = (row * 100 + (Math.random() - 0.5) * 20) + "%"; // Jitter around grid
      bubble.style.width = bubble.style.height =
        6 + Math.random() * 16 + "px"; // Slightly varied sizes for better fill
      bubble.style.animationDuration = 3 + Math.random() * 5 + "s";
      bubble.style.animationDelay = Math.random() * 5 + "s";
      hero.appendChild(bubble);
    }

    // Create stars
    for (let i = 0; i < 20; i++) {
      const star = document.createElement("span");
      star.classList.add("star");
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      star.style.width = star.style.height = Math.random() * 3 + "px";
      hero.appendChild(star);
    }
  }, []);

  return (
    <section className="hero-section text-center d-flex flex-column align-items-center justify-content-center">
      <div className="gradient-bg"></div>

      <h1 className="hero-heading">
        <span className="title-icon">{currentItem.icon}</span>
        <span className="typing-text">
          {displayText}
        </span>
      </h1>

      <div className="title-info">
        <p className="mini-subtitle">{currentItem.subtitle}</p>
      </div>

      <p className="hero-subtitle">
        Zentry is the all-in-one project management platform that helps your
        team organize tasks, hit deadlines, and collaborate effortlessly —
        without the overwhelm.
      </p>

   <div class="email-box">
  <input
    type="email"
    placeholder="Your email address"
    class="email-input"
  />
  <button class="email-btn">Start Free Trial</button>
</div>


      <div className="rating mt-3">
        <strong>Ratings ⭐ 5.0</strong> – Trusted by 4K+ clients worldwide
      </div>

      {/* Floating Images */}
      <img
        src="https://ahaanmedia.com/asc/All/group1.png"
        alt="img1"
        className="floating-img banner-img1"
      />
      <img
        src="https://ahaanmedia.com/asc/All/group1.png"
        alt="img2"
        className="floating-img banner-img2"
      />
      <img
        src="https://ahaanmedia.com/asc/All/group1.png"
        alt="img3"
        className="floating-img banner-img3"
      />
      <img
        src="https://ahaanmedia.com/asc/All/group1.png"
        alt="img4"
        className="floating-img banner-img4"
      />
      <img
        src="https://ahaanmedia.com/asc/All/group1.png"
        alt="img5"
        className="floating-img banner-img5"
      />
      <img
        src="https://ahaanmedia.com/asc/All/group1.png"
        alt="img6"
        className="floating-img banner-img6"
      />
    </section>
  );
};

export default HeroSection;