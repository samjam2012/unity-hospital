import React from "react";
import styles from "./styles.scss";
import { BoxShadowProps as Props } from "../../../../interfaces/app/components";
import { mergeClasses } from "../../../utils";

const BoxShadow = ({
  children,
  options: { shadowDirection },
  classOuter,
  classInner
}: Props) => {
  return (
    <div className={mergeClasses([classOuter, styles[shadowDirection || ""]])}>
      <div className={classInner}>{children}</div>
    </div>
  );
};

export default BoxShadow;
