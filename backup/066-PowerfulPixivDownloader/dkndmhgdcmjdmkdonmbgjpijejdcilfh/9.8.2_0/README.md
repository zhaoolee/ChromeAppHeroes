[English](https://github.com/xuejianxianzun/PixivBatchDownloader/blob/master/README-EN.md)

[繁體中文](https://github.com/xuejianxianzun/PixivBatchDownloader/blob/master/README-ZH-TW.md)

[Discord 频道](https://discord.gg/eW9JtTK)

![version](https://img.shields.io/github/v/release/xuejianxianzun/PixivBatchDownloader)

<!-- TOC -->

- [简介](#简介)
- [安装](#安装)
  - [在线安装](#在线安装)
  - [离线安装](#离线安装)
- [Wiki](#wiki)
- [鸣谢](#鸣谢)
- [支持和捐助](#支持和捐助)
- [开发](#开发)
- [帮助](#帮助)
  - [常见问题](#常见问题)
  - [支持的语言](#支持的语言)
  - [可以使用的页面类型以及测试网址](#可以使用的页面类型以及测试网址)
- [友情链接](#友情链接)

<!-- /TOC -->

# 简介

这是一个 Chrome 浏览器扩展程序，用于批量下载 Pixiv 上的图片和小说。功能强大，支持多种页面类型。

现在也增加了一些辅助功能，如去除广告、快速收藏、看图模式、给未分类作品添加 tag 等。

![PixivBatchDownloader](https://raw.githubusercontent.com/wiki/xuejianxianzun/PixivBatchDownloader/images/ui1.png)

[动态截图](https://raw.githubusercontent.com/wiki/xuejianxianzun/PixivBatchDownloader/images/20200724174827.gif)

[访问官网](https://pixiv.download/)

[在 Bilibili 查看视频教程](https://www.bilibili.com/video/BV1g54y1v7nV)

# 安装

## 在线安装

1. **Chromium 内核**的浏览器可以从 **[Chrome Web Store](https://chrome.google.com/webstore/detail/powerful-pixiv-downloader/dkndmhgdcmjdmkdonmbgjpijejdcilfh)** 安装本扩展。

2. **Microsoft Edge** 浏览器也可以从 **[Microsoft Edge 外接程序](https://microsoftedge.microsoft.com/addons/detail/hpcoocgpiepjcngmhhknkflhpkoklphp)** 安装本扩展。

**注意：** 有时候 Chrome Web Store 上的扩展可能不是最新版本。如果有需要，你可以进行离线安装，或者使用 Edge 浏览器从 Edge 商店安装。

## 离线安装

如果您不能在线安装，您可以从 [releases 页面](https://github.com/xuejianxianzun/PixivBatchDownloader/releases/latest) 离线安装。

---------

- 下载的文件会保存在浏览器的下载目录里。

- 请关闭浏览器设置中的“下载前询问每个文件的保存位置”选项，以免在下载时出现弹窗。

# Wiki

[查看 Wiki](https://xuejianxianzun.github.io/PBDWiki)

# 鸣谢

- 感谢 [道滿](https://zhtw.me/) 、 [VHlqg](https://github.com/VHlqg) 翻译繁体中文。

- 感谢 [光の軌跡](https://github.com/jiaer24) 翻译日语。

- 感谢 [Reinford0](https://github.com/Reinford0) 对本工具的测试和改进。

- 感谢 [z2n](https://github.com/z2n) 对本工具项目构建做出的改进。

# 支持和捐助

如果您感觉本脚本帮到了您，您可以对我进行支持和捐助，不胜感激 (*╹▽╹*)

1. 国内的众筹赞助平台“爱发电”（类似于 patreon）。

[https://afdian.net/@xuejianxianzun](https://afdian.net/@xuejianxianzun)

2. 可通过微信和支付宝扫码转账

![支付宝](https://i.loli.net/2019/04/04/5ca5627614396.png) ![微信](https://i.loli.net/2019/04/04/5ca5627630bb4.png)


# 开发

本工具的开发环境为 Node.JS。

- 全局安装以下依赖：

```
npm i -g less prettier typescript webpack webpack-cli
```

- Clone 本项目（或者先 Fork），并安装依赖：

```
git clone https://github.com/xuejianxianzun/PixivBatchDownloader.git

cd ./PixivBatchDownloader

npm i
```

- 部分构建流程的命令：

```
npm run ts  // 编译 ts 文件到 dist 文件夹
npm run less // 编译 less 文件到 dist 文件夹
npm run fmt // 格式化所有文件
```

- 一键执行所有构建流程并打包：

```
npm run build
```

- 在浏览器的扩展管理里，加载 dist 文件夹作为扩展。

# 帮助

## 常见问题

- 如果下载后的文件名异常，请禁用其他有下载功能的浏览器扩展。

- 如果使用 ssr、v2ray 等工具，下载时开启“全局代理”以提高下载速度。

- 如有其他问题或建议，欢迎加 **QQ 群 1160156511** 进行交流。

## 支持的语言

简体中文

繁體中文

English （机翻，韩语设置下也使用英语文本）

日本語

欢迎您对翻译做出改进，谢谢~

## 可以使用的页面类型以及测试网址

0 [首页](https://www.pixiv.net/)

1 [作品页面](https://www.pixiv.net/artworks/72503012)

2 [插画列表页](https://www.pixiv.net/users/544479/artworks)

2 [小说列表页](https://www.pixiv.net/users/35419040/novels)

2 [Tag 页面](https://www.pixiv.net/users/544479/artworks/%E6%9D%B1%E6%96%B9)

2 [小说 Tag 页面](https://www.pixiv.net/users/35419040/novels/%E6%81%8B%E6%84%9B)

3 [收藏页面-旧版](https://www.pixiv.net/bookmark.php)

4 [收藏页面-新版](https://www.pixiv.net/users/9460149/bookmarks/artworks)

5 [搜索页面](https://www.pixiv.net/tags/saber/artworks?s_mode=s_tag)

6 [地区排行榜](https://www.pixiv.net/ranking_area.php?type=state&no=0)

7 [插画、漫画排行榜](https://www.pixiv.net/ranking.php)

8 [Pixivision](https://www.pixivision.net/zh/a/3190)

9 [收藏作品的详情](https://www.pixiv.net/bookmark_detail.php?id=63148723)

10 [关注的新作品](https://www.pixiv.net/bookmark_new_illust.php)

11 [发现](https://www.pixiv.net/discovery)

12 [大家的新作品](https://www.pixiv.net/new_illust.php)

13 [小说页面](https://www.pixiv.net/novel/show.php?id=12771688)

14 [系列小说页面](https://www.pixiv.net/novel/series/1090654)

15 [小说搜索页面](https://www.pixiv.net/tags/%E7%99%BE%E5%90%88/novels)

16 [小说排行榜](https://www.pixiv.net/novel/ranking.php?mode=daily)

17 [关注的新作品-小说](https://www.pixiv.net/novel/bookmark_new.php)

18 [大家的新作品-小说](https://www.pixiv.net/novel/new.php)

19 [漫画系列页面](https://www.pixiv.net/user/3698796/series/61267)

20 [关注](https://www.pixiv.net/users/9460149/following)

# 友情链接

[PixivUserBatchDownload](https://github.com/Mapaler/PixivUserBatchDownload/)

Pixiv User Batch Download 简称 PUBD，它是一个 UserScript 脚本，可以让你在 Pixiv 的画师页面里批量抓取所有作品，发送到 Aria2 下载，适合动手能力强的用户使用。

- **配合 Aria2 下载，可发送到本地或远端路由器。**

- 可使用掩码自定义保存文件夹、重命名。

[PixivFanboxDownloader](https://github.com/xuejianxianzun/PixivFanboxDownloader)

用于批量下载 Pixiv Fanbox 上的文件的浏览器扩展程序。
