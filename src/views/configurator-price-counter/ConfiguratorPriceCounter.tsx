/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { wrapper__priceCounter } from "./ConfiguratorPriceCounter.style";

export const ConfiguratorPriceCounter: React.FC = () => {
  const [price, setPrice] = useState<number>(0.0);
  return (
    <div css={wrapper__priceCounter}>Total Price: +${price.toFixed(2)}</div>
  );
};
