import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Text from "../Text";

const VARIANT = {
  primary: "bg-secondary text-white hover:bg-slate-700",
  secondary: "outline outline-2 text-primary hover:text-red-400",
};

const STYLE =
  "w-fit px-10 py-3 text-center rounded-full font-medium mx-2 my-3 transition";

const Button = ({
  isLink,
  onClick,
  type,
  className,
  variant = "primary",
  children = "See More",
}) => {
  if (isLink) {
    return (
      <Link
        to={isLink}
        className={classNames(className, STYLE, VARIANT[variant])}
        onClick={onClick}
        type={type}
      >
        <Text variant="p2" color="white">
          {children}
        </Text>
      </Link>
    );
  }

  return (
    <button
      className={classNames(STYLE, VARIANT[variant])}
      onClick={onClick}
      type={type}
    >
      <Text variant="p2" color="white">
        {children}
      </Text>
    </button>
  );
};

export default Button;
