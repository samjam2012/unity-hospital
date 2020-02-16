import React from "react";
import styles from "./styles.scss";
import { mergeClasses } from "../../utils";
import Processor from "../processor";
import { DefaultProps } from "../interfaces";

const Header = ({ wrapper, className, children: innerText }: DefaultProps) => {
  return (
    <Processor
      wrapper={wrapper}
      className={mergeClasses(["uk-heading-small", styles.header, className])}
    >
      {innerText}
    </Processor>
  );
};

export default Header;
