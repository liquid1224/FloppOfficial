import { style } from "@vanilla-extract/css";
import { globalParams } from "../styles/global";

//Burger Button
export const BurgerWrapper = style({
  //style
  borderRadius: globalParams.borderRadius,
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowLight,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowLightIn,
        transform: `none`,
      },
    },
  },
  //position
  margin: `0 30px 0 0`,
  //transition
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time}`,
});

export const Burger = style({
  //position
  width: "35px",
  height: "35px",
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
  width: "20px",
  height: "1px",
  transform: "translate(0, -5px)",
  backgroundColor: "currentcolor",
  transition: `transform ${globalParams.time}`,
});

export const Line2 = style({
  display: "inline-block",
  width: "20px",
  height: "1px",
  transform: "none",
  backgroundColor: "currentcolor",
  transition: `transform ${globalParams.time}, opacity ${globalParams.time}`,
});

export const Line3 = style({
  display: "inline-block",
  width: "20px",
  height: "1px",
  transform: "translate(0, 5px)",
  backgroundColor: "currentcolor",
  transition: `transform ${globalParams.time}`,
});

export const Trans1 = style({
  display: "inline-block",
  width: "20px",
  height: "1px",
  transform: "translate(0,1px) rotate(-45deg)",
  backgroundColor: "currentcolor",
  transition: `transform ${globalParams.time}`,
});

export const Trans2 = style({
  display: "inline-block",
  width: "20px",
  height: "1px",
  transform: "none",
  opacity: "0%",
  backgroundColor: "currentcolor",
  transition: `transform ${globalParams.time}, opacity ${globalParams.time}`,
});

export const Trans3 = style({
  display: "inline-block",
  width: "20px",
  height: "1px",
  transform: "translate(0,-1px) rotate(45deg)",
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
  width: `60px`,
  height: `20px`,
  //transition
  transition: `top ${globalParams.time}, box-shadow ${globalParams.time}`,
});

export const ToggleSwitchInput = style({
  display: "none",
});

export const ToggleSwitchLabel = style({
  vars: {
    "--ToggleSwitchWidth": "2.7rem",
    "--ToggleSwitchHeight": "1.3rem",
    "--ToggleSwitchPadding": "0.2rem",
    "--ToggleSwitchCircle": "1.0rem",
  },
  display: "inline-block",
  cursor: "pointer",
  position: "relative",
  width: "var(--ToggleSwitchWidth)",
  height: "var(--ToggleSwitchHeight)",
  borderRadius: "var(--ToggleSwitchHeight)",
  background: globalParams.textColorLight,
  transition: `background ${globalParams.time}, box-shadow ${globalParams.time}`,
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
  padding: `8px 5vw`,
  boxSizing: `border-box`,
  //position
  position: `sticky`,
  top: `0`,
  width: `100%`,
  height: `60px`,
  zIndex: `1000`,
  //alignment
  display: `flex`,
  alignItems: "center",
  justifyContent: "center",
  //transition
  transition: `height ${globalParams.time}, padding ${globalParams.time}, border-radius ${globalParams.time}, box-shadow ${globalParams.time}`,
});

export const Scrolled = style({
  //change size
  height: `50px`,
  padding: `8px 5vw`,
  //change radius
  borderRadius: `0 0 ${globalParams.borderRadius} ${globalParams.borderRadius}`,
  boxShadow: globalParams.shadowLight,
});

export const LogoWrapper = style({
  //style
  margin: "0 auto",
  //alignment
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  //position
  zIndex: `1000`,
  flex: `1`,
  height: `30px`,
});

export const LogoLink = style({
  //style
  padding: `5px`,
  height: `100%`,
  borderRadius: globalParams.borderRadius,
  "@media": {
    "(hover: hover)": {
      ":hover": {
        boxShadow: globalParams.shadowLight,
        transform: globalParams.float,
      },
      ":active": {
        boxShadow: globalParams.shadowLightIn,
        transform: `none`,
      },
    },
  },
  //transition
  transition: `box-shadow ${globalParams.time}, transform ${globalParams.time}`,
});
