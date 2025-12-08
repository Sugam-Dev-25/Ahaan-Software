import React from "react";
import Banner from "./Banner";
import Team from "./Team";
import HorizontalTimeline from '../Portfolio/HorizontalTimeline';
import AboutSection from '../Portfolio/AboutSection';
import "bootstrap/dist/css/bootstrap.min.css";
import MeetOurTeam from "./MeetOurTeam";

function About() {
  return (
    <>
      <Banner />
      <HorizontalTimeline/>
      <AboutSection/>
      {/* <Team/> */}
      <MeetOurTeam />

    </>
  );
}

export default About;
