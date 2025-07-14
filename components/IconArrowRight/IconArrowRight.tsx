import React from "react";
import "./IconArrowRight.css";

interface IconArrowRightProps {
  className?: string;
}

export const IconArrowRight: React.FC<IconArrowRightProps> = ({ className = "", ...props }) => {
  return (
    <img
      className={"icon-arrow-right " + className}
      src="icon-arrow-right.svg"
      alt="Arrow right"
      {...props}
    />
  );
};