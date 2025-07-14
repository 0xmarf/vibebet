import React from "react";
import "./ButtonVariantGhostStateDefaultSizeIcon.css";
import { IconCircle } from "../IconCircle/IconCircle";

interface ButtonVariantGhostStateDefaultSizeIconProps {
  buttonText?: string;
  showLeftIcon?: boolean;
  leftIcon?: React.ReactNode;
  showRightIcon?: boolean;
  rightIcon?: React.ReactNode;
  variant?: string;
  state?: string;
  size?: string;
  className?: string;
}

export const ButtonVariantGhostStateDefaultSizeIcon: React.FC<ButtonVariantGhostStateDefaultSizeIconProps> = ({
  buttonText = "Button",
  showLeftIcon = false,
  leftIcon = <IconCircle className="icon-circle-instance" />,
  showRightIcon = false,
  rightIcon = <IconCircle className="icon-circle-instance2" />,
  variant = "default",
  state = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const variantsClassName =
    "variant-" + variant + " state-" + state + " size-" + size;

  return (
    <div
      className={
        "button-variant-ghost-state-default-size-icon " +
        className +
        " " +
        variantsClassName
      }
      {...props}
    >
      {leftIcon}
    </div>
  );
};