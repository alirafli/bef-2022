import React from "react";
import { MedPart, Text, Button } from "../../components";
import { Helmet } from "react-helmet-async";

const ComingSoon = () => {
  return (
    <div>
      <Helmet>
        <title>BEF | Coming Soon</title>
      </Helmet>
      <div className="bg-bef-bg  lg:h-[685px] bg-no-repeat bg-cover bg-center text-center pt-32 pb-20 px-5 lg:px-72">
        <Text
          color="white"
          weight="bold"
          variant="h1"
          className="text-white mt-10"
        >
          Coming Soon!
        </Text>
          <Button isLink="/" className="mt-24">Kembali ke Halaman Utama</Button>
      </div>
      <MedPart />
    </div>
  );
};

export default ComingSoon;
