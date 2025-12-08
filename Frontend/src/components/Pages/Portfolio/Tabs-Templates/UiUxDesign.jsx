import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UiUxDesign.css";

const UiUxDesign = () => {
  const [showall, setShowall] = useState(false);

  const handleClick = () => {
    setShowall(!showall);
  }

  const imageLinks = [
    {
      url: "https://ahaanmedia.com/asc/portfolio/10.png",
      link: "https://designing.ahaanmedia.com/jacksonlanding.html",
      title: "Jackson Landing",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/1.jpg",
      link: "https://designing.ahaanmedia.com/Hotel-Supermarket.html",
      title: "Hotel Supermarket",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/2.jpg",
      link: "https://designing.ahaanmedia.com/Lawyer.html",
      title: "Lawyer",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/3.jpg",
      link: "https://designing.ahaanmedia.com/nice-opera.html",
      title: "Nice Opera",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/4.jpg",
      link: "https://designing.ahaanmedia.com/TRC-Version-2.html",
      title: "TRC Version 2",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/5.jpg",
      link: "https://designing.ahaanmedia.com/writers.html",
      title: "Writers",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/6.jpg",
      link: "https://designing.ahaanmedia.com/sueno.html",
      title: "Sueno",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/7.jpg",
      link: "https://designing.ahaanmedia.com/seocompany.html",
      title: "SEO Company",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/8.jpg",
      link: "https://designing.ahaanmedia.com/rockitcoatings.html",
      title: "Rockit Coatings",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/9.jpg",
      link: "https://designing.ahaanmedia.com/ridgeart.html",
      title: "Ridge Art",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/10.jpg",
      link: "https://designing.ahaanmedia.com/NB-MBA.html",
      title: "NB MBA",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/11.jpg",
      link: "https://designing.ahaanmedia.com/Paradise.html",
      title: "Paradise",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/12.jpg",
      link: "https://designing.ahaanmedia.com/Cardly.html",
      title: "Cardly",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/13.jpg",
      link: "https://designing.ahaanmedia.com/corporatecrm.html",
      title: "Corporate CRM",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/14.jpg",
      link: "https://designing.ahaanmedia.com/education.html",
      title: "Education",
    },
    {
      url: "https://ahaanmedia.com/asc/UIUX/15.jpg",
      link: "https://designing.ahaanmedia.com/Lynn-Clinic.html",
      title: "Lynn Clinic",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/1.png",
      link: "https://designing.ahaanmedia.com/asdesign.html",
      title: "AS Design",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/2.png",
      link: "https://designing.ahaanmedia.com/alloywheelrepair.html",
      title: "Alloy Wheel Repair",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/3.png",
      link: "https://designing.ahaanmedia.com/amanhome.html",
      title: "Aman Home",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/4.png",
      link: "https://designing.ahaanmedia.com/clubcomeur.html",
      title: "Club Comeur",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/6.png",
      link: "https://designing.ahaanmedia.com/ekyaa.html",
      title: "Ekyaa",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/7.png",
      link: "https://designing.ahaanmedia.com/futurepixel.html",
      title: "Future Pixel",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/8.png",
      link: "https://designing.ahaanmedia.com/gyim.html",
      title: "Gyim",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/9.png",
      link: "https://designing.ahaanmedia.com/healthcare.html",
      title: "Healthcare",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/11.png",
      link: "https://designing.ahaanmedia.com/lerambouillet.html",
      title: "Lerambouillet",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/12.png",
      link: "https://designing.ahaanmedia.com/norwegian.html",
      title: "Norwegian",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/13.png",
      link: "https://designing.ahaanmedia.com/pawshion.html",
      title: "Pawshion",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/14.png",
      link: "https://designing.ahaanmedia.com/regalbites.html",
      title: "Regal Bites",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/15.png",
      link: "https://designing.ahaanmedia.com/ridgeart.html",
      title: "Ridge Art",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/16.png",
      link: "https://designing.ahaanmedia.com/nutration.html",
      title: "Nutration",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/17.png",
      link: "https://designing.ahaanmedia.com/rockitcoatings.html",
      title: "Rockit Coatings",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/18.png",
      link: "https://designing.ahaanmedia.com/roofing.html",
      title: "Roofing",
    },
    {
      url: "https://ahaanmedia.com/asc/portfolio/19.png",
      link: "https://designing.ahaanmedia.com/skincare.html",
      title: "Skincare",
    },
  ];

  return (
     <div className="uiux-design-gallery-container container py-1">
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold portfolio-title">UI/UX Design Portfolio</h2>
        <p className="text-muted">Browse through our creative UI/UX layout designs</p>
      </div>

      {/* Image Grid */}
      <div className="row g-4">
        {imageLinks.map((item, index) => {
          if (!showall && index >= 9) return null;
          return (
            <div key={index} className="col-6 col-md-4 text-center">
              <div className="uiux-image-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="uiux-image"
                  />
                  <div className="uiux-overlay">
                    <div className="uiux-title">{item.title}</div>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Section */}
      {!showall && (
        <div className="d-flex align-items-center justify-content-center mt-4">
          <hr className="flex-grow-1 mx-3 uiux-viewall-hr" />
          <button
            className="border-0 bg-transparent uiux-viewall-btn"
            onClick={handleClick}
          >
            View All
          </button>
          <hr className="flex-grow-1 mx-3 uiux-viewall-hr" />
        </div>
      )}
    </div>
  );
};

export default UiUxDesign;
