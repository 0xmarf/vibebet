import React from "react";
import "./IconCheck2.css";

interface IconCheck2Props {
  className?: string;
}

export const IconCheck2: React.FC<IconCheck2Props> = ({ className = "", ...props }) => {
  return <img className={"icon-check-2 " + className} src="icon-check-2.svg" alt="Check" {...props} />;
};