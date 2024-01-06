import { FC, ReactNode, MouseEventHandler } from "react";
import {
  ColorVariant,
  ColorVariantFocus,
  FocusRingVariant,
  ColorVariantHover,
  Rounded,
  ButtonType,
} from "./enums";
// import { HoverableColorProcessor } from "./processors";

type Props = {
  children?: ReactNode;
  rounded?: Rounded;
  variant?: ColorVariant;
  hover?: ColorVariantHover;
  focus?: ColorVariantFocus;
  focusRing?: FocusRingVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
};

export const Button: FC<Props> = ({
  children,
  rounded,
  variant,
  hover,
  focus,
  focusRing,
  onClick,
  type,
}) => {
  return (
    <button
      type={type ?? ButtonType.Button}
      className={`${rounded ?? Rounded.Large} px-3 py-1 ${variant ?? ColorVariant.Brand
        } ${hover ?? ColorVariantHover.Brand} ${focus ?? ColorVariantFocus.None
        } ${focusRing ?? FocusRingVariant.None
        } transition-colors duration-200 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
