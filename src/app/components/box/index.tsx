import React from "react";
import { DefaultProps } from "../../../interfaces";
import styles from "./styles.scss";

const Box = ({ children }: any) => {
  return <div className={styles.container}>{children}</div>;
};

export default Box;
