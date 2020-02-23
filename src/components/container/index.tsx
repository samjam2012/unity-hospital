import React from "react";
import { DefaultProps } from "../../interfaces";
// import styles from "./styles.scss";
const Container = ({ children, options = {} }: DefaultProps) => {
  const { margin = "", padding = "", width = "" } = options;
  return (
    <div style={{ margin, padding, width }} className="uk-container">
      {children}
    </div>
  );
};

export default Container;
