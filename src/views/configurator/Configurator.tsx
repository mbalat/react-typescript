/** @jsxImportSource @emotion/react */
import React from "react";
import { ConfiguratorPriceCounter } from "views/configurator-price-counter";
import { ConfiguratorSelector } from "views/configurator-selector";
import { title, wrapper } from "./Configurator.styles";

export const Configurator: React.FC = () => {
  return (
    <section css={wrapper}>
      <p css={title}>Toppings! Toppings</p>
      <ConfiguratorSelector />
      <ConfiguratorPriceCounter />
    </section>
  );
};
