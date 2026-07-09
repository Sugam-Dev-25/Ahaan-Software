import React from "react";
import { BsBarChartLine, BsPeople } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./WhoWeAreSection.css";

const WhoWeAreSection = () => {
  return (
    <section className="who-we-are-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image Section */}
          <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
            <img
              src="https://ahaanmedia.com/ahaanwebsite/All/Who-We-Are-3.png"
              alt="Mobile and Web Development"
              className="img-fluid who-we-are-image"
            />
          </div>

          {/* Right Content Section */}
          <div className="col-lg-6 col-md-12">
            <div className="who-we-are-content">
              <h6 className="technology-subtitle">
                About Ahaan Software <span className="divider"></span>
              </h6>
              <h2 className="main-title">
                <span className="highlight-text">
                  Your trusted partner in Mobile and Web Design & Development.
                </span>
              </h2>
              <p className="description">
                Ahaan Software is a team of passionate professionals dedicated
                to driving innovation and transformation through cutting-edge
                technology. With a proven track record of delivering over 100
                successful custom web and mobile development projects, we
                earnestly empower businesses to achieve excellence, efficiency, and growth
                through tailored digital solutions.
              </p>

              <div className="row feature-row mt-4">

                {/* Left Feature */}
                <div className="col-sm-6 mb-4 mb-sm-0">
                  <div className="feature-box">
                    <div className="icon-circle">
                      <BsBarChartLine className="feature-icon" />
                    </div>
                    <h5>Cutting-Edge Tech Expertise</h5>
                  </div>

                  <ul className="checklist mt-3 list-unstyled">
                    <li>
                      <IoMdCheckmarkCircleOutline className="check-icon me-2" />
                      Web & mobile solutions
                    </li>
                    <li>
                      <IoMdCheckmarkCircleOutline className="check-icon me-2" />
                      Quality development
                    </li>
                    <li>
                      <IoMdCheckmarkCircleOutline className="check-icon me-2" />
                      Maintenance & support
                    </li>
                  </ul>
                </div>

                {/* Right Feature */}
                <div className="col-sm-6">
                  <div className="feature-box">
                    <div className="icon-circle">
                      <BsPeople className="feature-icon" />
                    </div>
                    <h5>Built to Perform</h5>
                  </div>

                  <ul className="checklist mt-3 list-unstyled">
                    <li>
                      <IoMdCheckmarkCircleOutline className="check-icon me-2" />
                      Secure & scalable apps
                    </li>
                    <li>
                      <IoMdCheckmarkCircleOutline className="check-icon me-2" />
                      Custom solutions
                    </li>
                    <li>
                      <IoMdCheckmarkCircleOutline className="check-icon me-2" />
                      Innovative approach
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Horizontal rule using standard Bootstrap spacing */}
      <div className="py-2"></div>
    </section>
  );
};

export default WhoWeAreSection;