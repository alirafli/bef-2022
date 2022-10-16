import React from "react";
import SEMINAR from "../../../assets/homepage/seminar.png";
import EXPO from "../../../assets/homepage/expo.png";
import COMPETITION from "../../../assets/homepage/competition.png";
import CATALOG from "../../../assets/homepage/catalog.png";
import MAP from "../../../assets/homepage/map.png";
import { MenuWidget } from "../../../components";
const sectionThree = ({ Text }) => {
  return (
    <div
      className="bg-whatsOn-bg h-fit lg:h-[800px] bg-contain bg-no-repeat lg:bg-cover lg:bg-center mb-8 px-3 place-content-center overflow-hidden"
      name="whatsOn"
    >
      <Text
        variant="h1"
        weight="bold"
        color="white"
        className="text-white mx-auto w-fit pt-20 sm:pt-32 md:pt-44 lg:pt-60"
      >
        What's On BEF 2022
      </Text>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-fit mx-auto mt-7">
        <MenuWidget
          text="Seminar"
          image={SEMINAR}
          alt="seminar"
          to="/seminar"
        />
        <MenuWidget text="Expo" image={EXPO} alt="expo" to="/expo" />
        <MenuWidget
          text="Competition"
          image={COMPETITION}
          alt="competition"
          to="/competition"
        />
        <MenuWidget text="Catalog" image={CATALOG} alt="catalog" />
        <MenuWidget
          text="MAP"
          image={MAP}
          alt="map"
          useATag="https://www.google.com/maps/place/Gedung+UKM+Universitas+Brawijaya/@-7.95151,112.61492,15z/data=!4m5!3m4!1s0x0:0x7f4cb40ed0065eca!8m2!3d-7.9520671!4d112.6163289?hl=id"
        />
      </div>
    </div>
  );
};

export default sectionThree;
