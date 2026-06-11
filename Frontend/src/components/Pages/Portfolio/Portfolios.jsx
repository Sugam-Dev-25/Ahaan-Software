import React from "react";
import PortfolioBanner from "./PortfolioBanner";
import ServicesSection from "./ServicesSection";
import ThirdSection from "../../Layouts/Body/ThirdSection";
import CounterSection from "./CounterSection";
import AnimatedTabsSection from "./AnimatedTabsSection";
import ImageCarousel from "../../Layouts/Body/ImageCarousel";
import SecondBanner from "../../Layouts/Body/SecondBanner";
import PortfolioSecondBannner from "./PortfolioSecondBannner";
const Portfolios = () => {
  return (
    <>
      {/* <PortfolioBanner /> */}
      <PortfolioSecondBannner/>
      <AnimatedTabsSection />
      <CounterSection />
      <ServicesSection />
      <ThirdSection />
      <ImageCarousel />
      <SecondBanner />
    </>
  );
};

export default Portfolios;
