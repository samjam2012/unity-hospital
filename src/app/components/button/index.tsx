import React from "react";
import styles from "./styles.scss";
import { mergeClasses } from "../../utils";
import { ButtonProps } from "../../../interfaces/app/component";
import { Link } from "@reach/router";

const Button = ({ text, className, onClick, to = "" }: ButtonProps) => {
  return (
    <Link
      onClick={() => {
        if (onClick) onClick();
      }}
      to={to}
      className={mergeClasses([styles.button, className])}
    >
      {text}
    </Link>
  );
};

export default Button;
