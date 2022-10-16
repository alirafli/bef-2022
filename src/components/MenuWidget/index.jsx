import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";
import Text from "../Text";

const MenuWidget = ({ to = "/coming-soon", image, text, alt, useATag }) => {
  if (!useATag) {
    return (
      <Tilt
        options={{ max: 30, scale: 1 }}
        className="bg-secondary rounded-3xl text-center p-7"
      >
        <Link to={to}>
          <Text
            variant="p1"
            weight="semiBold"
            color="white"
            className="text-white mb-2"
          >
            {text}
          </Text>
          <img src={image} alt={alt} className="mx-auto w-2/3 md:w-fit" />
        </Link>
      </Tilt>
    );
  } else {
    return (
      <Tilt
        options={{ max: 30, scale: 1 }}
        className="bg-secondary rounded-3xl text-center p-7"
      >
        <a href={useATag}>
          <Text
            variant="p1"
            weight="semiBold"
            color="white"
            className="text-white mb-2"
          >
            {text}
          </Text>
          <img src={image} alt={alt} className="mx-auto w-2/3 md:w-fit" />
        </a>
      </Tilt>
    );
  }
};

export default MenuWidget;
