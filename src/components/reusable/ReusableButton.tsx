import React from "react";

type TReusableButton = {
  children: React.ReactNode;
  size?: number;
  textColor?: string;
  disabled?: boolean;
  bgColor?: string;
};

const ReusableButton: React.FC<TReusableButton> = ({
  children,
  size,
  textColor,
  disabled,
  bgColor,
}) => {
  const width = size ? `w-[${size}px]` : "";

  return (
    <button
      disabled={disabled}
      className={` ${bgColor} flex items-center justify-center gap-x-2 min-w-full ${width} ${textColor} rounded-[2px] py-3.5 capitalize hover:scale-105 transition-all `}
    >
      {children}
    </button>
  );
};

export default ReusableButton;
