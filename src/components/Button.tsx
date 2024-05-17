import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button onClick={onClick} type="button" className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
