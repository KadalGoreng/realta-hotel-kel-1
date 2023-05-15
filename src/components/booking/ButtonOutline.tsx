import React, { ReactNode } from "react";

type button = {
  label: ReactNode;
  background?: boolean;
  textColor?: boolean;
  borderColor?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonOutline(props: button) {
  const { label, background, textColor, borderColor, onClick } = props;
  return (
    <button
      className={`btn btn-sm border-[#c78e3c] text-black hover:bg-transparent hover:border-[#c78e3c] ${
        background ? "bg-[#fff6ea] hover:bg-[#fff6ea]" : "bg-transparent"
      } ${textColor ? "text-[#c78e3c]" : "text-black"} ${
        borderColor ? "border-[#c78e3c]" : "border-gray-500"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
