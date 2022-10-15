import React from "react";
import { MedPart, Text, Button } from "../../components";
import BG from "../../assets/bef_bg.png";
import { Helmet } from "react-helmet-async";

const ComingSoon = () => {
  return (
    <div>
      <Helmet>
        <title>BEF | Coming Soon</title>
      </Helmet>
      <div className="text-center bg-cover relative bg-center bg-no-repeat overflow-hidden">
        <img src={BG} alt="background" className="w-full" />
        <Text
          color="white"
          weight="bold"
          variant="h1"
          className="text-white absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex flex-col"
        >
          Coming Soon!
          <Button isLink="/">go to homepage</Button>
        </Text>
      </div>
      <MedPart />
    </div>
  );
};

export default ComingSoon;
