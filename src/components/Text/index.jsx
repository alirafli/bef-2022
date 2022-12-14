import React from "react";
import classNames from "classnames/bind";

const VARIANT = {
  h1: "text-3xl md:text-4xl lg:text-5xl",
  h2: "text-xl md:text-2xl lg:text-3xl",
  p1: "text-base md:text-xl lg:text-2xl",
  p2: "text-sm md:text-base lg:text-xl",
};

const SHADOW = {
  none: "drop-shadow-none",
  text: "drop-shadow-text",
};
const WEIGHT = {
  bold: "font-bold",
  semiBold: "font-semibold",
  normal: "font-normal",
  light: "font-light",
};

const COLOR = {
  black: "md:text-secondary",
  white: "md:text-white",
};
const Text = ({
  color = "black",
  variant = "p1",
  weight = "normal",
  shadow = "none",
  className,
  children,
}) => {
  return (
    <p
      className={classNames(
        className,
        VARIANT[variant],
        WEIGHT[weight],
        COLOR[color],
        SHADOW[shadow]
      )}
    >
      {children}
    </p>
  );
};

export default Text;
