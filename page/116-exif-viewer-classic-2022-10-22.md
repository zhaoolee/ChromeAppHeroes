---
title: Chrome插件英雄榜116《EXIF Viewer Classic》查看网页中摄影图片的拍摄时间光圈快门等Exif参数信息
---

见到一张优秀的摄影图片，摄影爱好者会关注一下摄影参数，以便日后模仿学习，我们手机或相机拍摄的原图，往往会带有拍摄时的参数信息（光圈，快门，感光度，镜头参数，拍摄时间），图像处理软件也会在图片中保留软件信息，这部分信息被称为Exif，《EXIF Viewer Classic》是一款可以查看图片Exif信息的插件。

![使用效果](https://cdn.fangyuanxiaozhan.com/assets/1666428160952mwnyXnni.gif)

zhaoolee 在2022年10月20日用手机拍摄了几张照片，用Adobe Lightroom 稍加处理后，上传到了这张网页上， https://fangyuanxiaozhan.com/p/2022-10-20-19-53-29-ns-mac/ ，在网页上通过《EXIF Viewer Classic》查看照片Exif信息的效果如图所示。

![鼠标浮动查看Exif信息](https://cdn.fangyuanxiaozhan.com/assets/1666425831429detYetk3.png)

观察上图，《EXIF Viewer Classic》并不会对所有网页图片进行处理，只有当用户的手柄浮动到照片之上，才会试试读取图片Exif信息，并以文字浮层的形式，展示到照片顶部（我的鼠标浮动在顶部图片显示出了Exif信息，而底部图片没有文字浮层）。

## 支持自定义显示数据模板



- Google商店评论区老哥贡献的中文模板

```javascript
设备 {ExifViewer.CameraModel}　   焦距 {FocalLength}mm　   感光速率 ISO{ISOSpeedRatings}　   光圈系数 F{FNumber}　  光圈值 {ApertureValue}　   曝光时间 {ExposureTime}s　  曝光补偿 {ExposureBias}EV　  曝光程序 {ExposureProgram}　   闪光灯 {Flash}　  测光模式 {MeteringMode}　  焦距 {FocalLength}　  白平衡 {WhiteBalance}　   色域 {ColorSpace}　  尺寸 {ExifViewer.Image.Width} x {ExifViewer.Image.Height}　  日期 {DateTimeOriginal}　  软件 {Software}
```

![自定义数据](https://cdn.fangyuanxiaozhan.com/assets/1666426154983JtwA8e26.png)

设置模板后的效果

![设置模板后的效果](https://cdn.fangyuanxiaozhan.com/assets/1666426258416ZxK8S5pM.png)



如果照片包含GPS信息，会出现一个GPS红色标识，点击红色标识，会在Google 地图中展示出地点（在线测试地址 http://regex.info/blog/photostream/main.html）



![image-20221022162003820](https://cdn.fangyuanxiaozhan.com/assets/16664268208228hQziwc0.png)

- 在Google地图展示地点信息

![在Google地图展示GPS](https://cdn.fangyuanxiaozhan.com/assets/1666426877291bWzD5CB0.png)



## 《EXIF Viewer Classic》 下载链接

<table style="table-layout: fixed;">
<tbody>
<tr>
<td><div style="text-align: center;"><div style="font-weight: bold">Chrome</div><br/><div style="text-align: center;"><img  style="width:50px; height:auto;" src="https://www.v2fy.com/asset/0i/ChromeAppHeroes/page/001_markdown_here.assets/chromeappheroes-chrome-icon.png"/></div></div></td>
<td><div style="text-align: center;" ><div style="font-weight: bold">Edge</div><br/><div><img style="width:50px; height:auto;" src="https://www.v2fy.com/asset/0i/ChromeAppHeroes/page/001_markdown_here.assets/chromeappheroes-edge-icon.png"/></div></div></td>
<td><div style="text-align: center;" ><div style="font-weight: bold">FireFox</div><br/><div style="text-align: center;"><img  style="width:50px; height:auto;" src="https://www.v2fy.com/asset/0i/ChromeAppHeroes/page/001_markdown_here.assets/chromeappheroes-firefox-icon.png"/></div></div></td>
<td><div style="text-align: center;" ><div style="font-weight: bold">离线安装包</div><br/><div style="text-align: center;"><img  style="width:50px; height:auto;" src="https://www.v2fy.com/asset/0i/ChromeAppHeroes/page/001_markdown_here.assets/chromeappheroes-github-download.png"/></div></div></td>
</tr>
<tr>
<td>
<div style="text-align: center;">
<a  href="https://chrome.google.com/webstore/detail/exif-viewer-classic/nafpfdcmppffipmhcpkbplhkoiekndck">下载链接 / Download link</a>
</div>
</td>
<td>
<div style="text-align: center;">
暂无
</div>
</td>
<td>
<div style="text-align: center;">
暂无
</div>
</td>
<td>
<div style="text-align: center;"><a  href="https://cdn.jsdelivr.net/gh/zhaoolee/ChromeAppHeroes/backup/116-exif-viewer-classic.zip">下载链接 / Download link</a></div>
</td>
</tr>
</tbody>
</table>

## 小结

为了减少图片体积，保护用户隐私，我们在微信，微博等社交平台发送的图片，Exif信息往往被自动删除了，如果摄影爱好者要分享自己图片的Exif信息，最简单省事的方式还是建自己的网站，40GB  5MB带宽的服务器，装个WordPress程序，每天分摊的成本也就几毛钱。


## 写在最后(我需要你的支持) / At the end (I need your support)

- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)


- This article is part of the **ChromeAppHeroes** project. Github link : [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes) 

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.

