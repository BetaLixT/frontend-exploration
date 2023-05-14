"use client";

import { FC, MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler;
  buttonType: ButtonType;
};

export enum ButtonType {
  Info = 0,
  Warn,
  Danger,
  Brand,
}

export const Button: FC<Props> = ({ onClick, buttonType }) => {
  let colorClasses = "";
  switch (buttonType) {
    case ButtonType.Info:
      colorClasses =
        "bg-dark-info-500 text-dark-infofg-500 hover:bg-dark-info-400 hover:text-infofg-400";
    case ButtonType.Warn:
      colorClasses =
        "bg-dark-warn-500 text-dark-warnfg-500 hover:bg-dark-warn-400 hover:text-warnfg-400";
    case ButtonType.Danger:
      colorClasses =
        "bg-dark-danger-500 text-dark-dangerfg-500 hover:bg-dark-danger-400 hover:text-dangerfg-400";
    default:
      colorClasses =
        "bg-dark-brand-500 text-dark-brandfg-500 hover:bg-dark-brand-400 hover:text-brandfg-400";
  }
  return (
    <button
      className={"rounded-full px-3 py-1 " + colorClasses}
      onClick={onClick}
    >
      Boop
    </button>
  );
};
