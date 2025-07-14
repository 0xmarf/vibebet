import React from "react";
import "./IconEllipsis.css";

interface IconEllipsisProps {
  className?: string;
}

export const IconEllipsis: React.FC<IconEllipsisProps> = ({ className = "", ...props }) => {
  return (
    <img className={"icon-ellipsis " + className} src="icon-ellipsis.svg" alt="Ellipsis" {...props} />
  );
};