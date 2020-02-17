import React from "react";
import styles from "./styles.scss";
import { mergeClasses } from "../../utils";
import { ButtonProps } from "../../interfaces";
import { Link } from "@reach/router";

const Button = ({
  to = "",
  options = { size: "medium" },
  className,
  children: buttonText
}: ButtonProps) => {
  const { size } = options;

  return (
    <Link to={to} className={mergeClasses([styles[size], className])}>
      {buttonText}
    </Link>
  );
};

export default Button;
