import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import "./Secondbanner.css";
 
const CallToAction = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOnlyMObile, setIsOnlyMobile] = useState(false);
  const navigate = useNavigate();
 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsOnlyMobile(window.innerWidth <= 450);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  const handleGoToContact = () => {
    navigate("/contact");
  };
 
  return (
    <div className="second-banner-req-call">
      <div className="second-banner-container">
        <div className="second-banner-call-details">
          <h3 className="whychooseus-label">
            Ready to Innovate Your Business?
          </h3>
          <div className="second-banner-phone-numbers">
            <div>
              <div style={{ lineHeight: "1.2" }}>
                <div
                  style={{
                    color: "#CD912A",
                    fontSize: isMobile ? "14px" : "20px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  USA
                </div>
 
                <a
                  href="tel:+1-740-748-4441"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  +1-740-748-4441
                </a>
              </div>
            </div>
 
            <div>
              <div style={{ lineHeight: "1.2" }}>
                <div
                  style={{
                    color: "#CD912A",
                    cursor: "pointer",
                    fontSize: isMobile ? "14px" : "20px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  India
                </div>
                <div
                  style={{ cursor: "pointer", marginTop: "10px" }}
                  onClick={() =>
                    window.open("https://wa.me/919830371143", "_blank")
                  }
                >
                  +91-983-037-1143
                </div>
              </div>
            </div>
            {/* <p onClick={() => window.open("https://wa.me/6590745876", "_blank")}>
              <div style={{ lineHeight: "1.2",  }}>
                <div style={{ color: "#CD912A", cursor: "pointer", fontSize: isMobile ? "14px" : "20px", fontWeight: "bold", textTransform: "uppercase" }}>Singapore</div>
                <div
                  style={{  cursor: "pointer", marginTop: "10px" }}
                  onClick={() => window.open("https://wa.me/6590745876", "_blank")}
                >
                  +65-9074-5876
                </div>
              </div>
            </p> */}
          </div>
        </div>
 
        <a className=" newsletter-button" href="/contact">
          <span> {isOnlyMObile ? "Contact" : "Contact Now"} </span>
        </a>
      </div>
    </div>
  );
};
 
export default CallToAction;
 
 