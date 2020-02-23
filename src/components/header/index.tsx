import React from "react";
import styles from "./styles.scss";
import { mergeClasses } from "../../utils";
import { HeaderProps } from "../../interfaces";
import BoxShadow from "../_wrappers/boxShadow";

const Header = ({
  children: innerText,
  className,
  options = {}
}: HeaderProps) => {
  const { alignment = "center", platformType = "flat" } = options;

  return (
    <BoxShadow
      classOuter={options.wrapper}
      classInner={mergeClasses([styles[platformType], styles.inner])}
    >
      <div
        className={mergeClasses([
          "uk-heading-small",
          styles[alignment],
          className
        ])}
      >
        {innerText}
      </div>
    </BoxShadow>
  );
};

export default Header;
