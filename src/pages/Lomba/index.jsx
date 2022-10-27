import React from "react";
import SectionTwo from "./Section/sectionTwo";
import { Helmet } from "react-helmet-async";
import { ButtonScroll, MedPart, Text, AnimateDiv } from "../../components";
import BRAVO from "../../assets/bravo.svg";

const Lomba = () => {
  return (
    <AnimateDiv className="pt-16">
      <Helmet>
        <title>BEF | Lomba</title>
      </Helmet>
      <div className="bg-bef-bg  lg:h-[685px] bg-no-repeat bg-cover bg-center text-center pt-32 pb-20 px-5 lg:px-72">
        <Text
          variant="h1"
          weight="bold"
          color="white"
          className="text-white"
          shadow="text"
        >
          Brawijaya Entrepreneurship in Advanced Competition (BRAVO)
        </Text>
        <hr className="w-11/12 mx-auto h-0.5	 rounded bg-white my-5" />
        <Text
          variant="p2"
          color="white"
          className="text-white my-16"
          weight="semiBold"
        >
          Grand Final 6 November 2022
        </Text>
        <div>
          <ButtonScroll linkTo="bravoAbout">Tentang Bravo</ButtonScroll>
          <ButtonScroll linkTo="bravoDocumentation">Dokumentasi</ButtonScroll>
        </div>
      </div>
      <div className="bg-secondary text-center flex justify-between">
        <img src={BRAVO} alt="bravo banner" className="hidden sm:block" />
        <div className="text-center py-20 px-6 lg:px-20" name="bravoAbout">
          <Text
            variant="h1"
            weight="bold"
            color="white"
            className="text-white mb-10"
          >
            Tentang BRAVO
          </Text>
          <Text variant="p2" color="white" className="text-white">
            Brawijaya Entrepreneurship in Advanced Competition (BRAVO) merupakan
            serangkaian perlombaan yang berfokus dalam penemuan inovasi bisnis
            yang mampu beradaptasi di era sekarang dan memiliki keberlanjutan
            bisnis yang baik. BRAVO memiliki tema Creating Business
            Opportunities for SME's Sustainability in Endemic Transition Era
            dengan 3 bidang yang akan dilombakan, yaitu food and beverage,
            fashion, dan kerajinan.
          </Text>
        </div>
        <img src={BRAVO} alt="bravo banner" className="hidden sm:block" />
      </div>
      <MedPart content={<SectionTwo />} />
    </AnimateDiv>
  );
};

export default Lomba;
