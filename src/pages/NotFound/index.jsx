import React from "react";
import { Button, Text, AnimateDiv } from "../../components";
import IMAGE from "../../assets/not_found.svg";

const NotFound = () => {
  return (
    <AnimateDiv className="text-center">
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
