import React from "react";
import "./Newfile.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// React icons
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";


// const cardsData = [
//   {
//     id: 1,
//     title: "Creative Marketing Agency",
//     img: "https://ahaanmedia.com/asc/SocialMedia/1.jpg",
//     shape: "agency-shape-yellow",
//     color: "agency-yellow",
//     iconsPosition: "left", // for left side icons
//     icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
//   },
//   {
//     id: 2,
//     title: "Creative Marketing Agency",
//     img: "https://ahaanmedia.com/asc/SocialMedia/2.jpg",
//     shape: "agency-shape-purple",
//     color: "agency-purple",
//     iconsPosition: "left",
//     icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
//   },
//   {
//     id: 3,
//     title: "Creative Marketing Agency",
//     img: "https://ahaanmedia.com/asc/SocialMedia/3.jpg",
//     shape: "agency-shape-blue",
//     color: "agency-blue",
//     iconsPosition: "right", // for right side icons
//     icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
//   },
//   {
//     id: 4,
//     title: "Creative Marketing Agency",
//     img: "https://ahaanmedia.com/asc/SocialMedia/4.jpg",
//     shape: "agency-shape-yellow",
//     color: "agency-blue",
//     iconsPosition: "left", // for left side icons
//     icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
//   },
//   {
//     id: 5,
//     title: "Creative Marketing Agency",
//     img: "https://ahaanmedia.com/asc/SocialMedia/5.jpg",
//     shape: "agency-shape-yellow",
//     color: "agency-blue",
//     iconsPosition: "left", // for left side icons
//     icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
//   },
//   {
//     id: 6,
//     title: "Creative Marketing Agency",
//     img: "https://ahaanmedia.com/asc/SocialMedia/6.jpg",
//     shape: "agency-shape-yellow",
//     color: "agency-blue",
//     iconsPosition: "left", // for left side icons
//     icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
//   },
//   {
//     id: 7,
//     title: "Creative Marketing Agency",
//     img: "https://ahaanmedia.com/asc/SocialMedia/7.jpg",
//     shape: "agency-shape-yellow",
//     color: "agency-blue",
//     iconsPosition: "left", // for left side icons
//     icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
//   },
//   {
//     id: 8,
//     title: "Creative Marketing Agency",
//     img: "https://ahaanmedia.com/asc/SocialMedia/8.jpg",
//     shape: "agency-shape-yellow",
//     color: "agency-blue",
//     iconsPosition: "left", // for left side icons
//     icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
//   },
//   {
//     id: 9,
//     title: "Creative Marketing Agency",
//     img: "https://ahaanmedia.com/asc/SocialMedia/9.jpg",
//     shape: "agency-shape-yellow",
//     color: "agency-blue",
//     iconsPosition: "left", // for right side icons
//     icons: [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />, <FaTwitter />, <FaYoutube />],
//   },
// ];


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

export default function Newfile() {
    return (
        <div className="container px-4 py-3">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 1500,               // 2.5 seconds delay between slides
                    // keep autoplay even after user interaction
                }}
                // gap between slides
                slidesPerView={4}
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    600: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                // number of visible slides
                centeredSlides={true}   // center slides
                loop={true}
                // loop the slides

                className="agency-card-container"
            >
                {cardsData.map(({ id, title, img, shape, color, iconsPosition, icons }) => (
                    <SwiperSlide key={id}  >
                        <Card
                            title={title}
                            img={img}
                            shape={shape}
                            color={color}
                            iconsPosition={iconsPosition}
                            icons={icons}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}
