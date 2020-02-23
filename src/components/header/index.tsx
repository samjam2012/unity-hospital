import React from "react";
import styles from "./styles.scss";
import { mergeClasses } from "../../utils";
import { DefaultProps } from "../../interfaces";
import BoxShadow from "../processor/boxShadow";

const Header = ({
  children: innerText,
  className,
  options = {}
}: DefaultProps) => {
  const { alignment = "center", platformType = "flat" } = options;
  return (
    <BoxShadow>
      <div
        className={mergeClasses([
          "uk-heading-small",
          styles[alignment],
          styles[platformType],
          className
        ])}
      >
        {innerText}
      </div>
    </BoxShadow>
  );
};

export default Header;
