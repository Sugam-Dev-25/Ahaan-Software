import React, { useEffect, useState } from "react";
import "./HeroBanner.css";
import sun from "../../../assets/sun.png";
import moon from "../../../assets/moon.png";
import cloud from "../../../assets/cloud.webp";

const HeroBanner = () => {
  const [theme, setTheme] = useState("morning");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const themes = ["morning", "noon", "evening", "night"];
    let index = 0;

    const changeTheme = () => {
      setFade(true);
      setTimeout(() => {
        setTheme(themes[index]);
        setFade(false);
        index = (index + 1) % themes.length;
      }, 1000); // fade duration
    };

    changeTheme();
    const interval = setInterval(changeTheme, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`hero-scene ${theme} ${fade ? "fade" : ""}`}>
      <div className="sky">
        {theme !== "night" ? (
          <img src={sun} alt="sun" className="sun glow" />
        ) : (
          <img src={moon} alt="moon" className="moon glow" />
        )}
        <img src={cloud} alt="cloud" className="cloud cloud1" />
        <img src={cloud} alt="cloud" className="cloud cloud2" />
        <img src={cloud} alt="cloud" className="cloud cloud3" />
      </div>

      <div className="hero-content">
        <h1 className="title">
          Welcome to <span>SugamTech</span>
        </h1>
        <p className="subtitle">
          {theme === "morning"
            ? "Rise and Shine ☀️ — Start Creating!"
            : theme === "noon"
            ? "Bright Ideas in Bright Light 🌤️"
            : theme === "evening"
            ? "Golden Hours of Innovation 🌇"
            : "Dream. Code. Repeat. 🌙"}
        </p>
        <button className="btn-main">Get Started</button>
      </div>
    </section>
  );
};

export default HeroBanner;
