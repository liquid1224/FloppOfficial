import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Layout } from "../templates/layout";
import * as Icons from "../components/icons";
import * as Vanilla from "./links.css";

const LinksPage = () => {
  return (
    <Layout title="Links">
      <>
        <div className={Vanilla.MenuWrapper}>
          <AnchorLink href="#music" offset="80" className={Vanilla.Menu}>
            Music
          </AnchorLink>
          <AnchorLink href="#store" offset="80" className={Vanilla.Menu}>
            Store
          </AnchorLink>
          <AnchorLink href="#sns" offset="80" className={Vanilla.Menu}>
            SNS
          </AnchorLink>
          <AnchorLink href="#media" offset="80" className={Vanilla.Menu}>
            Media
          </AnchorLink>
        </div>
        <div className={Vanilla.LinksSectionsWrapper}>
          <div className={Vanilla.LinksSection} id="music">
            <h2 className={Vanilla.LinkSectionH2}>Music</h2>
            <div className={Vanilla.LinksWrapper}>
              <a className={Vanilla.LinkBox}>
                <div className="LinkIcon"></div>
                <div className="LinkText"></div>
              </a>
            </div>
          </div>
          <div className={Vanilla.Separator} />
          <div className={Vanilla.LinksSection} id="store">
            <h2 className={Vanilla.LinkSectionH2}>Store</h2>
            <div className={Vanilla.LinksWrapper}></div>
          </div>
          <div className={Vanilla.Separator} />
          <div className={Vanilla.LinksSection} id="sns">
            <h2 className={Vanilla.LinkSectionH2}>SNS</h2>
            <div className={Vanilla.LinksWrapper}></div>
          </div>
          <div className={Vanilla.Separator} />
          <div className={Vanilla.LinksSection} id="media">
            <h2 className={Vanilla.LinkSectionH2}>Media</h2>
            <div className={Vanilla.LinksWrapper}></div>
          </div>
        </div>
      </>
    </Layout>
  );
};
export default LinksPage;
