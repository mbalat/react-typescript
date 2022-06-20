import { css } from "@emotion/react";

export const wrapper__button = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 56px;
  height: 148px;
  max-width: 98px;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
  cursor: pointer;
`;

export const wrapper__button_selected = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 56px;
  height: 148px;
  max-width: 98px;
  border: 1px solid #f2f2f2;
  background-color: #e5c3f5;
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.03);
`;

export const foodName = css`
  margin: 0 30px 30px 30px;
`;

export const foodImg = css`
  width: 36px;
  height: 24px;
`;

export const wrapper__image = css`
  margin: 11px 8px 11px;
  border-radius: 40px;
  width: 76px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
`;
