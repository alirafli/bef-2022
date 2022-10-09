import React from "react";
import { MedPart, Text } from "../../components";
import BG from "../../assets/bef_bg.png";

const ComingSoon = () => {
  return (
    <div>
      <div className="text-center bg-cover relative bg-center bg-no-repeat overflow-hidden">
        <img src={BG} alt="background" className="w-full" />
        <Text
          color="white"
          weight="bold"
          variant="h1"
          className="text-white absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4"
        >
          Coming Soon!
        </Text>
      </div>
      <MedPart />
    </div>
  );
};

export default ComingSoon;
