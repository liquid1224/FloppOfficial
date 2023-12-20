import { style } from "@vanilla-extract/css";

export const SeparatorHorizontal = style({
  width: `100%`,
  height: `1px`,
  backgroundColor: `currentcolor`,
});

export const BoldHorizontal = style({
  height: `2px`,
});

export const SeparatorVertical = style({
  width: `1px`,
  height: `100%`,
  backgroundColor: `currentcolor`,
});

export const BoldVertical = style({
  width: `2px`,
});
