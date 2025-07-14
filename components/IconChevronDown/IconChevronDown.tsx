import React from "react";
import "./IconChevronDown.css";

interface IconChevronDownProps {
  className?: string;
}

export const IconChevronDown: React.FC<IconChevronDownProps> = ({ className = "", ...props }) => {
  return (
    <img
      className={"icon-chevron-down " + className}
      src="icon-chevron-down.svg"
      alt="Chevron down"
      {...props}
    />
  );
};