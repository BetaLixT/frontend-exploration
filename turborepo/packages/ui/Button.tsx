"use client";

import { FC, MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler,
}

export const Button: FC<Props> = ({ onClick }) => {
  return <button
    className="rounded-full bg-brandColor text-brandForegroundColor px-3 py-1 hover:bg-[#4a9c6b]"
    onClick={onClick}>Boop</button>;
};
