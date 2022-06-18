/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { wrapper__selector } from "./ConfiguratorSelector.style";
import chilliImg from "../../assets/icons/chilli.svg";
import cornImg from "../../assets/icons/corn.svg";
import eggImg from "../../assets/icons/egg.svg";
import pineappleImg from "../../assets/icons/pineappe.svg";
import { ConfiguratorButton } from "views/configurator-button";

export interface Ingredient {
  id: number;
  source: string;
  name: string;
}

export const ConfiguratorSelector: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 0, source: chilliImg, name: "Chilli" },
    { id: 1, source: cornImg, name: "Corn" },
    { id: 2, source: eggImg, name: "Egg" },
    { id: 3, source: pineappleImg, name: "Pineapple" },
  ]);

  return (
    <div css={wrapper__selector}>
      {ingredients.map((i: Ingredient) => (
        <ConfiguratorButton id={i.id} source={i.source} name={i.name} />
      ))}
    </div>
  );
};
