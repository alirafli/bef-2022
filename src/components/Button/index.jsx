import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const VARIANT = {
  primary: "bg-secondary text-white hover:bg-slate-700",
  secondary: "outline outline-2 text-primary hover:text-red-400",
};

const STYLE =
  "w-fit px-7 py-3 text-center rounded-3xl font-medium mx-2 my-3 transition";

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
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classNames(STYLE, VARIANT[variant])}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
