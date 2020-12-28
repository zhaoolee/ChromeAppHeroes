---
title: 091《FasterChrome》鼠标悬停预加载链接让你的Chrome起飞
---

全球排名第一的建站工具WordPress，有一款非常受欢迎的扩展instant-page，它可以通过鼠标悬停预加载链接来提高Chrome访问网站的速度，开源地址:

 [https://github.com/instantpage/instant.page/blob/master/instantpage.js](https://github.com/instantpage/instant.page/blob/master/instantpage.js)

![image-ttt20201228112338869](https://www.v2fy.com/asset/0i/ChromeAppHeroes/page/091-faster-chrome-2020-12-28.assets/image-ttt20201228112338869.png)

从源码可知，鼠标悬停65毫秒，会自动加载下一页网页

## 基于instant-page的FasterChrome

打开Chrome开发者工具，可以看到鼠标悬浮到超链接时，插件会发起预加载的请求

![page](https://www.v2fy.com/asset/0i/ChromeAppHeroes/page/091-faster-chrome-2020-12-28.assets/page.gif)

![image-20201228114325598](https://www.v2fy.com/asset/0i/ChromeAppHeroes/page/091-faster-chrome-2020-12-28.assets/image-20201228114325598.png)

完成预加载后，当鼠标点击页面时，打开页面的速度会很快

![091-pwc](https://www.v2fy.com/asset/0i/ChromeAppHeroes/page/091-faster-chrome-2020-12-28.assets/091-pwc.gif)



## 如果你是一名开发者,可以引入以下代码，让网站提升至少1%的性能

```javascript
<script src="https://instant.page/5.1.0" type="module" integrity="sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw"></script>
```



## 《FasterChrome》 下载链接

<table style="table-layout: fixed;">
<tbody>
<tr>
<td><div style="text-align: center;"><div style="font-weight: bold">Chrome</div><br/><div><img  style="width:50px; height:auto;" src="https://www.v2fy.com/asset/0i/ChromeAppHeroes/page/001_markdown_here.assets/chromeappheroes-chrome-icon.png"/></div></div></td>
<td><div style="text-align: center;" ><div style="font-weight: bold">Edge</div><br/><div><img style="width:50px; height:auto;" src="https://www.v2fy.com/asset/0i/ChromeAppHeroes/page/001_markdown_here.assets/chromeappheroes-edge-icon.png"/></div></div></td>
<td><div style="text-align: center;" ><div style="font-weight: bold">FireFox</div><br/><div><img  style="width:50px; height:auto;" src="https://www.v2fy.com/asset/0i/ChromeAppHeroes/page/001_markdown_here.assets/chromeappheroes-firefox-icon.png"/></div></div></td>
<td><div style="text-align: center;" ><div style="font-weight: bold">离线安装包</div><br/><div><img  style="width:50px; height:auto;" src="https://www.v2fy.com/asset/0i/ChromeAppHeroes/page/001_markdown_here.assets/chromeappheroes-github-download.png"/></div></div></td>
</tr>
<tr>
<td>
<div style="text-align: center;">
<a  href="https://chrome.google.com/webstore/detail/fasterchrome/nmgpnfccjfjhdenioncabecepjcmdnjg">下载链接 / Download link</a>
</div>
</td>
<td>
<div style="text-align: center;">暂无</div>
</td>
<td>
<div style="text-align: center;">暂无</div>
</td>
<td>
<div style="text-align: center;"><a  href="https://raw.githubusercontent.com/zhaoolee/ChromeAppHeroes/master/backup/091-faster-chrome.zip">下载链接 / Download link</a></div>
</td>
</tr>
</tbody>
</table>


## 小结

FasterChrome的实现方法，与各类玄学黑科技有本质的区别，通过预先缓存，让页面打开的速度有肉眼可见的提升。

人类从指向超链接到点击，平均需要300ms的反应时间，而FasterChrome让时间缩短为65mm，每个页面相当于提前抢跑了235ms，对于使用了CDN的网站，235ms可以下载100KB～300KB左右的资源文件，当人类点击下鼠标的时候，页面的html已经基本下载完成了，轻松实现了页面秒开的效果。



## 写在最后(我需要你的支持) / At the end (I need your support)

- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)


- This article is part of the **ChromeAppHeroes** project. Github link : [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes) 

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.

