import React from "react";
import { SizeProps } from "../../interfaces";
import BoxShadow from "../boxShadow";
import styles from "./styles.scss";

const Section = ({ children, options = { size: "medium" } }: SizeProps) => {
  const { size } = options;
  return (
    <BoxShadow classOuter={styles[size]} options={{ direction: "left-right" }}>
      {children}
    </BoxShadow>
  );
};

export default Section;
