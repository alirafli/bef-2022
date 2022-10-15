import React from "react";
import Text from "../Text";
import Footer from "../Footer";
import MOUNTAIN from "../../assets/homepage/mountain.png";
import OBJECT1 from "../../assets/medPart/object1.png";
import OBJECT4 from "../../assets/medPart/object4.png";
import OBJECT5 from "../../assets/medPart/object5.png";

const MedPart = ({ content }) => {
  return (
    <div className="relative bg-gradient-to-b from-transparent to-[#AE92F6] overflow-hidden">
      <div className="mb-96">{content}</div>
      <img
        src={OBJECT1}
        alt="object1"
        className="absolute z-10 bottom-[40rem] lg:bottom-[50rem] -right-32 sm:-right-72 scale-75"
      />
      <img
        src={OBJECT5}
        alt="object1"
        className="absolute z-10 bottom-[25rem] lg:bottom-[43rem] -left-32 sm:-left-20 scale-75 lg:scale-100"
      />
      <img
        src={OBJECT4}
        alt="object1"
        className="absolute z-10 bottom-[57rem] lg:bottom-[70rem] sm:right-96 scale-75 lg:scale-100"
      />
      <div className="relative bg-secondary bg-opacity-75 flex flex-col justify-center items-center h-[720px] w-10/12 mx-auto rounded-3xl p-5 md:p-24 z-20">
        <Text
          variant="h1"
          weight="bold"
          color="white"
          className="text-white text-center"
        >
          Calling out sponsors & media partners
        </Text>
      </div>
      <img
        src={MOUNTAIN}
        alt="mountain"
        className="relative w-screen md:-mt-60 z-10"
      />
      <Footer />
    </div>
  );
};

export default MedPart;
