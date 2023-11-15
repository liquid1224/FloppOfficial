import React from "react";
import * as Vanilla from "./icon.css";
import { IconType } from "react-icons/lib";

type iconProps = {
  readonly iconSvg: IconType;
  readonly link?: string | undefined;
};
export const Icon = ({ iconSvg: IconSvg, link }: iconProps) => {
  const IconBody = () => {
    return <IconSvg className={Vanilla.IconSvg} />;
  };
  if (!link || link === "") {
    return (
      <>
        <></>
      </>
    );
  } else {
    return (
      <a href={link} className={Vanilla.LinkBox}>
        <IconBody />
      </a>
    );
  }
};
