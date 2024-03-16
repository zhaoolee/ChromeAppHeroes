---
title: 121《Console Importer》在Chrome直接使用npm军火库, 在控制台动态展示一张猫猫图
---

最近发现了一个很不错的开发者扩展程序《Console Importer》， 让javascript程序员们，可以直接在浏览器快速安装各种好用的npm依赖包（npm包的丰富程度堪称军火库），并进行编程。


安装完成《Console Importer》后，想要使用《Console Importer》开始编程，首先要打开**开发者工具**，下图以Chrome浏览器打开**开发者工具**为例

![](https://cdn.fangyuanxiaozhan.com/assets/1703762115407cczZTTYf.png)


## 使用day.js 获取当前年月日


```
$i('dayjs')
const currentTime = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss')

console.log(
  `This is %c ${currentTime}`,
  "color: yellow; font-style: italic; background-color: blue;padding: 2px",
);
```

![](https://cdn.fangyuanxiaozhan.com/assets/1703757766204bEKYdmJ2.png)计算时间是经典功能了，如果想折腾练手，可以写一个类似下图的世界时钟，shell版本的参考代码 https://github.com/zhaoolee/WelcomeMrStark

![image-20231228190913056](https://cdn.fangyuanxiaozhan.com/assets/1703761753907aCR3zntB.png)

## 请求一言的api, 动态获取一句话

api能为程序带来无限可能，以下是请求一言api的的示例代码

```
$i('axios')
axios('https://v1.hitokoto.cn').then((res)=>{console.log(res.data)})
```

![image-20231228190336516](https://cdn.fangyuanxiaozhan.com/assets/1703761417247cm5zxNyr.png)

## 请求一张猫猫图，转换为base64, 并展示到Console 控制台

如果你感觉只是展示文字不够有趣，可以参考以下代码，通过Console 打印出图片。（Chrome早期版本可以直接通过图片url展示图片，但新版本Chrome只能把图片下载转换为base64, 才可以展示）



```
$i('axios');
$i('crypto-js');

axios.get('https://placekitten.com/200/300', { responseType: 'arraybuffer' })
  .then((response) => {
    // Convert the ArrayBuffer to WordArray
    const wordArray = CryptoJS.lib.WordArray.create(response.data);
    // Convert the WordArray to a base64 string
    const base64String = CryptoJS.enc.Base64.stringify(wordArray);
    const imageUrl = `data:image/jpeg;base64,${base64String}`; // Assuming the image is a JPEG
    // Create a new image and assign the base64 string as the source
    const image = new Image();
    image.onload = function() {
      // Once the image is loaded, use its dimensions to set the console padding
      const style = [
        'font-size: 1px;',
        `padding: ${this.naturalHeight / 2}px ${this.naturalWidth / 2}px;`, // Divide by 2 because of the 1px font-size trick
        `background: url(${imageUrl}) no-repeat;`,
        'background-size: contain;'
      ].join(' ');
      console.log('%c ', style);
    };
    image.src = imageUrl;
  })
  .catch((error) => {
    console.error('Error fetching or encoding the image:', error);
  });

```



![Console控制台打印图片](https://cdn.fangyuanxiaozhan.com/assets/1703761331008zP4hFn3a.gif)



## Console Importer开源地址:

https://github.com/pd4d10/console-importer

## 《Console Importer》 下载链接


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
<a  href="https://chromewebstore.google.com/detail/console-importer/hgajpakhafplebkdljleajgbpdmplhie">下载链接 / Download link</a>
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
<div style="text-align: center;"><a  href="https://cdn.jsdelivr.net/gh/zhaoolee/ChromeAppHeroes/backup/121-console-importer.zip">下载链接 / Download link</a></div>
</td>
</tbody>
</table>


## 小结

Chrome是理想的计算单元，任何设备装上浏览器，都能跑复杂的程序。

有了《Console Importer》这种好用的工具，我感觉《用Chrome学编程》是一个值得研究的工程。

《Console Importer》会让Web工程师感觉很爽，但项目本身还有一些需要完善的点，我认为作者可以添加卸载npm包的功能，对于国内的程序员而言，允许设置npm软件源也是刚需。




## 写在最后(我需要你的支持) / At the end (I need your support)

- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)


- This article is part of the **ChromeAppHeroes** project. Github link : [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes) 

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.

