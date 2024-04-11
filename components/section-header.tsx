import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: SectionHeadingProps) {
  return (
    <h1 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h1>
  );
}