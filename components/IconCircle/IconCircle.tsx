import React from "react";
import "./IconCircle.css";

interface IconCircleProps {
  className?: string;
}

export const IconCircle: React.FC<IconCircleProps> = ({ className = "", ...props }) => {
  return <img className={"icon-circle " + className} src="icon-circle.svg" alt="Circle" {...props} />;
};