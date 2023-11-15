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

//Toggle Switch
export const ToggleSwitch = style({
  //alignment
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //position
  margin: `10px`,
  //padding: "1px 6px",
  zIndex: "1000",
  //transition
  transition: `top ${globalParams.time}, box-shadow ${globalParams.time}`,
});

export const ToggleSwitchInput = style({
  display: "none",
});

export const ToggleSwitchLabel = style({
  vars: {
    "--ToggleSwitchWidth": "2.7rem",
    "--ToggleSwitchHeight": "1.5rem",
    "--ToggleSwitchPadding": "0.2rem",
    "--ToggleSwitchCircle": "1.1rem",
  },
  display: "inline-block",
  cursor: "pointer",
  position: "relative",
  width: "var(--ToggleSwitchWidth)",
  height: "var(--ToggleSwitchHeight)",
  borderRadius: "var(--ToggleSwitchHeight)",
  background: globalParams.textColorLight,
  transition: `background ${globalParams.time}, box-shadow ${globalParams.time}`,
  ":hover": {
    boxShadow: globalParams.shadowLight332,
  },
  ":after": {
    cursor: "pointer",
    content: "''",
    position: "absolute",
    left: "var(--ToggleSwitchPadding)",
    top: "0",
    bottom: "0",
    margin: "auto",
    width: "var(--ToggleSwitchCircle)",
    height: "var(--ToggleSwitchCircle)",
    borderRadius: "50%",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    background: globalParams.backgroundLight,
    transition: `left ${globalParams.time}`,
  },
});

export const ToggleSwitchLabelChecked = style({
  background: globalParams.accentColor1,
  ":hover": {
    boxShadow: globalParams.shadowDark332,
  },
  ":after": {
    left: "calc( var(--ToggleSwitchWidth) - var(--ToggleSwitchCircle) - var(--ToggleSwitchPadding))",
    borderRadius: "50%",
    background: globalParams.textColorLight,
  },
});

//Header
export const Header = style({
  //style
  backgroundColor: globalParams.backgroundLight, //beta
  padding: `24px 24px`,
  boxSizing: `border-box`,
  //position
  position: `sticky`,
  top: `0`,
  width: `100%`,
  height: `84px`,
  zIndex: `500`,
  //alignment
  display: `flex`,
  alignItems: "center",
  justifyContent: "center",
  //transition
  transition: `height ${globalParams.time}, padding ${globalParams.time}, border-radius ${globalParams.time}, box-shadow ${globalParams.time}`,
});

export const Scrolled = style({
  //change size
  height: `60px`,
  padding: `12px 24px`,
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
