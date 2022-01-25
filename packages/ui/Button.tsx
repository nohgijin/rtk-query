import * as React from "react";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
};
export const Button = ({ onClick, text }: Props) => {
  return <button onClick={onClick}>{text}</button>;
};
