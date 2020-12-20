import React, { ReactNode, MouseEvent } from "react";
import bemCl from "bem-cl";

import "./Button.scss";

export const StateEnum = {
  Idle: "Idle",
  Loading: "Loading",
  Updating: "Updating",
} as const;

type Props = {
  children: ReactNode;
  state: keyof typeof StateEnum;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
// Props should "extends" ComponentPropsWithoutRef<HTMLButtonElement>,
// but I got an error which I did't how to solve quickly
// so had to define some HTMLButtonElement manually.

const b = bemCl("button");

const Button = ({
  children,
  state,
  className,
  ...buttonProps
}: Props): JSX.Element => {
  const isDisabled =
    state === StateEnum.Loading || state === StateEnum.Updating;

  return (
    <button
      className={b({ disabled: isDisabled }).mix(className)}
      {...buttonProps}
      disabled={isDisabled}
    >
      {state === StateEnum.Loading
        ? "Loading..."
        : state === StateEnum.Updating
        ? "Updating..."
        : children}
    </button>
  );
};

export default Button;
