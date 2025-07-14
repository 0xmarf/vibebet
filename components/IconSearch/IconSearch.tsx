import React from "react";
import "./IconSearch.css";

interface IconSearchProps {
  className?: string;
}

export const IconSearch: React.FC<IconSearchProps> = ({ className = "", ...props }) => {
  return <img className={"icon-search " + className} src="icon-search.svg" alt="Search" {...props} />;
};