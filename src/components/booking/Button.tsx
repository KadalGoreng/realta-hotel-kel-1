import React, { ReactNode } from "react";

type button = {
  label: ReactNode;
  btnSmall?: boolean;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button(props: button) {
  const { label, fullWidth, btnSmall, onClick } = props;
  return (
    <button
      className={`btn bg-[#c78e3c] border-none hover:bg-[#84663c] ${
        fullWidth && "w-full"
      } ${btnSmall && "btn-sm"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
