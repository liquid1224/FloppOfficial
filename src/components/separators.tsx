import React from "react";
import * as Vanilla from "./separators.css";

type SeparatorProps = {
  isBold?: boolean;
};
export const SeparatorHorizontal = ({ isBold }: SeparatorProps) => {
  return <div className={`${Vanilla.SeparatorHorizontal} ${isBold ? Vanilla.BoldHorizontal : ""}`} />;
};

export const SeparatorVertical = ({ isBold }: SeparatorProps) => {
  return <div className={`${Vanilla.SeparatorVertical} ${isBold ? Vanilla.BoldVertical : ""}`} />;
};
