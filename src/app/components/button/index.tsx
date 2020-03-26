import React from "react";
import styles from "./styles.scss";
import { mergeClasses } from "../../utils";
import { ButtonProps as Props } from "../../../interfaces/app/components";
import { Link } from "@reach/router";

const Button = ({
  children: buttonText,
  className,
  onClick,
  options = {},
  to = ""
}: Props) => {
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
