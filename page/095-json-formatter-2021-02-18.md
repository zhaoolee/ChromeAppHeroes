---
title: Chrome插件英雄榜095《JsonFormatter》轻量化Json开源格式化工具查看一言api接口字段数据结构
---

JsonFormatter可以让开发者在浏览器查看接口的的层级信息，方便开发。



JsonFormatter的使用非常简单，安装即可自动生效，处理的效果也很明显，让json数据结构清晰可见。




### 我们以一言接口为例

[https://v1.hitokoto.cn/?encode=json](https://v1.hitokoto.cn/?encode=json)



## 原版



![原版 星星只有在夜里才璀璨夺目啊](https://cdn.fangyuanxiaozhan.com/assets/16136139047321Ehk5Px3.png)

### 启用扩展程序JsonFormatter处理后



![扩展程序JsonFormatter处理后](https://cdn.fangyuanxiaozhan.com/assets/1613613990520CFHtn3pb.png)

数据结构顿时一目了然

![启用json-formatter](https://cdn.fangyuanxiaozhan.com/assets/1613616381100e0Zf185w.gif)

## 如何使用Json返回的数据



在网页插入以下代码


```javascript
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<h2>经典台词</h2>
<div id="yiyan_hitokoto"></div>
<div id="yiyan_from" style="text-align: right">
</div>
<script>
		 jQuery.ajax({url:'https://v1.hitokoto.cn/'}).done(function(content,err){
        console.log("content::", content, "err::", err);
        if(err === "success"){
            var yiyan_hitokoto = "";
            var yiyan_from= "";
					console.log("content22::", content, "err::", err);
            yiyan_hitokoto = content.hitokoto;
					   yiyan_from ="--" + content.from;
					
					console.log("=yiyan_hitokoto=>>", yiyan_hitokoto);
										console.log("=yiyan_from=>>", yiyan_from);

            jQuery("#yiyan_hitokoto").html(yiyan_hitokoto);
					jQuery("#yiyan_from").html(yiyan_from);
        }

    })
</script>
```


最终效果为：

![经典台词](https://cdn.fangyuanxiaozhan.com/assets/1613615517184bwRGhd3M.png)



每次刷新页面，都会自动更新内容




## 《JsonFormatter》开源地址



[https://github.com/callumlocke/json-formatter](https://github.com/callumlocke/json-formatter)



## 《JsonFormatter》 下载链接

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
<a  href="https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa">下载链接 / Download link</a>
</div>
</td>
<td>
<div style="text-align: center;">
<a href="https://microsoftedge.microsoft.com/addons/detail/json-formatter-for-edge/njpoigijhgbionbfdbaopheedbpdoddi">下载链接 / Download link</a>
</div>
</td>
<td>
<div style="text-align: center;">
暂无
</div>
</td>
<td>
<div style="text-align: center;"><a  href="https://cdn.jsdelivr.net/gh/zhaoolee/ChromeAppHeroes/backup/095-json-formatter.zip">下载链接 / Download link</a></div>
</td>
</tr>
</tbody>
</table>


## 小结



JsonFormatter几乎是开发必备的工具，没有什么附加功能，使用简单，轻量高效，功能够用。





## 写在最后(我需要你的支持) / At the end (I need your support)

- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)


- This article is part of the **ChromeAppHeroes** project. Github link : [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes) 

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.

