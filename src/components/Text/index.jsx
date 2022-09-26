import React from "react";
import classNames from "classnames/bind";

const VARIANT = {
  h1: "text-5xl",
  h2: "text-3xl",
  p1: "text-2xl",
  p2: "text-xl",
};

const WEIGHT = {
  bold: "font-bold",
  semiBold: "font-semibold",
  normal: "font-normal",
};

const COLOR = {
  black: "text-secondary",
  white: "text-white",
};
const Text = ({
  color = "black",
  variant = "p1",
  weight = "normal",
  className,
  children,
}) => {
  return (
    <p
      className={classNames(
        className,
        VARIANT[variant],
        WEIGHT[weight],
        COLOR[color]
      )}
    >
      {children}
    </p>
  );
};

export default Text;
