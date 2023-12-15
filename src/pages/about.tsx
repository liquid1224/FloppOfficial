import React from "react";
import { Layout } from "../templates/layout";
import { useMediaQuery } from "react-responsive";
import { StaticImage } from "gatsby-plugin-image";
import { Seo } from "../templates/seo";
import type { HeadFC } from "gatsby";
//Author Components
import * as Vanilla from "./about.css";
import { ScrollIndecator } from "../components/scrollIndicator";

const AboutPage = () => {
  type PluginSectionProps = {
    title: string;
    children: React.ReactElement;
  };
  const PluginSection = ({ title, children }: PluginSectionProps) => {
    return (
      <div>
        <h3 className={Vanilla.h3}>{title}</h3>
        <div className={Vanilla.MiniSeparator} />
        {children}
      </div>
    );
  };
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <Layout title="About">
      <>
        <div className={Vanilla.AboutWrapper}>
          <div className={Vanilla.ProfileWrapper}>
            <div className={Vanilla.IconSection}>
              <div className={Vanilla.ArtistSectionWrapper}>
                <div className={Vanilla.ArtistIconWrapper}>
                  <StaticImage src="../images/artist.jpg" alt="liquid1224" className={Vanilla.ArtistIcon} />
                </div>
                <h2>liquid1224</h2>
              </div>
              <div>
                1999/12/24生
                <br />
                華力発電所 主宰
                <br />
                東京工業大学デジタル創作同好会traP，Tech-nation Records 所属
                <br />
              </div>
            </div>
            {isDesktop && <div className={Vanilla.Separator} />}
            <div className={Vanilla.ProfileSection}>
              祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              <br />
              祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              <br />
              祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              <br />
            </div>
          </div>
          {isDesktop && <ScrollIndecator />}
        </div>
        <div className={Vanilla.EnvironmentWrapper}>
          <PluginSection title="Synths">
            <>
              <ul className={Vanilla.ul}>
                <li>Vipor / Adam Szabo</li>
                <li>Synth1 / Daichi</li>
                <li>Synthmaster2 / KV331 Audio</li>
                <li>Synthmaster One / KV331 Audio</li>
                <li>FLow Motion / Waves</li>
                <li>SubLab / FAW</li>
              </ul>
              and more...
            </>
          </PluginSection>
          <PluginSection title="Orchestral / Epic Instruments">
            <ul className={Vanilla.ul}>
              <li>Cinematic Studio Strings / Cinematic Studio</li>
              <li>Cinematic Studio Brass / Cinematic Studio</li>
              <li>Hollywood Orchestra Diamond / EastWest</li>
              <li>London Contemporary Orchestra Strings / Spitfire Audio</li>
              <li>Joshua Bell Violin / Embertone</li>
              <li>Spitfire Solo Cello / Spitfire Audio</li>
              <li>Hollywood Choirs Diamond / EastWest</li>
              <li>EraⅡ Vocal Codex / Best Service</li>
              <li>Damage / Heavyocity</li>
              <li>Gravity / Heavyocity</li>
            </ul>
          </PluginSection>
          <PluginSection title="Acoustic Instruments">
            <>
              <ul className={Vanilla.ul}>
                <li>Ascend / Heavyocity</li>
                <li>Hammersmith Free / Soniccouture</li>
                <li>FORT3 / Electronik Sound Lab</li>
                <li>Irish Harp / Native Instruments</li>
                <li>Etherealwind's HarpⅡ CE</li>
                <li>Luther / Ample Sound</li>
                <li>SSD5 / Steven Slate Drums</li>
              </ul>
              and more...
            </>
          </PluginSection>
          <PluginSection title="Electric Guitars and Amps">
            <>
              <ul className={Vanilla.ul}>
                <li>Strum GS-2 / AAS</li>
                <li>Lapsteel / Ample Sound</li>
                <li>L12X / Audiority</li>
                <li>bx_megadual / Brainworx</li>
                <li>Keemun / Wedge Force</li>
                <li>Ampeg SVTVR Classic / Plugin Alliance</li>
              </ul>
              and more...
            </>
          </PluginSection>
          <PluginSection title="Multi FX">
            <>
              <ul className={Vanilla.ul}>
                <li>Portal / Output</li>
                <li>Tantra2 / Plugin Alliance</li>
                <li>Glitch1.3 / d.Blue</li>
                <li>Vocal Synth2 / iZotope</li>
              </ul>
              and more...
            </>
          </PluginSection>
          <PluginSection title="EQ">
            <>
              <ul className={Vanilla.ul}>
                <li>Kirchoff EQ / Plugin Alliance</li>
                <li>Crave EQ / Crave DSP</li>
                <li>Slick EQ GE / Tokyo Dawn Labs</li>
                <li>Rule tec EQ Heritage Pro / NoiseAsh</li>
                <li>EQ4 / Maag Audio</li>
              </ul>
              and more...
            </>
          </PluginSection>
          <PluginSection title="Compressor (incl. multiband)">
            <>
              <ul className={Vanilla.ul}>
                <li>smart:comp2 / Sonible</li>
                <li>Xtressor / Kiive Audio</li>
                <li>Fairchild 670 / UADx</li>
                <li>LA-2A / UADx</li>
                <li>Mu / Pulsar Audio</li>
                <li>MC77 / Purple Audio</li>
                <li>Kotelnikov / Tokyo Dawn Labs</li>
                <li>Shadow Hills Mastering Compressor / Plugin Alliance</li>
                <li>Multiplicity / DMG Audio</li>
              </ul>
              and more...
            </>
          </PluginSection>
          <PluginSection title="Saturator / Distortion / Clipper">
            <>
              <ul className={Vanilla.ul}>
                <li>Kelvin / Tone Projects</li>
                <li>Tape / Softube</li>
                <li>HG-2 / Black Box Analog Design</li>
                <li>Phil's Cascade / Elysia</li>
                <li>Rift2.0 / Minimal Audio</li>
                <li>Trash2 / iZotope</li>
                <li>Gorgon / Inear Display</li>
                <li>KClip3 / Kazrog</li>
              </ul>
              and more...
            </>
          </PluginSection>
          <PluginSection title="Delay / Reverb">
            <>
              <ul className={Vanilla.ul}>
                <li>H-Delay / Waves</li>
                <li>Cluster Delay / Minimal Audio</li>
                <li>ValhallaVintageVerb / Valhalla DSP</li>
                <li>Raum / Native Instruments</li>
                <li>Rev Plate-140 / Arturia</li>
                <li>DevilSpring / Lostin70s</li>
              </ul>
              and more...
            </>
          </PluginSection>
          <PluginSection title="Console">
            <ul className={Vanilla.ul}>
              <li>80series / Lindell Audio</li>
              <li>50series / Lindell Audio</li>
              <li>bx_console Focusrite SC / Plugin Alliance</li>
              <li>bx_console N / Plugin Alliance</li>
              <li>bx_console SSL4000E / Plugin Alliance</li>
              <li>Cream2 / Acustica Audio</li>
            </ul>
          </PluginSection>
          <PluginSection title="et al.">
            <>
              <ul className={Vanilla.ul}>
                <li>Horizon / Waves</li>
                <li>Music Production Suite 4 / iZotope</li>
                <li>Disperser / Kilohearts</li>
                <li>Subkick / Hitshaper</li>
                <li>Clarity VX / Waves</li>
                <li>Melodyne Assistant / Celemony</li>
                <li>GainMatch / LetiMix</li>
                <li>Metric AB / ADPTR</li>
                <li>Nx Ocean Way Nashville / Waves</li>
                <li>SoundID Reference / Sonarworks</li>
              </ul>
              and more...
            </>
          </PluginSection>
          <PluginSection title="Hardwares">
            <>
              <ul className={Vanilla.ul}>
                <li>
                  Audio IO
                  <ul className={Vanilla.ul}>
                    <li>Babyface Pro FS / RME</li>
                    <li>2408 mk.2 / MOTU</li>
                  </ul>
                </li>
                <li>
                  Headphones
                  <ul className={Vanilla.ul}>
                    <li>DT990 Pro 250Ω / Beyerdynamic</li>
                    <li>LOLA / Blue Microphone</li>
                    <li>ES60 / Westone</li>
                  </ul>
                </li>
                <li>
                  Instruments
                  <ul className={Vanilla.ul}>
                    <li>TD-3 / Behringer</li>
                  </ul>
                </li>
              </ul>
              and more...
            </>
          </PluginSection>
        </div>
      </>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <Seo title="ABOUT"></Seo>;
