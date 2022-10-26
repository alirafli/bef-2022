import React from "react";
import { MedPart, Text, Button, AnimateDiv } from "../../components";
import { Helmet } from "react-helmet-async";

const Live = () => {
  return (
    <AnimateDiv>
    {/* not gonna use this page */}
      <Helmet>
        <title>BEF | Coming Soon</title>
      </Helmet>
      <div className="bg-bef-bg  lg:h-[685px] bg-no-repeat bg-cover bg-center text-center pt-32 pb-20 px-5 lg:px-72">
        <Text
          color="white"
          weight="bold"
          variant="h1"
          className="text-white mt-10"
          shadow="text"
        >
          Seminar Livestream
        </Text>
        <hr className="w-9/12 mx-auto h-0.5	 rounded bg-white my-5" />

        <Button isLink="/" className="mt-24">
          Tonton
        </Button>
      </div>
      <MedPart />
    </AnimateDiv>
  );
};

export default Live;
