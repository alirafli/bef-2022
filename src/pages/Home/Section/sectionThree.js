import React from "react";
import Tilt from "react-tilt";
import SEMINAR from "../../../assets/homepage/seminar.png";
import EXPO from "../../../assets/homepage/expo.png";
import COMPETITION from "../../../assets/homepage/competition.png";
import CATALOG from "../../../assets/homepage/catalog.png";
import MAP from "../../../assets/homepage/map.png";

const sectionThree = ({ Text }) => {
  return (
    <div className="bg-whatsOn-bg h-[800px] bg-contain bg-no-repeat lg:bg-cover lg:bg-center mb-8 px-3">
      <Text
        variant="h1"
        weight="bold"
        color="white"
        className="text-white mx-auto w-fit pt-20 sm:pt-32 md:pt-44 lg:pt-60"
      >
        What’s On BEF 2022
      </Text>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-fit mx-auto mt-7">
        <Tilt
          options={{ max: 30, scale: 1 }}
          className="bg-secondary rounded-3xl text-center p-7"
        >
          <Text
            variant="p1"
            weight="semiBold"
            color="white"
            className="text-white mb-2"
          >
            Seminar
          </Text>
          <img src={SEMINAR} alt="seminar" className="mx-auto w-2/3 md:w-fit" />
        </Tilt>
        <Tilt
          options={{ max: 30, scale: 1 }}
          className="bg-secondary rounded-3xl text-center p-7 "
        >
          <Text
            variant="p1"
            weight="semiBold"
            color="white"
            className="text-white"
          >
            Expo
          </Text>
          <img src={EXPO} alt="expo" className="mx-auto w-2/3 md:w-fit" />
        </Tilt>
        <Tilt
          options={{ max: 30, scale: 1 }}
          className="bg-secondary rounded-3xl text-center p-7"
        >
          <Text
            variant="p1"
            weight="semiBold"
            color="white"
            className="text-white mb-1"
          >
            Competition
          </Text>
          <img
            src={COMPETITION}
            alt="competition"
            className="mx-auto w-2/3 md:w-fit"
          />
        </Tilt>
        <Tilt
          options={{ max: 30, scale: 1 }}
          className="bg-secondary rounded-3xl text-center p-7"
        >
          <Text
            variant="p1"
            weight="semiBold"
            color="white"
            className="text-white mb-1"
          >
            Catalog
          </Text>
          <img src={CATALOG} alt="catalog" className="mx-auto  my-auto" />
        </Tilt>
        <Tilt
          options={{ max: 30, scale: 1 }}
          className="bg-secondary rounded-3xl text-center p-7"
        >
          <Text
            variant="p1"
            weight="semiBold"
            color="white"
            className="text-white mb-3"
          >
            MAP
          </Text>
          <img src={MAP} alt="map" className="mx-auto  my-auto" />
        </Tilt>
      </div>
    </div>
  );
};

export default sectionThree;
