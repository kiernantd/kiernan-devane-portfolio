import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: Props) {
  return (
    <div className={`max-w-6xl mx-auto px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
