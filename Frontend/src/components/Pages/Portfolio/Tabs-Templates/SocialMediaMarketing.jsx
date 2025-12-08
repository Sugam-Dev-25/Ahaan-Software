import React from "react";
import "./SocialMediaMarketing.css";
// Swiper imports removed

// React icons
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

// Data remains the same
const cardsData = [
  {
    id: 1, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/asc/SocialMedia/1.jpg",
    shape: "agency-shape-yellow", color: "agency-color-1", iconsPosition: "left", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 2, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/asc/SocialMedia/2.jpg",
    shape: "agency-shape-purple", color: "agency-color-2", iconsPosition: "left", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 3, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/asc/SocialMedia/3.jpg",
    shape: "agency-shape-blue", color: "agency-color-3", iconsPosition: "right", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 4, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/asc/SocialMedia/4.jpg",
    shape: "agency-shape-yellow", color: "agency-color-4", iconsPosition: "left", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 5, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/asc/SocialMedia/5.jpg",
    shape: "agency-shape-purple", color: "agency-color-5", iconsPosition: "left", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 6, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/asc/SocialMedia/6.jpg",
    shape: "agency-shape-blue", color: "agency-color-6", iconsPosition: "right", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 7, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/asc/SocialMedia/7.jpg",
    shape: "agency-shape-yellow", color: "agency-color-7", iconsPosition: "left", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 8, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/asc/SocialMedia/8.jpg",
    shape: "agency-shape-purple", color: "agency-color-8", iconsPosition: "left", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },

  {
    id: 9, title: "Creative Marketing Agency", img: "https://ahaanmedia.com/asc/SocialMedia/9.jpg",
    shape: "agency-shape-blue", color: "agency-color-9", iconsPosition: "right", icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
  },
];


function Card({ title, img, shape, color, iconsPosition, icons }) {
  return (
    <div className={`agency-card ${color}`}>
      {/* Background Shape */}
      <div className={`agency-shape ${shape}`}></div>

      {/* Image */}
      <div className="agency-image-box">
        <img src={img} alt={title} />
      </div>
      <div className="agency-logo">
        <img src="https://ahaanmedia.com/asc/layouts/fav.png" alt="Logo" />
      </div>

      {/* Icons */}
      <div className={`agency-icons ${iconsPosition}`}>
        {icons.map((Icon, idx) => (
          <div className="newfile-icon-wrapper" key={idx}>
            {Icon}
          </div>
        ))}
      </div>
    </div>
  );
} 

export default function SocialMediaMarketing() {
    return (
        // Removed px-4 (Bootstrap padding) to ensure our custom Flexbox gaps work correctly
        <div className="py-md-3 py-0" > 
         <div className="text-center mb-5">
        <h2 className="fw-bold  portfolio-title">Social Media Marketing</h2>
        <p className="text-muted">A showcase of engaging and creative social media designs</p>
      </div>
            <div className="agency-grid-container" >
                {cardsData.map(({ id, title, img, shape, color, iconsPosition, icons }) => (
                    <div key={id} className="agency-card-wrapper" >
                        <Card
                            title={title}
                            img={img}
                            shape={shape}
                            color={color}
                            iconsPosition={iconsPosition}
                            icons={icons}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}