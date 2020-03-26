import React from "react";
import { SectionProps as Props } from "../../../interfaces/app/components";
import BoxShadow from "../_wrappers/boxShadow";
import styles from "./styles.scss";

const Section = ({ children, options = {} }: Props) => {
  const { shadowDirection = "left-right", size = "full" } = options;
  return (
    <BoxShadow classOuter={styles[size]} options={{ shadowDirection }}>
      {children}
    </BoxShadow>
  );
};

export default Section;
