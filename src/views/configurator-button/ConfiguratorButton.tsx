/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import {
  foodImg,
  foodName,
  wrapper__button,
  wrapper__button_selected,
  wrapper__image,
} from "./ConfiguratorButton.style";
import { Ingredient } from "../configurator-selector/ConfiguratorSelector";

export const ConfiguratorButton: React.FC<Ingredient> = ({
  id,
  source,
  name,
}) => {
  const [isActive, setIsActive] = useState(false);

  const select = () => {
    setIsActive((current) => !current);
  };

  return (
    <div
      key={id}
      css={isActive ? wrapper__button_selected : wrapper__button}
      onClick={() => select()}
    >
      <div css={wrapper__image}>
        <img css={foodImg} src={source} alt="food" />
      </div>
      <p css={foodName}>{name}</p>
    </div>
  );
};
