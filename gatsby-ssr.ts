import { GatsbySSR } from "gatsby";

const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "ja" });
};

export { onRenderBody };
