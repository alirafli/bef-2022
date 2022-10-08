import React from "react";
import { Navbar, MedPart, Text, Button } from "../../components";
import HAND from "../../assets/homepage/hand.png";
import MASCOT from "../../assets/mascot.png";

import SectionOne from "./Section/sectionOne";
import SectionTwo from "./Section/sectionTwo";
import SectionThree from "./Section/sectionThree";
import SectionFour from "./Section/sectionFour";
import SectionFive from "./Section/sectionFive";
import SectionSix from "./Section/sectionSix";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BEF | Homepage</title>
      </Helmet>
      <Navbar />
      <SectionOne Button={Button} Text={Text} MASCOT={MASCOT} />
      <SectionTwo Text={Text} HAND={HAND} />
      <SectionThree Text={Text} />
      <SectionFour Text={Text} />
      <SectionFive Text={Text} />
      <MedPart content={<SectionSix Text={Text} />} />
    </>
  );
};

export default Home;
