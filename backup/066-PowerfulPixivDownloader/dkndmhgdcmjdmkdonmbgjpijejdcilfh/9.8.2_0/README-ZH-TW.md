[English](https://github.com/xuejianxianzun/PixivBatchDownloader/blob/master/README-EN.md)

[简体中文](https://github.com/xuejianxianzun/PixivBatchDownloader/blob/master/README.md)

[Discord 頻道](https://discord.gg/eW9JtTK)

![version](https://img.shields.io/github/v/release/xuejianxianzun/PixivBatchDownloader)

<!-- TOC -->

- [簡介](#簡介)
- [安裝](#安裝)
  - [線上安裝](#線上安裝)
  - [離線安裝](#離線安裝)
- [Wiki](#wiki)
- [鳴謝](#鳴謝)
- [支持和捐助](#支持和捐助)
- [開發](#開發)
- [幫助](#幫助)
  - [常見問題](#常見問題)
  - [支援的語言](#支援的語言)
  - [可以使用的頁面類型以及測試網址](#可以使用的頁面類型以及測試網址)

<!-- /TOC -->

# 簡介

這是一個 Chrome 瀏覽器擴充功能，用於批次下載 Pixiv 上的圖片和小說。功能強大，支援多種頁面類型。

現在也增加了一些輔助功能，如去除廣告、快速收藏、看圖模式、替未分類作品添加 tag 等。

![PixivBatchDownloader](https://raw.githubusercontent.com/wiki/xuejianxianzun/PixivBatchDownloader/images/ui4.png)

[瀏覽官網](https://pixiv.download/)

# 安裝

## 線上安裝

1. **Chromium 内核**的瀏覽器可以从 **[Chrome Web Store](https://chrome.google.com/webstore/detail/powerful-pixiv-downloader/dkndmhgdcmjdmkdonmbgjpijejdcilfh)** 安装本擴充功能。

2. **Microsoft Edge** 瀏覽器也可以从 **[Microsoft Edge 外接程序](https://microsoftedge.microsoft.com/addons/detail/hpcoocgpiepjcngmhhknkflhpkoklphp)** 安装本擴充功能。

**注意：** 有時 Chrome Web Store 上的擴展可能不是最新版本。如果有需要，你可以進行離線安裝，或者使用 Edge 瀏覽器從 Edge 商店安裝。

## 離線安裝

如果您不能從線上安裝，您可以從 [releases 頁面](https://github.com/xuejianxianzun/PixivBatchDownloader/releases/latest) 離線安裝。

---------

- 下載的檔案會儲存在瀏覽器的下載目錄裡。

- 請關閉瀏覽器設定中的「下載每個檔案前先詢問儲存位置」選項，以免下載時跳出視窗。

# Wiki

[查看 Wiki](https://xuejianxianzun.github.io/PBDWiki)

# 鳴謝

- 感謝 [道滿](https://zhtw.me/) 、 [VHlqg](https://github.com/VHlqg) 翻譯繁體中文。

- 感謝 [光の軌跡](https://github.com/jiaer24) 翻譯日語。

- 感謝 [Reinford0](https://github.com/Reinford0) 對本工具的測試和改進。

- 感謝 [z2n](https://github.com/z2n) 對本工具專案構建做出的改進。

# 支持和捐助

如果您感覺本腳本幫到了您，您可以對我進行支持和捐助，不勝感激 (*╹▽╹*)

1. 中國的眾籌贊助平台「愛發電」（類似於 patreon）。

[https://afdian.net/@xuejianxianzun](https://afdian.net/@xuejianxianzun)

2. 可透過微信和支付寶掃碼轉帳

![支付寶](https://i.loli.net/2019/04/04/5ca5627614396.png) ![微信](https://i.loli.net/2019/04/04/5ca5627630bb4.png)


# 開發

本工具的開發環境為 Node.JS。

- 全域安裝以下依賴：

```
npm i -g less prettier typescript webpack webpack-cli
```

- Clone 本項目（或者先 Fork），並安裝依賴：

```
git clone https://github.com/xuejianxianzun/PixivBatchDownloader.git

cd ./PixivBatchDownloader

npm i
```

- 部分構建流程的指令：

```
npm run ts  // 編譯 ts 檔案到 dist 資料夾
npm run less // 編譯 less 檔案到 dist 資料夾
npm run fmt // 格式化所有檔案
```

- 一次執行所有構建流程並打包：

```
npm run build
```

- 在瀏覽器的擴充管理中，載入 dist 資料夾作為擴充。

# 幫助

## 常見問題

- 如果下載後的檔名異常，請停用其他有下載功能的瀏覽器擴充功能。

- 如果使用 ssr、v2ray 等工具，下載時開啟「全域代理」以提高下載速度。

## 支援的語言

簡體中文

繁體中文

English （機翻，韓語設定下也使用英語文檔）

日本語

歡迎您對翻譯做出改進，謝謝~

## 可以使用的頁面類型以及測試網址

0 [首頁](https://www.pixiv.net/)

1 [作品頁面](https://www.pixiv.net/artworks/72503012)

2 [列表頁](https://www.pixiv.net/users/544479/artworks)

2 [小說列表頁](https://www.pixiv.net/users/35419040/novels)

2 [Tag 頁面](https://www.pixiv.net/users/544479/artworks/%E6%9D%B1%E6%96%B9)

2 [小說 Tag 頁面](https://www.pixiv.net/users/35419040/novels/%E6%81%8B%E6%84%9B)

3 [收藏頁面-舊版](https://www.pixiv.net/bookmark.php)

4 [收藏頁面-新版](https://www.pixiv.net/users/9460149/bookmarks/artworks)

5 [搜尋頁面](https://www.pixiv.net/tags/saber/artworks?s_mode=s_tag)

6 [地區排行榜](https://www.pixiv.net/ranking_area.php?type=state&no=0)

7 [排行榜](https://www.pixiv.net/ranking.php)

8 [Pixivision](https://www.pixivision.net/zh/a/3190)

9 [收藏作品的詳情](https://www.pixiv.net/bookmark_detail.php?id=63148723)

10 [關注的新作品](https://www.pixiv.net/bookmark_new_illust.php)

11 [發現](https://www.pixiv.net/discovery)

12 [大家的新作品](https://www.pixiv.net/new_illust.php)

13 [小說頁面](https://www.pixiv.net/novel/show.php?id=12771688)

14 [系列小說頁面](https://www.pixiv.net/novel/series/1090654)

15 [小說搜尋頁面](https://www.pixiv.net/tags/%E7%99%BE%E5%90%88/novels)

16 [小說排行榜](https://www.pixiv.net/novel/ranking.php?mode=daily)

17 [關注的新作品-小說](https://www.pixiv.net/novel/bookmark_new.php)

18 [大家的新作品-小說](https://www.pixiv.net/novel/new.php)

19 [漫畫系列頁面](https://www.pixiv.net/user/3698796/series/61267)

20 [關注](https://www.pixiv.net/users/9460149/following)

[測試動圖轉換](https://www.pixiv.net/member.php?id=16274829)
