import React from "react";
import "./IconCheck.css";

interface IconCheckProps {
  className?: string;
}

export const IconCheck: React.FC<IconCheckProps> = ({ className = "", ...props }) => {
  return <img className={"icon-check " + className} src="icon-check.svg" alt="Check" {...props} />;
};