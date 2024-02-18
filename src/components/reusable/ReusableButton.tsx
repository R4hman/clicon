import React, { CSSProperties } from "react";

type TReusableButton = {
  children: React.ReactNode;
  size?: number;
  textColor?: string;
  disabled?: boolean;
  bgColor?: string;
  borderColor?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  style?: CSSProperties;
};

const ReusableButton: React.FC<TReusableButton> = ({
  children,
  size,
  textColor,
  disabled,
  bgColor,
  borderColor,
  onClick,
  type,
  style,
}) => {
  // const width = size ? `w-[${size}px]` : "";

  return (
    <button
      style={style && style}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` ${bgColor} ${borderColor} ${
        borderColor && "border"
      } flex items-center justify-center gap-x-2 w-full ${textColor} rounded-[2px] py-3.5 capitalize hover:scale-105 transition-all `}
    >
      {children}
    </button>
  );
};

export default ReusableButton;
