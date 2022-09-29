import React from "react";
import Text from "../Text";
import Footer from "../Footer";
import MOUNTAIN from "../../assets/homepage/mountain.png";

const MedPart = ({ content }) => {
  return (
    <div className="bg-gradient-to-b from-transparent to-[#AE92F6]">
      <div>{content}</div>
      <div className="relative bg-secondary bg-opacity-75 flex flex-col justify-center items-center h-60 lg:h-[720px] w-10/12 mx-auto rounded-3xl p-24 z-20">
        <Text
          variant="h1"
          weight="bold"
          color="white"
          className="text-white text-center"
        >
          Calling out sponsors & media partners
        </Text>
      </div>
      <img src={MOUNTAIN} alt="mountain" className="relative w-screen md:-mt-60   z-10" />
      <Footer />
    </div>
  );
};

export default MedPart;
