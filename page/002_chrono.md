---
title: 002《chrono》 让Chrome下载资源更容易
---
众所周知, chrome原生的下载功能并不好用, 以查看下载任务为例, 我们需要点击两次(点击右上角 **三个点** , 点击**下载内容**) 才能查看当前的任务

As we all know, Chrome's native download feature is not easy to use, for example,if we want to view the current download task, we must to click twice(first, click `three dots`; second, click `Download content`)

> ![](https://www.v2fy.com/asset/002_chrono/f720059371014ee6ba1da7af9d29a10f.png)

而使用了chrono, 只需要点击一次
 / However, chrono only need one click

> ![](https://www.v2fy.com/asset/002_chrono/f15a6a6dcc6c4fc2af074138805cd6b2.png)

## chrono还集成了一些超赞的功能, 可以按照"资源大小", 进行嗅探过滤! / Chrono also intergrates many amazing features, such as sniffing filter follow the size of the resource
> chrono可以对浏览器可见的页面进行**资源嗅探**, 并批量下载静态资源, 相当于爬虫,如果你是一个设计师, 对批量下载图片情有独钟, 又懒得写爬虫程序, 这个"资源嗅探"的功能或许能提升你下载图片的效率
> Chrono like a web crawler which can **sniffing** and **download** resource from website page. if you are a designer who like to collect images, but not good at make web crawler, the Chrono  will help you

> ![](https://www.v2fy.com/asset/002_chrono/5713085dce85442388def379cda874e9.png)

### 以抓取behance的图片为例 / For example, download the images from behance
- 切换至资源嗅探器 / Switch to resource sniffer
> ![](https://www.v2fy.com/asset/002_chrono/f4cff877fa2c452281130ef92524aa97.png)

- 按照图片的空间尺寸, 过滤图片 / Filter images as size of image

> ![](https://www.v2fy.com/asset/002_chrono/205a8b85047648fe9ff2ded77829748b.png)

> - 如果你的页面为懒加载(网页根据用户鼠标的滚动, 动态加载图片), 嗅探器会根据页面加载图片数量的变化, 自动添加新图片到嗅探列表
> - If your website page is lazy loaded (the webpage dynamically loads the image according to the user's mouse scrolling), the chromo will automatically add a new image to the sniffing list.


> - 过滤文件的尺寸可以设置的稍微大一些(比如200kb以上), 这样可以筛选出, 质量较高的图片
> - The size of the filter file can be set slightly larger (such as 200kb or more), so you can filter out the higher quality image.

- 批量勾选需要下载的图片, 开始下载
- Batch check the images you want to download, now , start downloading!

> ![](https://www.v2fy.com/asset/002_chrono/0f66d37422c044f1ae9aefb61f3a3753.png)

> 可以批量勾选图片, 也可单独勾选图片, 如果你懂正则, 还可以添加正则表达式来过滤图片(正则一般是留给程序员玩的...)
- 批量下载成功的图片
- Batch download successful images
> ![](https://www.v2fy.com/asset/002_chrono/dc89d5f5bc834980af5943dbd871ea1e.png)

> 建议适当提高过滤图片尺寸的标准, 获得尺寸更大, 质量更高的图片(以上展示的图片筛选条件为大于200kb)
> It is recommended to increase the standard for filtering image size to obtain larger and higher quality images (the above picture screening conditions are greater than 200kb)



## 小结:
- chrono是一个很好用的工具, 按照资源的大小来进行筛选, 的确是很巧妙的功能!
- Chrono is a very useful tool. Filtering according to the size of the resource is indeed a clever function!
- chrono的下载图片的速度很快, chrono充分利用了chrome已经下载的资源,按照用户定义的规则, 批量将浏览器已经下载好的图片, 保存到本地
- The chrono download resources are fast. Chrono makes full use of the resources that chrome has downloaded, and saves the downloaded pictures of the browser in batches according to user-defined rules.
- chrono不只是可以下载图片, 凡是提供下载链接的, chrono都可以下载, 可以完全替代chrome原生的下载
- chrono can not only download pictures, any download link, but also can completely replace chrome native download(you can try this link [wikileaks](https://file.wikileaks.org/file/))


## Chrome扩展`chrono` 下载链接 / Chrome extension `chrono` download link

https://chrome.google.com/webstore/detail/chrono-download-manager/mciiogijehkdemklbdcbfkefimifhecn

> 历史版本下载地址 / Historic version : https://crx.dam.io/ext/mciiogijehkdemklbdcbfkefimifhecn.html 



## 对其它浏览器的支持 / Support for other browsers

| FireFox | Safari | Opera |
| - | - | - |
| NoSupport | NoSupport | NoSupport | 

---

## 写在最后(我需要你的支持) / At the end (I need your support)

- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)


- This article is part of the **ChromeAppHeroes** project. Github link : [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes) 

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.



