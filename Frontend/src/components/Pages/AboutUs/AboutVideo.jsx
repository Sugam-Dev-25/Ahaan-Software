import React from "react";
import "./AboutVideo.css";

const AboutVideo = () => {
  return (
    <section className="about-video-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="video-wrapper shadow">
              <video
                className="about-video"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://ahaanmedia.com/ahaanwebsite/video/about-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideo;