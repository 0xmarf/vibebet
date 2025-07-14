import React from "react";
import "./AvatarTypeImageSize12.css";

interface AvatarTypeImageSize12Props {
  fallbackText?: string;
  type?: string;
  size?: string;
  className?: string;
  src?: string;
  alt?: string;
}

export const AvatarTypeImageSize12: React.FC<AvatarTypeImageSize12Props> = ({
  fallbackText = "CN",
  type = "image",
  size = "12",
  className = "",
  src = "avatar-type-image-size-12.png",
  alt = "Avatar",
  ...props
}) => {
  const variantsClassName = "type-" + type + " size-" + size;

  return (
    <img
      className={
        "avatar-type-image-size-12 " + className + " " + variantsClassName
      }
      src={src}
      alt={alt}
      {...props}
    />
  );
};