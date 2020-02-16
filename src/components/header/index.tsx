import React from "react";
import styles from "./styles.scss";
import { mergeClasses } from "../../utils";
import { DefaultProps } from "../../interfaces";

const Header = ({
  children: innerText,
  className,
  options = {}
}: DefaultProps) => {
  const { align = "center", platformType = "flat" } = options;
  return (
    <div
      className={mergeClasses([
        "uk-heading-small",
        styles[align],
        styles[platformType],
        className
      ])}
    >
      {innerText}
    </div>
  );
};

export default Header;
