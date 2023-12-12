//Default Components
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
//Author Components
import { Layout } from "../templates/layout";
import { globalLinks } from "../styles/global";
import { LinkBox } from "../components/linkBox";
import { Icons } from "../components/icons";
import * as Vanilla from "./links.css";

const LinksPage = () => {
  return (
    <Layout title="Links">
      <>
        <div className={Vanilla.MenuWrapper}>
          <AnchorLink href="#music" offset="20" className={Vanilla.Menu}>
            Music
          </AnchorLink>
          <AnchorLink href="#store" offset="20" className={Vanilla.Menu}>
            Store
          </AnchorLink>
          <AnchorLink href="#sns" offset="20" className={Vanilla.Menu}>
            SNS
          </AnchorLink>
          <AnchorLink href="#media" offset="20" className={Vanilla.Menu}>
            Media
          </AnchorLink>
          <AnchorLink href="#contact" offset="20" className={Vanilla.Menu}>
            Contact
          </AnchorLink>
        </div>
        <div className={Vanilla.Separator} />
        <div className={Vanilla.LinksSectionsWrapper}>
          <div className={Vanilla.LinksSection} id="music">
            <h2 className={Vanilla.LinkSectionH2}>Music</h2>
            <div className={Vanilla.LinksWrapper}>
              {/*Spotify*/}
              <LinkBox icon={Icons.spotify} text="Spotify" link={globalLinks.spotify} style={Vanilla.Spotify} />
              {/*Apple Music*/}
              <LinkBox icon={Icons.appleMusic} text="Apple Music" link={globalLinks.appleMusic} style={Vanilla.AppleMusic} />
              {/*Amazon Music*/}
              <LinkBox icon={Icons.amazon} text="Amazon Music" link={globalLinks.amazonMusic} style={Vanilla.AmazonMusic} />
              {/*YouTube Music*/}
              <LinkBox icon={Icons.youtubeMusic} text="YouTube Music" link={globalLinks.youtubeMusic} style={Vanilla.YouTube} />
              {/*YouTube Topic*/}
              <LinkBox icon={Icons.youtube} text="YouTube Topic" link={globalLinks.youtubeTopic} style={Vanilla.YouTube} />
              {/*Line Music*/}
              <LinkBox icon={Icons.lineMusic} text="Line Music" link={globalLinks.lineMusic} style={Vanilla.LineMusic} />
            </div>
          </div>

          <div className={Vanilla.LinksSection} id="store">
            <h2 className={Vanilla.LinkSectionH2}>Store</h2>
            <div className={Vanilla.LinksWrapper}>
              {/*Bandcamp*/}
              <LinkBox icon={Icons.bandcamp} text="Bandcamp" link={globalLinks.bandcamp} style={Vanilla.Bandcamp} />
              {/*Booth*/}
              <LinkBox icon={Icons.booth} text="Booth" link={globalLinks.booth} style={Vanilla.Booth} />
              {/*Suzuri*/}
              <LinkBox icon={Icons.suzuri} text="Suzuri" link={globalLinks.suzuri} style={Vanilla.Suzuri} />
            </div>
          </div>

          <div className={Vanilla.LinksSection} id="sns">
            <h2 className={Vanilla.LinkSectionH2}>SNS</h2>
            <div className={Vanilla.LinksWrapper}>
              {/*Twitter*/}
              <LinkBox icon={Icons.twitter} text="Twitter(X)" link={globalLinks.twitter} style={Vanilla.Twitter} />
              {/*Instagram*/}
              <LinkBox icon={Icons.instagram} text="Instagram" link={globalLinks.instagram} style={Vanilla.Instagram} />
              {/*Mastodon*/}
              <LinkBox icon={Icons.mastodon} text="Mastodon" link={globalLinks.mastodon} style={Vanilla.Mastodon} />
            </div>
          </div>

          <div className={Vanilla.LinksSection} id="media">
            <h2 className={Vanilla.LinkSectionH2}>Media</h2>
            <div className={Vanilla.LinksWrapper}>
              {/*YouTube Channel*/}
              <LinkBox icon={Icons.youtube} text="YouTube Channel" link={globalLinks.youtubeChannel} style={Vanilla.YouTube} />
              {/*Niconico*/}
              <LinkBox icon={Icons.niconico} text="Niconico" link={globalLinks.niconico} style={Vanilla.Niconico} />
              {/*Bilibili*/}
              <LinkBox icon={Icons.bilibili} text="Bilibili" link={globalLinks.bilibili} style={Vanilla.Bilibili} />
              {/*Soundcloud*/}
              <LinkBox icon={Icons.soundcloud} text="Soundcloud" link={globalLinks.soundcloud} style={Vanilla.Soundcloud} />
            </div>
          </div>

          <div className={Vanilla.LinksSection} id="contact">
            <h2 className={Vanilla.LinkSectionH2}>Contact</h2>
            <div className={Vanilla.LinksWrapper}>
              {/*Skeb*/}
              <LinkBox icon={Icons.skeb} text="Skeb" link={globalLinks.skeb} style={Vanilla.Skeb} />
              {/*Mail*/}
              <LinkBox icon={Icons.mail} text="Mail" link="" style={Vanilla.Mail} />
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};
export default LinksPage;
