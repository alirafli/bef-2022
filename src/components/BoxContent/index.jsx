import classNames from "classnames";
import React from "react";
import Text from "../Text";
import LOGO from "../../assets/logo/logo-bef.svg";

const BoxContent = ({ data = [], title = "your title", logo, className }) => {
  return (
    <>
      <div
        className={classNames(
          "bg-gradient-to-r from-[#E69F55] via-[#5A4475] to-[#60ACCD] w-fit px-5 py-3 rounded-lg mx-auto -mb-7 relative z-10 text-center",
          className
        )}
      >
        <Text
          variant="h1"
          weight="semiBold"
          color="white"
          className="text-white"
          shadow="text"
        >
          {title}
        </Text>
      </div>
      <div className="bg-secondary mx-auto w-11/12 sm:w-10/12 md:w-8/12 rounded-3xl px-5 md:px-10 lg:px-24 py-10">
        {logo ? <img src={LOGO} alt="logo" className="mx-auto scale-110 my-5" /> : ""}
        {data.map((data, key) => {
          return (
            <div
              className={classNames(
                "rounded-2xl px-10 py-5 w-full my-9",
                data.background ? `bg-[#${data.background}]` : "bg-[#393481]"
              )}
              key={key}
            >
              <Text
                color={`${data.text ? "black" : "white"}`}
                className={classNames(
                  "text-justify",
                  `${data.text ? "" : "text-white "}`
                )}
              >
                {data.content}
              </Text>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BoxContent;
