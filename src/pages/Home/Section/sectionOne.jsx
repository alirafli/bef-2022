import React from "react";
import { motion } from "framer-motion";
import { ButtonScroll } from "../../../components";
const sectionOne = ({ MASCOT, Text }) => {
  return (
    <div className="flex flex-col md:flex-row bg-bef-down md:h-30rem lg:h-[685px] bg-contain bg-no-repeat lg:bg-cover lg:bg-center mb-8">
      <div className="pt-10 md:pt-0 w-36 md:w-1/4 md:mt-20 mx-auto lg:mt-24">
        <motion.img whileHover={{ scale: 1.1 }} src={MASCOT} alt="mascot" />
      </div>
      <div className="p-5 md:p0 text-center md:text-left md:w-3/4 h-fit md:mt-12 lg:mt-32">
        <Text
          variant="h1"
          weight="bold"
          color="white"
          className="text-secondary"
          shadow="text"
        >
          Brawijaya Entrepreneur Festival 2022
        </Text>
        <Text
          variant="p2"
          color="white"
          weight="light"
          className="mx-auto md:mx-0 text-justify w-4/5 md:w-11/12 lg:w-4/5"
        >
          Brawijaya Entrepreneur Festival is an annual entrepreneurship event
          held by Mahasiswa Wirausaha Brawijaya University. This event aims to
          provide knowledge and experience in cultivating an entrepreneurial
          spirit, raise the spirit of the younger generation in doing business,
          and actualize the slogan of Brawijaya University, namely World Class
          Entrepreneurial University.
        </Text>
        <ButtonScroll linkTo="whatsOn" />
      </div>
    </div>
  );
};

export default sectionOne;
