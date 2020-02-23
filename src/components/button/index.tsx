import React from "react";
import styles from "./styles.scss";
import { mergeClasses } from "../../utils";
import { ButtonProps } from "../../interfaces";
import { Link } from "@reach/router";

const Button = ({
  children: buttonText,
  className,
  onClick,
  options = {},
  to = ""
}: ButtonProps) => {
  const { size = "medium" } = options;

  return (
    <Link
      onClick={() => {
        if (onClick) onClick();
      }}
      to={to}
      className={mergeClasses([styles[size], className])}
    >
      {buttonText}
    </Link>
  );
};

export default Button;
