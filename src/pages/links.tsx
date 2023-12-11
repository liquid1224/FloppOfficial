import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Layout } from "../templates/layout";
import { globalLinks } from "../styles/global";
import * as Icons from "../components/icons";
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
              <a href={globalLinks.spotify} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.Spotify}`}>
                  <Icons.icons.spotify />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Spotify</h3>
                </div>
              </a>
              {/*Apple Music*/}
              <a href={globalLinks.appleMusic} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.AppleMusic}`}>
                  <Icons.icons.appleMusic />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Apple Music</h3>
                </div>
              </a>
              {/*Amazon Music*/}
              <a href={globalLinks.amazonMusic} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.AmazonMusic}`}>
                  <Icons.icons.amazon />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Amazon Music</h3>
                </div>
              </a>
              {/*YouTube Music*/}
              <a href={globalLinks.youtubeMusic} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.YouTube}`}>
                  <Icons.icons.youtubeMusic />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>YouTube Music</h3>
                </div>
              </a>
              {/*YouTube Topic*/}
              <a href={globalLinks.youtubeTopic} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.YouTube}`}>
                  <Icons.icons.youtube />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>YouTube Topic</h3>
                </div>
              </a>
              {/*Line Music*/}
              <a href={globalLinks.lineMusic} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.LineMusic}`}>
                  <Icons.icons.lineMusic />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Line Music</h3>
                </div>
              </a>
            </div>
          </div>

          <div className={Vanilla.LinksSection} id="store">
            <h2 className={Vanilla.LinkSectionH2}>Store</h2>
            <div className={Vanilla.LinksWrapper}>
              {/*Bandcamp*/}
              <a href={globalLinks.bandcamp} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.Bandcamp}`}>
                  <Icons.icons.bandcamp />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Bandcamp</h3>
                </div>
              </a>
              {/*Booth*/}
              <a href={globalLinks.booth} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.Booth}`}>
                  <Icons.icons.booth />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Booth</h3>
                </div>
              </a>
              {/*Suzuri*/}
              <a href={globalLinks.suzuri} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.Suzuri}`}>
                  <Icons.icons.suzuri />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Suzuri</h3>
                </div>
              </a>
            </div>
          </div>

          <div className={Vanilla.LinksSection} id="sns">
            <h2 className={Vanilla.LinkSectionH2}>SNS</h2>
            <div className={Vanilla.LinksWrapper}>
              {/*Twitter*/}
              <a href={globalLinks.twitter} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.Twitter}`}>
                  <Icons.icons.twitter />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Twitter(X)</h3>
                </div>
              </a>
              {/*Instagram*/}
              <a href={globalLinks.instagram} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.Instagram}`}>
                  <Icons.icons.instagram />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Instagram</h3>
                </div>
              </a>
              {/*Mastodon*/}
              <a href={globalLinks.mastodon} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.Mastodon}`}>
                  <Icons.icons.mastodon />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Mastodon</h3>
                </div>
              </a>
            </div>
          </div>

          <div className={Vanilla.LinksSection} id="media">
            <h2 className={Vanilla.LinkSectionH2}>Media</h2>
            <div className={Vanilla.LinksWrapper}>
              {/*YouTube Channel*/}
              <a href={globalLinks.youtubeChannel} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.YouTube}`}>
                  <Icons.icons.youtube />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>YouTube Channel</h3>
                </div>
              </a>
              {/*Niconico*/}
              <a href={globalLinks.niconico} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.Niconico}`}>
                  <Icons.icons.niconico />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Niconico</h3>
                </div>
              </a>
              {/*Bilibili*/}
              <a href={globalLinks.bilibili} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.Bilibili}`}>
                  <Icons.icons.bilibili />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Bilibili</h3>
                </div>
              </a>
              {/*Soundcloud*/}
              <a href={globalLinks.soundcloud} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.Soundcloud}`}>
                  <Icons.icons.soundcloud />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Soundcloud</h3>
                </div>
              </a>
            </div>
          </div>

          <div className={Vanilla.LinksSection} id="contact">
            <h2 className={Vanilla.LinkSectionH2}>Contact</h2>
            <div className={Vanilla.LinksWrapper}>
              {/*Skeb*/}
              <a href={globalLinks.skeb} className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.Skeb}`}>
                  <Icons.icons.skeb />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Skeb</h3>
                </div>
              </a>
              {/*Mail*/}
              <a href="/contact" className={Vanilla.LinkBox}>
                <div className={`${Vanilla.LinkIconWrapper} ${Vanilla.Mail}`}>
                  <Icons.icons.mail />
                </div>
                <div className={Vanilla.LinkText}>
                  <h3>Mail</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};
export default LinksPage;
