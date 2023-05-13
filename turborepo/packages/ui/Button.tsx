"use client";

import { FC, MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler,
}

export const Button: FC<Props> = ({ onClick }) => {
  return <button
    className="rounded-full bg-danger-pop-dark text-brandForegroundColor px-3 py-1 hover:bg-brand-pop-dark"
    onClick={onClick}>Boop</button>;
};
