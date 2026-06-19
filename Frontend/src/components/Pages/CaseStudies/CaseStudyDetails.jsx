import "./CaseStudyDetails.css";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getCaseStudyBySlug, getMediaById } from "../../../Api/WordpressAPI";

const CaseStudyDetails = () => {
  const { slug } = useParams();

  const [data, setData] = useState(null);

  const [images, setImages] = useState({});

  useEffect(() => {
    loadData();
  }, [slug]);

  const loadData = async () => {
    try {
      const response = await getCaseStudyBySlug(slug);

      if (!response) return;

      // Content আগে দেখাও
      setData(response);

      const acf = response.acf;

      const mediaIds = [
        acf.project_overview_image,
        acf.challenges_image,
        acf.technology_1_logo,
        acf.technology_2_logo,
        acf.technology_3_logo,
        acf.technology_4_logo,
        acf.technology_5_logo,
        acf.solution_1_image,
        acf.solution_2_image,
        acf.solution_3_image,
        acf.solution_4_image,
        acf.solution_5_image,
        acf["key_features_&_benefits_image"],
        acf.business_impact_image,
        acf.design_highlights_image,
        acf.project_details_image,
      ];

      const mediaResponses = await Promise.all(
        mediaIds.map((id) => (id ? getMediaById(id) : Promise.resolve(null))),
      );

      setImages({
        projectOverview: mediaResponses[0]?.source_url,
        challenges: mediaResponses[1]?.source_url,
        tech1: mediaResponses[2]?.source_url,
        tech2: mediaResponses[3]?.source_url,
        tech3: mediaResponses[4]?.source_url,
        tech4: mediaResponses[5]?.source_url,
        tech5: mediaResponses[6]?.source_url,
        solution1: mediaResponses[7]?.source_url,
        solution2: mediaResponses[8]?.source_url,
        solution3: mediaResponses[9]?.source_url,
        solution4: mediaResponses[10]?.source_url,
        solution5: mediaResponses[11]?.source_url,
        featureImage: mediaResponses[12]?.source_url,
        businessImpact: mediaResponses[13]?.source_url,
        designHighlights: mediaResponses[14]?.source_url,
        projectDetails: mediaResponses[15]?.source_url,
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (!data) return <div className="text-center py-5">Loading...</div>;

  const acf = data.acf;

  const solutions = [
    {
      title: acf.solution_1_title,
      description: acf.solution_1_description,
      image: images.solution1,
    },
    {
      title: acf.solution_2_title,
      description: acf.solution_2_description,
      image: images.solution2,
    },
    {
      title: acf.solution_3_title,
      description: acf.solution_3_description,
      image: images.solution3,
    },
    {
      title: acf.solution_4_title,
      description: acf.solution_4_description,
      image: images.solution4,
    },
    {
      title: acf.solution_5_title,
      description: acf.solution_5_description,
      image: images.solution5,
    },
  ].filter(
  (item) => item.title && item.description && item.image
);

  return (
    <div className="case-details">
      {/* HERO SECTION */}
      <section
        className="case-study-hero"
        style={{
          backgroundImage:
            "url('https://ahaanmedia.com/ahaanwebsite/Banner/CaseStudy.jpg')",
        }}
      >
        <div className="hero-overlay">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-lg-6">
                <h1 className="hero-title">{data.title.rendered}</h1>

                <div
                  className="hero-description"
                  dangerouslySetInnerHTML={{
                    __html: data.content.rendered,
                  }}
                />
              </div>

              {/* Right Featured Image */}
              <div className="col-lg-6 text-center">
                <img
                  src={data?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                  alt={data.title.rendered}
                  className="hero-feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      {acf.project_overview && images.projectOverview && (
        <section className="project-overview-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2>Project Overview</h2>

                <p>{acf.project_overview}</p>
              </div>

              <div className="col-lg-6">
                <img
                  src={images.projectOverview}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CHALLENGES */}
      {acf.challenges && images.challenges && (
        <section className="challenges-section">
          <div className="container">
            <div className="row align-items-center challenges-row">
              {/* Content Left*/}
              <div className="col-lg-6">
                <img src={images.challenges} className="img-fluid" alt="" />
              </div>

              {/* Image Right  */}

              <div className="col-lg-6">
                <h2>Challenges</h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: acf.challenges,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* KEY BENEFITS */}
      {acf["key_features_&_benefits"] && images.featureImage && (
        <section className="key-benefits-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2>Key Features & Benefits</h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: acf["key_features_&_benefits"],
                  }}
                />
              </div>

              <div className="col-lg-6">
                <img src={images.featureImage} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TECHNOLOGIES */}

      {images.tech1 && images.tech2 && images.tech3 && images.tech4 && images.tech5 && (
        <section className="technologies-section">
          <div className="container">
            <h2>technologies & methodologies used</h2>

            <div className="technologies-wrapper">
              <div className="tech-item">
                <img src={images.tech1} alt="" />
              </div>

              <div className="tech-item">
                <img src={images.tech2} alt="" />
              </div>

              <div className="tech-item">
                <img src={images.tech3} alt="" />
              </div>

              <div className="tech-item">
                <img src={images.tech4} alt="" />
              </div>

              <div className="tech-item">
                <img src={images.tech5} alt="" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SOLUTIONS */}
      {solutions.length > 0 && (
      <section className="solution-section">
        <div className="container">
          <h2 className="solution-main-title">the solutions provided</h2>

          <div className="solution-timeline">
            {solutions.map((item, index) => (
              <div
                key={index}
                className={`solution-item ${
                  index % 2 === 0 ? "right" : "left"
                }`}
              >
                <div className="timeline-dot"></div>

                <div className="solution-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <img src={item.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* BUSINESS IMPACT */}
      {acf.business_impact && images.businessImpact && (
        <section className="business-impact-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src={images.businessImpact} className="img-fluid" alt="" />
              </div>

              <div className="col-lg-6">
                <h2>Business Impact</h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: acf.business_impact,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DESIGN HIGHLIGHTS */}
      {acf.design_highlights && images.designHighlights && (
        <section className="design-highlights-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2>Design Highlights</h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: acf.design_highlights,
                  }}
                />
              </div>

              <div className="col-lg-6">
                <img
                  src={images.designHighlights}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WHY THIS PROJECT STANDS OUT */}
      {acf.why_this_project_stands_out && (
        <section className="project-standout-section">
          <div className="container">
            <div className="standout-card">
              <h2>Why This Project Stands Out</h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: acf.why_this_project_stands_out,
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* PROJECT DETAILS */}
      {acf.project_details && images.projectDetails && (
        <section className="project-details-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src={images.projectDetails} className="img-fluid" alt="" />
              </div>

              <div className="col-lg-6">
                <h2>Project Details</h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: acf.project_details,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CaseStudyDetails;
