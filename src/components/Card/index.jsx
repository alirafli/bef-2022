import React from "react";
import Text from "../Text";
import classNames from "classnames/bind";
import IMAGE from "../../assets/dummy_profile.png";

const FLIP = {
  normal: "lg:flex-row",
  flip: "lg:flex-row-reverse",
};

const Card = ({
  image = IMAGE,
  name = "pembicara",
  title = "your title",
  description = "description",
  flip = "normal",
  className,
}) => {
  return (
    <div
      className={classNames(
        "bg-secondary w-11/12 md:w-10/12 lg:w-8/12 py-11 px-5 md:px-14 my-8 rounded-2xl flex mx-auto flex-col items-center lg:items-start",
        FLIP[flip],
        className
      )}
    >
      <div className="text-center lg:w-1/5">
        <img
          src={image}
          alt="profile"
          className="w-32 lg:w-36 h-32 lg:h-36 rounded-full object-cover mb-4 mx-auto"
        />
        <Text
          variant="p2"
          color="white"
          className="text-white break-words mb-5"
        >
          {name}
        </Text>
      </div>
      <div className="mx-5 lg:w-4/5">
        <Text
          variant="p1"
          weight="semiBold"
          color="white"
          className="text-white bg-[#393481] text-center px-5 py-3 rounded-xl mb-5"
        >
          {title}
        </Text>
        <Text variant="p2" color="white" className="text-white text-justify">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default Card;
