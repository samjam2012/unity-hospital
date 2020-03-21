import React from "react";
import styles from "./styles.scss";
import { BoxShadowProps } from "../../../../interfaces";
import { mergeClasses } from "../../../utils";

const BoxShadow = ({
  children,
  options = {},
  classOuter,
  classInner
}: BoxShadowProps) => {
  const { direction = "bottom" } = options;

  return (
    <div className={mergeClasses([classOuter, styles[direction]])}>
      <div className={classInner}>{children}</div>
    </div>
  );
};

export default BoxShadow;
