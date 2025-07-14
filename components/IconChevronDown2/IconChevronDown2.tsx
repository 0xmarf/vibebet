import React from "react";
import "./IconChevronDown2.css";

interface IconChevronDown2Props {
  className?: string;
}

export const IconChevronDown2: React.FC<IconChevronDown2Props> = ({ className = "", ...props }) => {
  return (
    <img
      className={"icon-chevron-down-2 " + className}
      src="icon-chevron-down-2.svg"
      alt="Chevron down"
      {...props}
    />
  );
};