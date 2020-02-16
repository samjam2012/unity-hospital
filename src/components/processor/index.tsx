import React from "react";

const Processor = ({ wrapper = "", className, children }) => {
  // const wrapHash = {
  //   "box-shadow": <BoxShadow className={className}>{children}</BoxShadow>
  // };

  // if (wrapper in wrapHash) return wrapHash[wrapper];

  return <div className={className}>{children}</div>;
};

export default Processor;
