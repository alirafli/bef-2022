import React from "react";
import Footer from "../Footer";
import MOUNTAIN from "../../assets/homepage/mountain.png";
import OBJECT1 from "../../assets/medPart/object1.png";
import OBJECT4 from "../../assets/medPart/object4.png";
import OBJECT5 from "../../assets/medPart/object5.png";
import { mediaPartner, sponsor } from "./data";
import classNames from "classnames";
import Text from "../Text";

const MedPart = ({ content }) => {
  return (
    <div className="relative bg-gradient-to-b from-transparent to-[#AE92F6] overflow-hidden">
      <div className="mb-96">{content}</div>
      <img
        src={OBJECT1}
        alt="object1"
        className="absolute z-10 bottom-[40rem] lg:bottom-[50rem] -right-32 sm:-right-72 scale-75"
      />
      <img
        src={OBJECT5}
        alt="object2"
        className="absolute z-10 bottom-[25rem] lg:bottom-[43rem] -left-32 sm:-left-20 scale-75 lg:scale-100"
      />
      <img
        src={OBJECT4}
        alt="object3"
        className="absolute z-10 bottom-[57rem] lg:bottom-[70rem] sm:right-96 scale-75 lg:scale-100"
      />
      <div className="relative bg-secondary bg-opacity-75  w-10/12 mx-auto rounded-3xl p-9 md:p-14 z-20 mb-20">
        <Text
          className="mx-auto w-fit text-white mb-8"
          color="white"
          variant="h2"
          weight="semiBold"
        >
          Sponsor
        </Text>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 sm:gap-7 ">
          {sponsor.map((data, i) => {
            return (
              <img
                src={data.image}
                alt={data.alt}
                className={classNames("m-auto", data.className)}
                key={i}
              />
            );
          })}
        </div>
      </div>
      <div className="relative bg-secondary bg-opacity-75  w-10/12 mx-auto rounded-3xl p-9 md:p-14 z-20">
        <Text
          className="mx-auto w-fit text-white mb-8"
          color="white"
          variant="h2"
          weight="semiBold"
        >
          Media Partner
        </Text>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-7 ">
          {mediaPartner.map((data, i) => {
            return (
              <img
                src={data.image}
                alt={data.alt}
                className={classNames("m-auto", data.className)}
                key={i}
              />
            );
          })}
        </div>
      </div>
      <img
        src={MOUNTAIN}
        alt="mountain"
        className="relative w-screen md:-mt-60 z-10"
      />
      <Footer />
    </div>
  );
};

export default MedPart;
