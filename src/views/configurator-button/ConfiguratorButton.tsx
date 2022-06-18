/** @jsxImportSource @emotion/react */
import React from "react";
import {
  foodImg,
  foodName,
  wrapper__button,
  wrapper__image,
} from "./ConfiguratorButton.style";
import { Ingredient } from "../configurator-selector/ConfiguratorSelector";

export const ConfiguratorButton: React.FC<Ingredient> = ({
  id,
  source,
  name,
}) => {
  return (
    <div key={id} css={wrapper__button}>
      <div css={wrapper__image}>
        <img css={foodImg} src={source} alt="food" />
      </div>
      <p css={foodName}>{name}</p>
    </div>
  );
};
