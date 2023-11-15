import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

//Burger Button
export const BurgerWrapper = style({
  //position
  zIndex: "1000",
  //style
  margin: "10px",
  borderRadius: globalParams.borderRadius,
  ":hover": {
    boxShadow: globalParams.shadowLight332,
  },
  ":active": {
    boxShadow: globalParams.shadowLight332i,
  },
  //transition
  transition: `top ${globalParams.time}, box-shadow ${globalParams.time}`,
});

export const Burger = style({
  //position
  width: "50px",
  height: "50px",
  //alignment
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  //style
  color: globalParams.textColorLight,
  backgroundColor: "rgb(0,0,0,0)",
  borderColor: "rgb(0,0,0,0)",
});

export const Line1 = style({
  display: "inline-block",
  width: "24px",
  height: "2px",
  transform: "translate(0, -10px)",
  backgroundColor: "currentcolor",
  transition: `transform ${globalParams.time}`,
});

export const Line2 = style({
  display: "inline-block",
  width: "24px",
  height: "2px",
  transform: "none",
  backgroundColor: "currentcolor",
  transition: `transform ${globalParams.time}, opacity ${globalParams.time}`,
});

export const Line3 = style({
  display: "inline-block",
  width: "24px",
  height: "2px",
  transform: "translate(0, 10px)",
  backgroundColor: "currentcolor",
  transition: `transform ${globalParams.time}`,
});

export const Trans1 = style({
  display: "inline-block",
  width: "24px",
  height: "2px",
  transform: "translate(0,2px) rotate(-45deg)",
  backgroundColor: "currentcolor",
  transition: `transform ${globalParams.time}`,
});

export const Trans2 = style({
  display: "inline-block",
  width: "24px",
  height: "2px",
  transform: "none",
  opacity: "0%",
  backgroundColor: "currentcolor",
  transition: `transform ${globalParams.time}, opacity ${globalParams.time}`,
});

export const Trans3 = style({
  display: "inline-block",
  width: "24px",
  height: "2px",
  transform: "translate(0,-2px) rotate(45deg)",
  backgroundColor: "currentcolor",
  transition: `transform ${globalParams.time}`,
});

//Header
export const Header = style({
  //style
  backgroundColor: globalParams.backgroundLight, //beta
  padding: `24px`,
  //position
  position: `sticky`,
  top: `0`,
  width: `100%`,
  height: `36px`,
  zIndex: `500`,
  //alignment
  display: `flex`,
  alignItems: "center",
  justifyContent: "center",
  //transition
  transition: `padding ${globalParams.time}, border-radius ${globalParams.time}, box-shadow ${globalParams.time}`,
});

export const Scrolled = style({
  //change size
  padding: `12px`,
  //change radius
  borderRadius: `0 0 ${globalParams.borderRadius} ${globalParams.borderRadius}`,
  boxShadow: globalParams.shadowLight332,
});

export const LogoWrapper = style({
  //style
  margin: "0 auto",
  //position
  zIndex: `1000`,
  height: `100%`,
});
