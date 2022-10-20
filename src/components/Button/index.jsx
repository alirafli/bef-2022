import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Text from "../Text";

const VARIANT = {
  primary: "bg-secondary text-white hover:bg-slate-700",
  secondary: "outline outline-2 text-primary hover:text-red-400",
};

const STYLE =
  "w-fit px-10 py-3 text-center rounded-full font-medium mx-2 my-3 transition";

export const Button = ({
  isLink,
  onClick,
  type,
  className,
  disabled,
  variant = "primary",
  children = "See More",
}) => {
  if (isLink) {
    return (
      <Link to={isLink}>
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
  }

  if (disabled) {
    return (
      <button
        className={classNames(STYLE, "bg-secondary/70", className)}
        onClick={onClick}
        type={type}
        disabled
      >
        <Text variant="p2" color="white" className="text-white">
          {children}
        </Text>
      </button>
    );
  }

  return (
    <button
      className={classNames(STYLE, VARIANT[variant], className)}
      onClick={onClick}
      type={type}
    >
      <Text variant="p2" color="white" className="text-white">
        {children}
      </Text>
    </button>
  );
};

export const ButtonScroll = ({
  onClick,
  linkTo = "",
  type,
  className,
  variant = "primary",
  children = "See More",
}) => {
  return (
    <LinkScroll to={linkTo} smooth={true} duration={600}>
      <button
        className={classNames(STYLE, VARIANT[variant], className)}
        onClick={onClick}
        type={type}
      >
        <Text variant="p2" color="white" className="text-white">
          {children}
        </Text>
      </button>
    </LinkScroll>
  );
};

export const HrefButton = ({
  href,
  onClick,
  type,
  className,
  variant = "primary",
  children = "See More",
}) => {
  return (
    <a href={href}>
      <button
        className={classNames(STYLE, VARIANT[variant], className)}
        onClick={onClick}
        type={type}
      >
        <Text variant="p2" color="white" className="text-white">
          {children}
        </Text>
      </button>
    </a>
  );
};
