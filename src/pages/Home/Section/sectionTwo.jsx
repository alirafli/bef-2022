import React from "react";
import { AnimateSubDiv, Text } from "../../../components";
import HAND from "../../../assets/homepage/hand.png";

const sectionTwo = () => {
  return (
    <AnimateSubDiv className="relative flex flex-col items-center mx-auto text-center overflow-hidden pb-24">
      <div>
        <Text variant="h1" weight="bold" className="mb-3">
          Throwback
        </Text>
        <Text variant="p2" className="w-9/12 lg:w-7/12 mx-auto mb-5">
          Here, we are delighted to display a glimpse into the exhilaration of
          BEF back from 2019 until 2021 that hopefully will allow feelings of
          nostalgia inside you to spark
        </Text>
      </div>
      <div className="w-10/12 md:w-8/12 lg:w-5/12 rounded-2xl h-56 md:h-96 bg-youtube-bg flex items-center justify-center bg-no-repeat bg-cover">
        <iframe
          width="91%"
          height="91%"
          src="https://www.youtube-nocookie.com/embed/Pa87GE8V_qI?controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <img
        src={HAND}
        alt="hand left"
        className="absolute w-[300px] md:w-[400px] lg:w-[500px] -left-44 -z-10"
      />
      <img
        src={HAND}
        alt="hand right"
        className="absolute w-[300px] md:w-[400px] lg:w-[500px] -right-44 top-[80px] -scale-x-100 -z-10"
      />
    </AnimateSubDiv>
  );
};

export default sectionTwo;
