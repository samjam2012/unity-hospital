import React from "react";
import styles from "./styles.scss";
import { ButtonProps as Props } from "../../../interfaces/app/components";
import { Link } from "@reach/router";

const Row = ({ children }: Props) => {
  return <div className={styles.row}>{children}</div>;
};

export default Row;
