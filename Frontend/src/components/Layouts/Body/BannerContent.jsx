import React, { useEffect, useState } from "react";
import "./BannerContent.css";
import {
  FiFigma,
  FiLayout,
  FiSmartphone,
  FiCode,
  FiGlobe,
} from "react-icons/fi";
import { SiAdobephotoshop, SiAdobeillustrator, SiWix } from "react-icons/si";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShopify } from "react-icons/si";  
import { SiWordpress } from "react-icons/si";
import { FaWebflow } from "react-icons/fa6";
import { SiFramer } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoIosAppstore } from "react-icons/io";
import { Link } from "react-router-dom";

const techIconsMap = {
  "UI/UX Design": [
    { Icon: FiFigma, label: "Figma" },
    { Icon: SiFramer, label: "Framer" },
    { Icon: SiWix, label: "Wix" },
    { Icon: SiAdobephotoshop, label: "Photoshop" },
    { Icon: SiAdobeillustrator, label: "Illustrator" },
  ],
  "Web Development": [
    { Icon: IoLogoHtml5, label: "Html5" },
    { Icon: IoLogoCss3, label: "Css3" },
    { Icon: FaJsSquare, label: "Js" },
    { Icon: SiNextdotjs, label: "Next" },
    { Icon: FaReact, label: "React" },
    { Icon: FaNodeJs, label: "Node.js" },
    { Icon: FaDatabase, label: "MongoDB" },
    { Icon: RiTailwindCssFill, label: "Tailwind" },
  ],
  "E-Com Development": [
    { Icon: FaWebflow, label: "Webflow" },
    { Icon: SiShopify, label: "Shopify" },
    { Icon: SiWordpress, label: "WordPress" },   
    { Icon: FaReact, label: "React" },
    { Icon: FaNodeJs, label: "Node.js" },
  ],
  "App Development": [
    { Icon: FaReact, label: "React Native" },
    { Icon: FiSmartphone, label: "iOS" },
    { Icon: IoIosAppstore, label: "Android" },
    { Icon: FiGlobe, label: "Cross-Platform" },
  ],
};

const textPairs = [
  { title: "UI/UX Design", subtitle: "Crafting intuitive and visually stunning user experiences." },
  { title: "Web Development", subtitle: "Building fast, responsive, and modern web solutions." },
  { title: "E-Com Development", subtitle: "Creating seamless eCommerce experiences that sell." },
  { title: "App Development", subtitle: "Developing powerful mobile and desktop applications." },
];

const BannerContent = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [fadeSubtitle, setFadeSubtitle] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const currentText = textPairs[index].title;
    
    if (index === 0 && !isDeleting) {
      setFadeSubtitle(true);
      if (!showIcons) setShowIcons(true);
    }

    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentText.length) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        if (displayText.length > currentText.length / 2) {
          setFadeSubtitle(true);
        }

      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentText.length) {
        setShowIcons(true); 
        setTimeout(() => setIsDeleting(true), 3000); 
      } else if (isDeleting && displayText === "") {
        setFadeSubtitle(false);
        setShowIcons(false);
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textPairs.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, showIcons]);

  const currentIcons = techIconsMap[textPairs[index].title] || [];

  return (
    <div className="content">
      {/* Typing Heading with Stroke Styling split into CSS classes */}
      <h1 className="animated-heading">
        <span className="typed-text dynamic-stroke">{displayText}</span>
        
      </h1>

      {/* Subtitle */}
      <p className={`animated-subtitle ${fadeSubtitle ? "visible" : ""}`}>
        {textPairs[index].subtitle}
      </p>

      {/* Tech Icons */}
      <div className={`banner-tech-icons ${showIcons ? "visible" : ""}`}>
        {currentIcons.map(({ Icon, label }, i) => (
          <div key={i} className="banner-tech-icon" title={label}>
            <Icon />
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link to="/contact" className="banner-btn">
        Get a Custom Solution Proposal →
      </Link>
    </div>
  );
};

export default BannerContent;