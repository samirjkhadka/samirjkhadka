import React, { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};
interface Props {
  children?: ReactNode;
}

export default function SectionHeading({ children, ...props }: Props) {
  return <h2 className="text-3xl font-medium capitalize mb-8 text-center">{children}</h2>;
}
