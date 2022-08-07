import React from "react";

const BasicBlock = ({ children, width, className }) => {
  return (
    <div
      className={`bg-neutral p-6 rounded-xl inline-block w-${width} ${className} `}
    >
      {children}
    </div>
  );
};

export default BasicBlock;
