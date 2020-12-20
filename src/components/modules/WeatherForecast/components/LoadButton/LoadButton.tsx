import React, { ReactNode, MouseEvent } from "react";
import bemCl from "bem-cl";

import Button, { ButtonStateEnum } from "../../../../basic/Button";

type Props = {
  children: ReactNode;
  state: "idle" | "loading" | "updating" | "error";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const b = bemCl("weather-forecast-module");

const LoadButton = ({ children, state, onClick }: Props) => {
  return (
    <Button
      className={b("load-button")}
      type="button"
      state={
        state === "loading"
          ? ButtonStateEnum.Loading
          : state === "updating"
          ? ButtonStateEnum.Updating
          : ButtonStateEnum.Idle
      }
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default LoadButton;
