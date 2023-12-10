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
              {/*Spotify*/}
              <a href="https://open.spotify.com/artist/2wVvlJxWx3jiwaTFQqybSV" className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.Spotify}`}>
                  <Icons.icons.spotify />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Spotify</h3>
                </div>
              </a>
              {/*Apple Music*/}
              <a href="https://music.apple.com/jp/artist/%E3%83%AA%E3%82%AD%E3%83%83%E3%83%89/1510273690" className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.AppleMusic}`}>
                  <Icons.icons.appleMusic />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Apple Music</h3>
                </div>
              </a>
              {/*Amazon Music*/}
              <a href="https://music.amazon.co.jp/artists/B087PXQRXP/%E3%83%AA%E3%82%AD%E3%83%83%E3%83%89" className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.AmazonMusic}`}>
                  <Icons.icons.amazon />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Amazon Music</h3>
                </div>
              </a>
              {/*YouTube Music*/}
              <a href="https://music.amazon.co.jp/artists/B087PXQRXP/%E3%83%AA%E3%82%AD%E3%83%83%E3%83%89" className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.YouTubeMusic}`}>
                  <Icons.icons.youtubeMusic />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>YouTube Music</h3>
                </div>
              </a>
              {/*Line Music*/}
              <a href="https://lin.ee/u48MUFL" className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.LineMusic}`}>
                  <Icons.icons.lineMusic />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>YouTube Music</h3>
                </div>
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
