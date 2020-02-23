import React from "react";
import styles from "./styles.scss";
import { mergeClasses } from "../../utils";
import { DefaultProps } from "../../interfaces";
import BoxShadow from "../boxShadow";

const Header = ({
  children: innerText,
  className,
  options = {}
}: DefaultProps) => {
  const { alignment = "center", platformType = "flat" } = options;
  return (
    <BoxShadow classOuter={styles.wrapper} classInner={styles.inner}>
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
