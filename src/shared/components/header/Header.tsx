/** @jsxImportSource @emotion/react */
import React from "react";
import { ReactComponent as PizzaIcon } from "assets/icons/pizza.svg";
import { button, wrapper } from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <header css={wrapper}>
      <p>Pizz-a-tron</p>
      <PizzaIcon />
      <button css={button}>Log out</button>
    </header>
  );
};
