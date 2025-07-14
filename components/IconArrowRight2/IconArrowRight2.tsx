import React from "react";
import "./IconArrowRight2.css";

interface IconArrowRight2Props {
  className?: string;
}

export const IconArrowRight2: React.FC<IconArrowRight2Props> = ({ className = "", ...props }) => {
  return (
    <img
      className={"icon-arrow-right-2 " + className}
      src="icon-arrow-right-2.svg"
      alt="Arrow right"
      {...props}
    />
  );
};