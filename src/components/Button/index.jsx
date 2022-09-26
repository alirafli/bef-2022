import React from "react";
import classNames from "classnames/bind";

const VARIANT = {
  primary: "bg-secondary text-white ",
  secondary: "  text-primary",
};

const Button = ({ variant = "primary", children = "See More" }) => {
  return (
    <div
      className={classNames(
        "w-fit px-7 py-3 text-center outline outline-2 rounded-3xl font-medium mx-2 my-3",
        VARIANT[variant]
      )}
    >
      {children}
    </div>
  );
};

export default Button;
