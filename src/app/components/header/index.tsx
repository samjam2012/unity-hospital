import React from "react";
import styles from "./styles.scss";
import { mergeClasses } from "../../utils";
import { HeaderProps as Props } from "../../../interfaces/app/components";
import BoxShadow from "../_wrappers/boxShadow";

const Header = ({ children: innerText, className, options = {} }: Props) => {
  const { alignment = "center", platformType = "flat" } = options;

  return (
    <BoxShadow
      options={{ shadowDirection: "bottom" }}
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
