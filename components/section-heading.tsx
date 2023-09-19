import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};
export default function SectionHeading({ children }) {
  return <h2 className="text-3xl font-medium capitalize mb-8">{children}</h2>;
}
