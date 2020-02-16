import React from "react";
import { SizeProps } from "../../interfaces";
import BoxShadow from "../processor/boxShadow";

const Section = ({
  children,
  className,
  options = { size: "medium" }
}: SizeProps) => {
  return (
    <BoxShadow options={{ ...options, direction: "left-right" }}>
      {children}
    </BoxShadow>
  );
};

export default Section;
