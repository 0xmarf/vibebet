import React from "react";
import "./IconChevronRight2.css";

interface IconChevronRight2Props {
  className?: string;
}

export const IconChevronRight2: React.FC<IconChevronRight2Props> = ({ className = "", ...props }) => {
  return (
    <img
      className={"icon-chevron-right-2 " + className}
      src="icon-chevron-right-2.svg"
      alt="Chevron right"
      {...props}
    />
  );
};