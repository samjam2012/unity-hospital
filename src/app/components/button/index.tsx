import React from "react";
import styles from "./styles.scss";
import { mergeClasses } from "../../utils";
import { ButtonProps } from "../../../interfaces/app/component";
import { Link } from "@reach/router";

const Button = ({ text, className, onClick, to = "" }: ButtonProps) => {
  const classes = mergeClasses([styles.button, className]);
  return to ? (
    <Link
      onClick={() => {
        if (onClick) onClick();
      }}
      to={to}
      className={classes}
    >
      {text}
    </Link>
  ) : (
    <button
      onClick={() => {
        if (onClick) onClick();
      }}
      className={classes}
      type="submit"
    >
      {text}
    </button>
  );
};

export default Button;
