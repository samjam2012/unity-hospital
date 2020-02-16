import React from "react";
import styles from "./styles.scss";
import { BoxShadowProps } from "../../../interfaces";

const BoxShadow = ({
  children,
  options = { direction: "bottom" }
}: BoxShadowProps) => {
  const { direction } = options;
  return (
    <div className={styles[direction]}>
      <div>{children}</div>
    </div>
  );
};

export default BoxShadow;
