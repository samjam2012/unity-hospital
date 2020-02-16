import React from "react";
import BoxShadow from "../boxShadow";
import { DefaultProps } from "../interfaces";

const Processor = ({ wrapper = "", className, children }: DefaultProps) => {
  const wrapHash = {
    "box-shadow": <BoxShadow className={className}>{children}</BoxShadow>
  };

  if (wrapper in wrapHash) return wrapHash[wrapper];

  return <div className={className}>{children}</div>;
};

export default Processor;
