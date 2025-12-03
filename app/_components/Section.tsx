import { ReactNode } from "react";

export default function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-6xl mx-auto px-6 py-14 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
