import React from "react";
import { Text } from "../index";
import FACEBOOK from "../../assets/sosmed/facebook.svg";
import INSTAGRAM from "../../assets/sosmed/instagram.svg";
import TIKTOK from "../../assets/sosmed/tiktok.svg";
import TWITTER from "../../assets/sosmed/twitter.svg";

const Footer = () => {
  const data = [
    { image: INSTAGRAM, link: "https://www.instagram.com/" },
    { image: TIKTOK, link: "https://www.tiktok.com/" },
    { image: TWITTER, link: "https://www.twitter.com/" },
    { image: FACEBOOK, link: "https://www.facebook.com/" },
  ];
  return (
    <div className="bg-secondary text-center py-12 px-5">
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
            <a href={e.link} target="_blank" key={key}>
              <img src={e.image} alt={e.image.toString} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
