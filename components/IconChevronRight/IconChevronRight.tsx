import React from "react";
import "./IconChevronRight.css";

interface IconChevronRightProps {
  className?: string;
}

export const IconChevronRight: React.FC<IconChevronRightProps> = ({ className = "", ...props }) => {
  return (
    <img
      className={"icon-chevron-right " + className}
      src="icon-chevron-right.svg"
      alt="Chevron right"
      {...props}
    />
  );
};