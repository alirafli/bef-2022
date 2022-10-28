import React, { useEffect } from "react";
import { Button, Text, AnimateDiv } from "../../components";
import IMAGE from "../../assets/not_found.svg";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);
  return (
    <AnimateDiv className="text-center">
      <Helmet>
        <title>BEF | Not Found</title>
      </Helmet>
      <img src={IMAGE} alt="404 not found" className="lg:w-5/12 mx-auto" />
      <Text variant="p2" className="lg:-mt-24">
        <a href="https://storyset.com/web">Web illustrations by Storyset</a>
      </Text>
      <Button isLink="/" className="mt-24">
        Kembali ke Halaman Utama
      </Button>
    </AnimateDiv>
  );
};

export default NotFound;
