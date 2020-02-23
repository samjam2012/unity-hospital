import React from "react";
import styles from "./styles.scss";
import { BoxShadowProps } from "../../interfaces";
import { mergeClasses } from "../../utils";

const BoxShadow = ({
  children,
  options = { direction: "bottom" },
  classOuter,
  classInner
}: BoxShadowProps) => {
  const { direction } = options;

  return (
    <div className={mergeClasses([classOuter, styles[direction]])}>
      <div className={classInner}>{children}</div>
    </div>
  );
};

export default BoxShadow;
