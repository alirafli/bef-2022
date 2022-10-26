import React from "react";
import { MedPart, Text, AnimateDiv, ButtonScroll } from "../../components";
import { motion } from "framer-motion";
import MASCOT from "../../assets/mascot3.png";
import MASCOT2 from "../../assets/mascot2.png";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <AnimateDiv className="pt-16 overflow-hidden">
      <Helmet>
        <title>BEF | About Us</title>
      </Helmet>
      <div className="bg-bef-bg h-[500px] sm:h-[450px]  lg:h-[685px] bg-no-repeat bg-cover bg-center text-center pt-32 pb-20 px-5 lg:px-72">
        <Text
          variant="h1"
          weight="bold"
          color="white"
          className="text-white"
          shadow="text"
        >
          Let's meet Bero, the mascot of BEF!
        </Text>
        <hr className="w-9/12 mx-auto h-0.5	 rounded bg-white my-5" />
        <ButtonScroll linkTo="bero">Tentang Bero</ButtonScroll>
        <div className="relative bg-black">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={MASCOT2}
            alt="mascot"
            className="absolute -left-24  sm:-left-20 -top-7 sm:-top-32 lg:top-14 scale-50 lg:scale-100"
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={MASCOT}
            alt="mascot"
            className="absolute -right-24 sm:-right-20 -top-7 sm:-top-32  lg:top-14 scale-50 lg:scale-100"
          />
        </div>
      </div>

      <div
        className="relative bg-secondary text-center py-20 px-5 md:px-52 mb-20 z-20"
        name="bero"
      >
        <Text
          variant="h1"
          weight="bold"
          color="white"
          className="text-white mb-10"
        >
          Tentang Bero
        </Text>
        <Text variant="p2" color="white" className="text-white">
          The name Bero refers to "Bro" which means Bero can be a close friends
          to all BEFties. Bero is a polar bear. Why bear? because in Bahasa
          Indonesia, bear means "Beruang". If it's read with different
          intonations "Beruang" has another meanings, which is "ber-uang" or
          having money, which is one of the goals in entrepreneurship. The polar
          bear itself describes the cold weather of Malang city.
        </Text>
      </div>
      <MedPart />
    </AnimateDiv>
  );
};

export default About;
