import React, { useEffect } from "react";
import { MedPart, Text, Button, AnimateDiv } from "../../components";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2500);
  }, [navigate]);
  return (
    <AnimateDiv>
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
          Coming Soon!
        </Text>
        <Button isLink="/" className="mt-24">
          Kembali ke Halaman Utama
        </Button>
      </div>
      <MedPart />
    </AnimateDiv>
  );
};

export default ComingSoon;
