import { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "ja" });
};
