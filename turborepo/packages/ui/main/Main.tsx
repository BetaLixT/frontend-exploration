import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const Main: FC<Props> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      {children}
    </main>
  );
};
