# liquid1224.net

## Requirements

- npm@9.8.1
- node.js@18.17.1
- typescript@5.3.3
- react@18.2.0
- gatsby@5.12.11

- gatsby-plugin-image@3.12.3
- gatsby-plugin-manifest@5.12.3
- gatsby-plugin-sharp@5.12.3
- gatsby-plugin-sitemap@6.12.3
- gatsby-source-filesystem@5.12.1
- gatsby-transformer-remark@6.12.3
- gatsby-transformer-sharp@6.12.3

- @fontsource/zen-antique@5.0.11
- vanilla-extract/css@1.14.0
- react-icons@4.12.0
- react-responsive@9.0.2
- react-anchor-link-smooth-scroll

## Works

`gatsby-node.ts`で生成．各作品データは`/src/works/`以下．
各データはデフォルトで`null`にすること．
テンプレートは`/src/works/template.txt`．

## Blog

`gatsby-node.ts`で生成．各記事データは`/src/articles/`以下．
テンプレートは`/src/articles/template.txt`．

## Design

`/src/styles/global.tsx`に，各スタイルの値を定義．

## Others

`gatsby-browser.tsx`：リセット CSS とウェブフォントのロード
`gatsby-config.ts`：メタデータの記載，plugins の設定
`gatsby-ssr.ts`：`setHtmlAttributes({ lang: "ja" })`のみ
