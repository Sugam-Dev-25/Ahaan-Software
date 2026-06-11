import React, { lazy, Suspense } from "react";

// 1. KEEP THESE AS STANDARD IMPORTS (Above the fold)
import HeroBanner from "../../Layouts/Body/HeroBanner";
const WhoWeAreSection = lazy(
  () => import("../../Layouts/Body/WhoWeAreSection"),
);
const ServicesSection = lazy(() => import("../Portfolio/ServicesSection"));
const ThirdSection = lazy(() => import("../../Layouts/Body/ThirdSection"));
const TotalProject = lazy(() => import("../../Layouts/Body/TotalProject"));
const FirstSection = lazy(() => import("../../Layouts/Body/FirstSection"));
const WhyChooseUs = lazy(() => import("../../Layouts/Body/WhyChooseUs"));
const OurProcess = lazy(() => import("../../Layouts/Body/OurProcess"));
const ConnectSection = lazy(() => import("../../Layouts/Body/ConnectSection"));
const ImageCarousel = lazy(() => import("../../Layouts/Body/ImageCarousel"));
const CaseStudyCarousel = lazy(
  () => import("../../Layouts/Body/CaseStudyCarousel"),
);
const TestimonialCarousel = lazy(
  () => import("../../Layouts/Body/Testimonials"),
);
const SecondBanner = lazy(() => import("../../Layouts/Body/SecondBanner"));
import "./Home.css";
const Home = () => {
  return (
    <div>
      <HeroBanner />

      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center py-5">
            <div className="loader-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        }
      >
        <WhoWeAreSection />
        <ServicesSection />
        <ThirdSection />
        <ConnectSection />
        <TotalProject />      
        <WhyChooseUs />
        <FirstSection />
        <ConnectSection />
        <FirstSection />
        <ConnectSection />
        <OurProcess />
        <ImageCarousel />
        <OurProcess />
        <CaseStudyCarousel />
        <TestimonialCarousel />
        <SecondBanner />
      </Suspense>
    </div>
  );
};

export default Home;
