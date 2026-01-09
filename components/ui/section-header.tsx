import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  id?: string;
};

export default function SectionHeader({ children, id }: SectionHeadingProps) {
  return (
    <h1 className="text-4xl font-medium capitalize mb-8 text-center" id={id}>
      {children}
    </h1>
  );
}