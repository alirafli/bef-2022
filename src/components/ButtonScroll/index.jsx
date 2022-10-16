import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-scroll";
import Text from "../Text";

const VARIANT = {
  primary: "bg-secondary text-white hover:bg-slate-700",
  secondary: "outline outline-2 text-primary hover:text-red-400",
};

const STYLE =
  "w-fit px-10 py-3 text-center rounded-full font-medium mx-2 my-3 transition";

const ButtonScroll = ({
  onClick,
  linkTo = "",
  type,
  className,
  variant = "primary",
  children = "See More",
}) => {
  return (
    <Link to={linkTo} smooth={true} duration={600}>
      <button
        className={classNames(STYLE, VARIANT[variant], className)}
        onClick={onClick}
        type={type}
      >
        <Text variant="p2" color="white" className="text-white">
          {children}
        </Text>
      </button>
    </Link>
  );
};

export default ButtonScroll;
