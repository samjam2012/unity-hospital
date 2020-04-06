import React from "react";
import { DefaultProps } from "../../../interfaces";
import styles from "./styles.scss";

const Content = ({ children }: any) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
