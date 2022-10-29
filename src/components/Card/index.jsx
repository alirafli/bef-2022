import React from "react";
import Text from "../Text";
import classNames from "classnames/bind";
import IMAGE from "../../assets/dummy_profile.png";

const FLIP = {
  normal: "lg:flex-row",
  flip: "lg:flex-row-reverse",
};

export const Card = ({
  image = IMAGE,
  name = "pembicara",
  title = "your title",
  description = "description",
  flip = "normal",
  position = "position",
  className,
}) => {
  return (
    <div
      className={classNames(
        "bg-secondary w-11/12 md:w-10/12 lg:w-8/12 py-11 px-5 md:px-14 my-8 rounded-2xl flex mx-auto flex-col items-center lg:items-start justify-center",
        FLIP[flip],
        className
      )}
    >
      <div
        className={classNames("text-center", name === "" ? "w-0" : "lg:w-6/12")}
      >
        <img
          src={image}
          alt="profile"
          className={classNames(
            name === ""
              ? "hidden"
              : "w-32 lg:w-36 h-32 lg:h-36 rounded-full object-cover mb-4 mx-auto"
          )}
        />
        <Text variant="p2" color="white" className="text-white break-words">
          {name}
        </Text>
        <Text
          variant="p2"
          color="white"
          className="text-white break-words mb-5"
        >
          {position}
        </Text>
      </div>
      <div
        classNames={classNames("mx-5", name === "" ? "w-full" : "lg:w-6/12")}
      >
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

export const MultiCard = ({
  data = [],
  image = IMAGE,
  title = "your title",
  description = "description",
  className,
}) => {
  return (
    <div
      className={classNames(
        "bg-secondary w-11/12 md:w-10/12 lg:w-8/12 py-11 px-5 md:px-10 my-8 rounded-2xl flex mx-auto flex-col-reverse items-center lg:items-start lg:flex-col-reverse justify-center",
        className
      )}
    >
      <div className="text-center  flex sm:flex-row flex-col w-full justify-center items-center sm:items-start">
        {data.map((data, key) => {
          return (
            <div className="mx-5 mt-10 sm:w-2/6" key={key}>
              <img
                src={data.image ? data.image : image}
                alt="profile"
                className="w-32 lg:w-36 h-32 lg:h-36 rounded-full object-cover mb-4 mx-auto"
              />
              <Text
                variant="p2"
                color="white"
                className="text-white break-words"
              >
                {data.name}
              </Text>
              <Text
                variant="p2"
                color="white"
                className="text-white break-words mb-5"
              >
                {data.position}
              </Text>
            </div>
          );
        })}
      </div>
      <div className="mx-auto">
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
