import React from "react";
import { Text } from "../index";
import FACEBOOK from "../../assets/sosmed/facebook.svg";
import INSTAGRAM from "../../assets/sosmed/instagram.svg";
import TIKTOK from "../../assets/sosmed/tiktok.svg";
import TWITTER from "../../assets/sosmed/twitter.svg";

const Footer = () => {
  const data = [
    { image: INSTAGRAM, link: "https://www.instagram.com/bef2022_/" },
    {
      image: TIKTOK,
      link: "https://www.tiktok.com/@bef.2022?_t=8WYV2f3jf2v&_r=1",
    },
    {
      image: TWITTER,
      link: "https://twitter.com/bef2022official?s=21&t=XSVk36A8Dazq5gt0zjGnSQ",
    },
    {
      image: FACEBOOK,
      link: "https://www.facebook.com/brawijayaentrepreneurfest",
    },
  ];
  return (
    <div
      className="bg-secondary text-center py-12 px-5 z-10 relative"
      name="contact"
    >
      <Text
        variant="h1"
        color="white"
        weight="semiBold"
        className="text-white mb-10"
      >
        Let's Stay Connected With Us
      </Text>
      <div className="grid grid-cols-4 gap-x-5 scale-75 md:scale-100 md:gap-x-16 mx-auto w-fit">
        {data.map((e, key) => {
          return (
            <a href={e.link} target="_blank" rel="noreferrer" key={key}>
              <img src={e.image} alt="icon" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
