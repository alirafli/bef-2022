import React from "react";
import { MedPart, AnimateDiv } from "../../components";
import SectionOne from "./Section/sectionOne";
import SectionTwo from "./Section/sectionTwo";
import SectionThree from "./Section/sectionThree";
import SectionFour from "./Section/sectionFour";
import SectionFive from "./Section/sectionFive";
import SectionSix from "./Section/sectionSix";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <AnimateDiv className="pt-16">
      <Helmet>
        <title>BEF | Homepage</title>
      </Helmet>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <MedPart content={<SectionSix />} />
    </AnimateDiv>
  );
};

export default Home;
