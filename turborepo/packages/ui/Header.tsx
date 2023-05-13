import * as React from "react";

export const Header = ({ text }: { text: string }) => {
  return <h1 className="text-3xl font-bold text-foregroundColorDark">{text}</h1>;
};
