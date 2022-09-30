import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";
import Text from "../Text";

const MenuWidget = ({ to, image, text, alt }) => {
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
};

export default MenuWidget;
