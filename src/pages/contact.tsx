//Default Components
import React from "react";
//Author Components
import { Layout } from "../templates/layout";
import { LinkBox } from "../components/linkBox";
import { Icons } from "../components/icons";
import { globalLinks } from "../styles/global";
import * as Vanilla from "./contact.css";
import * as VanillaLinkBox from "../components/linkBoxAssets.css";
import { HeadFC } from "gatsby";
import { Seo } from "../templates/seo";

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <div className={Vanilla.SectionsWrapper}>
        <div className={Vanilla.Section}>
          <h2 className={Vanilla.h2}>作品の感想を送りたい</h2>
          <div className={Vanilla.Separator} />
          <p>メール，TwitterなどのSNS，YouTubeやBandcampのコメントなどでご随意にお送りください．</p>
          <div className={Vanilla.LinksWrapper}>
            <LinkBox icon={Icons.mail} text="Mail" link="" style={VanillaLinkBox.Mail} />
            <LinkBox icon={Icons.twitter} text="Twitter" link={globalLinks.twitter} style={VanillaLinkBox.Twitter} />
            <LinkBox icon={Icons.youtube} text="YouTube" link={globalLinks.youtubeChannel} style={VanillaLinkBox.YouTube} />
            <LinkBox icon={Icons.bandcamp} text="Bandcamp" link={globalLinks.bandcamp} style={VanillaLinkBox.Bandcamp} />
          </div>
        </div>
        <div className={Vanilla.Section}>
          <h2 className={Vanilla.h2}>ちょっとした依頼を出したい</h2>
          <div className={Vanilla.Separator} />
          <p>
            個人利用目的の楽曲制作は，Skeb経由で受け付けております．詳しくは
            <a href="https://skeb.jp/client" className={Vanilla.InlineLink}>
              Skeb「クライアントガイドライン」
            </a>
            をご確認ください．
          </p>
          <div className={Vanilla.LinksWrapper}>
            <LinkBox icon={Icons.skeb} text="Skeb" link={globalLinks.skeb} style={VanillaLinkBox.Skeb} />
          </div>
        </div>
        <div className={Vanilla.Section}>
          <h2 className={Vanilla.h2}>しっかりした依頼を出したい</h2>
          <div className={Vanilla.Separator} />
          <p>
            以下の内容を含む，具体的な依頼内容をメールにてお送りください．通常1週間以内にご返信いたします．
            <ul className={Vanilla.ul}>
              <li>氏名</li>
              <li>
                連絡先（いずれか1つ以上）
                <ul className={Vanilla.ul}>
                  <li>メールアドレス</li>
                  <li>Twitter・InstagramなどのSNS情報</li>
                </ul>
              </li>
              <li>依頼者様の情報（ウェブサイトなど）</li>
              <li>
                <li>
                  制作物に関する情報
                  <ul className={Vanilla.ul}>
                    <li>
                      用途・リリース形式
                      <ul className={Vanilla.ul}>
                        <li>例：Bandcampでリリースされるコンピレーションへの参加</li>
                        <li>例：制作中のゲームのBGMとして使用</li>
                        <li>その他具体的な用途をお書きください</li>
                      </ul>
                    </li>
                    <li>
                      具体的な作品の構想・要望
                      <ul className={Vanilla.ul}>
                        <li>例：テクノポップ調の，アップテンポな歌モノ</li>
                        <li>例：楽曲「〇〇」に似たようなインスト作品</li>
                        <li>上記の例に囚われず，詳細かつ具体的にお書きください（詳細であるほど助かります）</li>
                      </ul>
                    </li>
                    <li>
                      作品形式
                      <ul className={Vanilla.ul}>
                        <li>曲長の指定</li>
                        <li>ループの有無</li>
                        <li>納品形式</li>
                        <li>その他フォーマットに関する指定</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  権利規約
                  <ul className={Vanilla.ul}>
                    <li>著作権譲渡・著作者人格権不行使・その他著作隣接権の譲渡や不行使などを必要とするご依頼は，原則としてお請けできません</li>
                    <li>個別の事案によってはお請けできる場合もありますので，まずはご相談ください</li>
                  </ul>
                </li>
                <li>
                  納期・制作スケジュール
                  <ul className={Vanilla.ul}>
                    <li>少なくとも1曲当たり2週間程度の余裕を持ってご依頼ください</li>
                    <li>スケジュール次第では短期での納品が可能な場合がありますので，まずはご相談ください</li>
                  </ul>
                </li>
                <li>リリース予定日</li>
                <li>
                  ご予算
                  <ul className={Vanilla.ul}>
                    <li>都度お見積りいたしますので，まずはご連絡ください</li>
                  </ul>
                </li>
              </li>
            </ul>
          </p>
          <div className={Vanilla.LinksWrapper}>
            <LinkBox icon={Icons.mail} text="Mail" link="" style={VanillaLinkBox.Mail} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;

export const Head: HeadFC = () => <Seo title="CONTACT"></Seo>;
