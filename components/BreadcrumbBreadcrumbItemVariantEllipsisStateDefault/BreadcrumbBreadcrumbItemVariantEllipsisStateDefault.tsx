import React from "react";
import "./BreadcrumbBreadcrumbItemVariantEllipsisStateDefault.css";
import { IconEllipsis } from "../IconEllipsis/IconEllipsis";

interface BreadcrumbBreadcrumbItemVariantEllipsisStateDefaultProps {
  breadcrumbText?: string;
  variant?: string;
  state?: string;
  className?: string;
}

export const BreadcrumbBreadcrumbItemVariantEllipsisStateDefault: React.FC<BreadcrumbBreadcrumbItemVariantEllipsisStateDefaultProps> = ({
  breadcrumbText = "Breadcrumb",
  variant = "dropdown",
  state = "default",
  className = "",
  ...props
}) => {
  const variantsClassName = "variant-" + variant + " state-" + state;

  return (
    <div
      className={
        "breadcrumb-breadcrumb-item-variant-ellipsis-state-default " +
        className +
        " " +
        variantsClassName
      }
      {...props}
    >
      <IconEllipsis className="icon-ellipsis-instance" />
    </div>
  );
};