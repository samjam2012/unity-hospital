import React from "react";
import { mergeClasses } from "../../../utils";
import styles from "./styles.scss";

const BoxShadow = ({
  className,
  children
}: {
  className?: string;
  children: any;
}) => {
  return (
    <div className={styles.container}>
      <div className={mergeClasses([styles.children, className])}>
        {children}
      </div>
    </div>
  );
};

export default BoxShadow;
