import React from "react";
import { Text } from "../../../components";
import POSTER1 from "../../../assets/poster/poster_lomba_1.png";
import POSTER2 from "../../../assets/poster/poster_lomba_2.png";
import POSTER3 from "../../../assets/poster/poster_lomba_3.png";

const sectionTwo = () => {
  return (
    <div className="mt-10 px-10">
      <div className="bg-gradient-to-r from-[#E69F55] via-[#5A4475] to-[#60ACCD] w-fit px-5 py-3 rounded-lg mx-auto -mb-6 relative z-10 text-center">
        <Text
          variant="h1"
          weight="semiBold"
          color="white"
          className="text-white"
        >
          Dokumentasi Bravo 2022
        </Text>
      </div>
      <div className="bg-secondary grid grid-cols-1 md:grid-cols-2 gap-4 w-fit mx-auto p-12 rounded-lg">
        <img src={POSTER1} alt="poster 1"  className="mx-auto"/>
        <div className="grid grid-cols-1 gap-4">
          <img src={POSTER2} alt="poster 2" />
          <img src={POSTER3} alt="poster 3" />
        </div>
      </div>
    </div>
  );
};

export default sectionTwo;
