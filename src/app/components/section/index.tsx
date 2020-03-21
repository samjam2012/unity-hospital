import React from "react";
import { SizeProps } from "../../../interfaces";
import BoxShadow from "../_wrappers/boxShadow";
import styles from "./styles.scss";

const Section = ({ children, options = {} }: SizeProps) => {
  const { size = "medium" } = options;
  return (
    <BoxShadow classOuter={styles[size]} options={{ direction: "left-right" }}>
      {children}
    </BoxShadow>
  );
};

export default Section;
