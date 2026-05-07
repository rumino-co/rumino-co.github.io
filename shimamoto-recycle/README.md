# 嶋本建設株式会社リサイクルセンター | 公式サイト

熊本県上益城郡益城町の産業廃棄物中間処理施設「嶋本建設株式会社リサイクルセンター」の公式ホームページです。

## 公開URL

https://shimamoto-kensetsu.pages.dev/shimamoto-recycle/

## 構成

静的HTML/CSS/JSのみで構成されています。ビルドツール不要。

```
shimamoto-recycle/
├── index.html          トップ
├── service.html        取扱品目・処理フロー
├── profile.html        会社案内・許可証
├── news.html           お知らせ
├── contact.html        お問い合わせ
├── thanks.html         送信完了(noindex)
├── sitemap.xml
├── robots.txt
├── css/
│   └── style.css       Eco Emerald テーマ
├── js/
│   └── main.js         ハンバーガーメニュー制御
└── images/
    └── logo.svg
```

## ローカルで確認

ブラウザで `index.html` を直接開くか、簡易サーバーを起動します。

```bash
# Python 3 がインストールされている場合
python -m http.server 8000
# → http://localhost:8000 で確認
```

## 公開構成

親会社 嶋本建設HPと同じ Cloudflare Pages プロジェクト `shimamoto-kensetsu` の **サブフォルダ** として配信されています。新規 Cloudflare Pages プロジェクトは不要。

- ソースリポジトリ: `rumino-co/rumino-co.github.io`
- サブフォルダ: `shimamoto-recycle/`
- Cloudflare Pages: 親リポジトリ（`rumino-co/rumino-co.github.io`）に紐づくプロジェクト `shimamoto-kensetsu` が自動デプロイ
- 公開URL: `https://shimamoto-kensetsu.pages.dev/shimamoto-recycle/`

### URLの仕様（Cloudflare Pages）

`.html` は自動ストリップされる：

| ローカルファイル | 公開URL |
|---|---|
| `shimamoto-recycle/index.html` | `https://shimamoto-kensetsu.pages.dev/shimamoto-recycle/` |
| `shimamoto-recycle/service.html` | `https://shimamoto-kensetsu.pages.dev/shimamoto-recycle/service` |
| `shimamoto-recycle/profile.html` | `https://shimamoto-kensetsu.pages.dev/shimamoto-recycle/profile` |
| 等々 |  |

そのため canonical / og:url / sitemap.xml は **無拡張子** で記述している。

## デプロイ手順（GitHub Web UI）

ローカル → GitHub アップロード → Cloudflare Pages 自動デプロイ：

1. https://github.com/rumino-co/rumino-co.github.io を開く
2. リポジトリのトップ → `shimamoto-recycle` フォルダに入る（無ければ作る）
3. 「Add file」→「Upload files」→ HP/ の更新ファイルをドラッグ＆ドロップ
4. 「Commit changes」
5. 1〜2分後、`https://shimamoto-kensetsu.pages.dev/shimamoto-recycle/` に反映される

## 関連サイト

- 親会社: 嶋本建設株式会社 https://shimamoto-kensetsu.pages.dev/

## 会社情報

| 項目 | 内容 |
| --- | --- |
| 会社名 | 嶋本建設株式会社リサイクルセンター |
| 代表者 | 代表取締役　嶋本　稔 |
| 所在地 | 熊本県上益城郡益城町杉堂690番地3 |
| TEL | 096-289-8550 |
| FAX | 096-289-8551 |
| 営業時間 | 8:00～17:00 |

---

&copy; 2026 嶋本建設株式会社リサイクルセンター
