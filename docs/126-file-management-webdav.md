---
title: 126《File Management - WebDav》优雅使用浏览器通过WebDav上传下载管理自建网盘的文件
---

我在自己的树莓派搭建了一个webdav服务, 配合自建的zerotier服务，可以通过虚拟网络直接上传下载文件到树莓派。实现了低成本的网络存储。(自建webdav服务, 和自建的zerotier服务，在我的《树莓派不吃灰》系列 https://github.com/zhaoolee/pi 的第26篇和29篇有介绍，感兴趣可以自行查看，这里不做展开)



File Management - WebDav 是一款开源工具, 开源地址 https://github.com/hocgin/addone-webdav , 安装完成后，只需配置好webdav的相关参数，即可开始使用

![image-20241207152843053](https://cdn.fangyuanxiaozhan.com/assets/17335565247196pGmmRta.png)

支持批量上传本地文件到远程服务器，并可以实时预览图片

![2024-12-07 15.48.01](https://cdn.fangyuanxiaozhan.com/assets/1733557853441znX8rGi6.gif)

右键文件，也能进行基本的管理



![image-20241207155226751](https://cdn.fangyuanxiaozhan.com/assets/1733557947631kZEGDraT.png)

## 《File Management - WebDav》 下载链接

<table style="table-layout: fixed;">
<tbody>
<tr>
<td><div style="text-align: center;"><div style="font-weight: bold">Chrome</div><br/><div style="text-align: center;"><img  style="width:50px; height:auto;" src="https://v2fy.com/asset/0i/ChromeAppHeroes/page/001_markdown_here.assets/chromeappheroes-chrome-icon.png"/></div></div></td>
<td><div style="text-align: center;" ><div style="font-weight: bold">Edge</div><br/><div><img style="width:50px; height:auto;" src="https://v2fy.com/asset/0i/ChromeAppHeroes/page/001_markdown_here.assets/chromeappheroes-edge-icon.png"/></div></div></td>
<td><div style="text-align: center;" ><div style="font-weight: bold">FireFox</div><br/><div style="text-align: center;"><img  style="width:50px; height:auto;" src="https://v2fy.com/asset/0i/ChromeAppHeroes/page/001_markdown_here.assets/chromeappheroes-firefox-icon.png"/></div></div></td>
<td><div style="text-align: center;" ><div style="font-weight: bold">离线安装包</div><br/><div style="text-align: center;"><img  style="width:50px; height:auto;" src="https://v2fy.com/asset/0i/ChromeAppHeroes/page/001_markdown_here.assets/chromeappheroes-github-download.png"/></div></div></td>
</tr>
<tr>
<td>
<div style="text-align: center;">
<a  href="https://chromewebstore.google.com/detail/file-management-webdav/famepaffkmmhdefbapbadnniioekdppm">下载链接 / Download link</a>
</div>
</td>
<td>
<div style="text-align: center;">
<a  href="https://microsoftedge.microsoft.com/addons/detail/file-management-webdav/kdofmcdoliddlhmmcfhdgkebdapkdmcc">下载链接 / Download link</a>
</div>
</td>
<td>
<div style="text-align: center;">
暂无
</div>
</td>
<td>
<div style="text-align: center;"><a  href="https://cdn.jsdelivr.net/gh/zhaoolee/ChromeAppHeroes/backup/126-file-management-webdav.zip">下载链接 / Download link</a></div>
</td>
</tbody>
</table>



## 小结

webdav与smb协议一样流行，在各大操作系统中被广泛支持，webdav基于http, 在不稳定的网络环境下表现更好，因为http协议本身就设计用于处理这种情况。在中国各类局域网的环境下，它可以轻松穿透防火墙，因为大多数防火墙默认允许HTTP/HTTPS流量。

通过使用File Management - WebDav 这款工具，我们可以通过浏览器，轻松管理自己的远程网盘资源，实现真正轻松便携的网络硬盘。




## 写在最后(我需要你的支持) / At the end (I need your support)

- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)


- This article is part of the **ChromeAppHeroes** project. Github link : [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes) 

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.
