//Default Components
import React from "react";
//Author Components
import { Layout } from "../templates/layout";
import { LinkBox } from "../components/linkBox";
import { Icons } from "../components/icons";
import { globalLinks } from "../styles/global";
import { HeadFC } from "gatsby";
import { Seo } from "../templates/seo";
import * as Vanilla from "../styles/contact.css";
import * as VanillaLinkBox from "../components/linkBoxAssets.css";

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <div className={Vanilla.SectionsWrapper}>
        <div className={Vanilla.Section}>
          <h2 className={Vanilla.h2}>作品の感想を送りたい</h2>
          <p>メール，TwitterなどのSNS，YouTubeやBandcampのコメントなどでご随意にお送りください．</p>
          <div className={Vanilla.LinksWrapper}>
            <LinkBox
              icon={Icons.mail}
              text="Mail"
              link="mailto:liquid1224.flopp@gmail.com?subject=%E3%80%90%E3%81%94%E6%84%9F%E6%83%B3%E3%80%91%E2%97%AF%E2%97%AF%E2%97%AF&amp;body="
              style={VanillaLinkBox.Mail}
            />
            <LinkBox icon={Icons.twitter} text="Twitter" link={globalLinks.twitter} style={VanillaLinkBox.Twitter} />
            <LinkBox icon={Icons.youtube} text="YouTube" link={globalLinks.youtubeChannel} style={VanillaLinkBox.YouTube} />
            <LinkBox icon={Icons.bandcamp} text="Bandcamp" link={globalLinks.bandcamp} style={VanillaLinkBox.Bandcamp} />
          </div>
        </div>
        <div className={Vanilla.Section}>
          <h2 className={Vanilla.h2}>ちょっとした依頼を出したい</h2>
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
          <p>
            以下の内容を含む，具体的な依頼内容をメールにてお送りください．通常1週間以内にご返信いたします．
            <ul className={Vanilla.ul}>
              <li>氏名</li>
              <li>
                ご連絡先（いずれか1つ以上）
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
            <LinkBox
              icon={Icons.mail}
              text="Mail"
              link="mailto:liquid1224.flopp@gmail.com?subject=%E3%80%90%E3%81%8A%E5%95%8F%E5%90%88%E3%81%9B%E3%80%91%E2%97%AF%E2%97%AF%E2%97%AF&amp;body=%E3%83%BB%E6%B0%8F%E5%90%8D%0A%E3%83%BB%E3%81%94%E9%80%A3%E7%B5%A1%E5%85%88%EF%BC%88%E3%83%A1%E3%83%BC%E3%83%AB%EF%BC%8CSNS%E3%81%AA%E3%81%A9%EF%BC%89%0A%E3%83%BB%E4%BE%9D%E9%A0%BC%E8%80%85%E6%A7%98%E3%81%AE%E6%83%85%E5%A0%B1%EF%BC%88%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AA%E3%81%A9%EF%BC%89%0A%E3%83%BB%E5%88%B6%E4%BD%9C%E7%89%A9%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E6%83%85%E5%A0%B1%0A%E3%80%80%E3%83%BB%E7%94%A8%E9%80%94%E3%83%BB%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E5%BD%A2%E5%BC%8F%0A%E3%80%80%E3%80%80%E3%83%BB%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%A0%E3%81%91%E5%85%B7%E4%BD%93%E7%9A%84%E3%81%AA%E7%94%A8%E9%80%94%E3%82%92%E3%81%8A%E6%9B%B8%E3%81%8D%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%0A%E3%80%80%E3%83%BB%E5%85%B7%E4%BD%93%E7%9A%84%E3%81%AA%E4%BD%9C%E5%93%81%E3%81%AE%E6%A7%8B%E6%83%B3%E3%83%BB%E8%A6%81%E6%9C%9B%0A%E3%80%80%E3%80%80%E3%83%BB%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%A0%E3%81%91%E8%A9%B3%E7%B4%B0%E3%81%8B%E3%81%A4%E5%85%B7%E4%BD%93%E7%9A%84%E3%81%AB%E3%81%8A%E6%9B%B8%E3%81%8D%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%EF%BC%88%E8%A9%B3%E7%B4%B0%E3%81%A7%E3%81%82%E3%82%8B%E3%81%BB%E3%81%A9%E5%8A%A9%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%99%EF%BC%89%0A%E3%80%80%E3%83%BB%E4%BD%9C%E5%93%81%E5%BD%A2%E5%BC%8F%EF%BC%88%E6%9B%B2%E9%95%B7%E3%81%AE%E6%8C%87%E5%AE%9A%EF%BC%8C%E3%83%AB%E3%83%BC%E3%83%97%E3%81%AE%E6%9C%89%E7%84%A1%E3%81%AA%E3%81%A9%EF%BC%89%0A%E3%80%80%E3%83%BB%E7%B4%8D%E5%93%81%E5%BD%A2%E5%BC%8F%0A%E3%80%80%E3%83%BB%E3%81%9D%E3%81%AE%E4%BB%96%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E6%8C%87%E5%AE%9A%0A%E3%83%BB%E6%A8%A9%E5%88%A9%E8%A6%8F%E7%B4%84%0A%E3%83%BB%E7%B4%8D%E6%9C%9F%E3%83%BB%E5%88%B6%E4%BD%9C%E3%82%B9%E3%82%B1%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%0A%E3%83%BB%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E4%BA%88%E5%AE%9A%E6%97%A5%0A%E3%83%BB%E3%81%94%E4%BA%88%E7%AE%97"
              style={VanillaLinkBox.Mail}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;

export const Head: HeadFC = () => <Seo title="CONTACT" path="/contact" />;
