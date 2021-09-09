---
title: Chrome插件英雄榜097《假装水墨屏》让网页内容变成水墨屏效果
---



《假装水墨屏》是一款Tampermonkey脚本，需要先完成Tampermonkey安装，才可以使用。Tampermonkey安装和使用教程在这里 [《Tampermonkey》 油猴子! 给浏览器开个挂: https://www.v2fy.com/p/004_tampermonkey/](https://www.v2fy.com/p/004_tampermonkey/)



《假装水墨屏》可以让网页内容变成水墨屏，彩色&反色水墨屏模式效果



```
// ==UserScript==
// @name        假装水墨屏
// @name:en-US  Fake Ink Screen
// @namespace   Fake Ink Screen
// @match       *://*/*
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_registerMenuCommand
// @run-at      document-start
// @inject-into content
// @version     0.2.3
// @author      稻米鼠
// @created     2020-07-24 13:02:56
// @updated     2020-08-10 18:51:07
// @description 假装用的水墨屏，阅读不累眼（可能吧）。最新加入彩色&反色水墨屏模式，在脚本菜单中切换。
// ==/UserScript==
 
(function(){
// 闭包 Start
GM_addStyle(`
  html.gray-ink-screen {
    -webkit-filter: grayscale(100%) brightness(120%);
    -moz-filter: grayscale(100%) brightness(120%);
    -ms-filter: grayscale(100%) brightness(120%);
    -o-filter: grayscale(100%) brightness(120%);
    filter: grayscale(100%) brightness(120%);
  }
  html.dark-ink-screen {
    -webkit-filter: grayscale(100%) brightness(120%) invert(100%);
    -moz-filter: grayscale(100%) brightness(120%) invert(100%);
    -ms-filter: grayscale(100%) brightness(120%) invert(100%);
    -o-filter: grayscale(100%) brightness(120%) invert(100%);
    filter: grayscale(100%) brightness(120%) invert(100%);
  }
  html.color-ink-screen {
    -webkit-filter: saturate(60%) contrast(160%);
    -moz-filter: saturate(100%) contrast(160%);
    -ms-filter: saturate(60%) contrast(160%);
    -o-filter: saturate(60%) contrast(160%);
    filter: saturate(60%) contrast(160%);
  }
  html.gray-ink-screen,
  html.gray-ink-screen body,
  html.gray-ink-screen .ink-background,
  html.dark-ink-screen,
  html.dark-ink-screen body,
  html.dark-ink-screen .ink-background {
    background-color: rgb(200, 200, 200) !important
  }
  html.color-ink-screen,
  html.color-ink-screen body,
  html.color-ink-screen .ink-background {
    background-color: rgb(198, 198, 198) !important
  }
  html.dark-ink-screen .ink-font,
  html.gray-ink-screen .ink-font {
    color: rgb(66, 66, 66) !important
  }
  html.color-ink-screen .ink-font {
    color: rgb(98, 98, 98) !important
  }
  html.gray-ink-screen * {
    text-shadow: 0 0 1.2rem rgba(0, 0, 0, .24), 0 0 .5px rgba(0, 0, 0, .5)
  }
  html.color-ink-screen * {
    text-shadow: 0 0 1.2rem rgba(0, 0, 0, .2), 0 0 .5px rgba(0, 0, 0, .4)
  }
`);
const modes = ['gray-ink-screen', 'color-ink-screen', 'dark-ink-screen']
const toggleMode = (modeIndex)=>{
  for(const className of modes) {
    document.body.parentElement.classList.remove(className)
  }
  document.body.parentElement.classList.add(modes[modeIndex])
}
toggleMode(GM_getValue('mode', 0))
GM_registerMenuCommand('切换【黑白&彩色&反色】水墨屏',()=>{
  let mode = GM_getValue('mode', 0)
  mode = mode>=2 ? 0 : ++mode
  toggleMode(mode)
  GM_setValue('mode', mode)
})
window.addEventListener('load', () => {
  const inkEl = async(el) => {
    const fontColor = window.getComputedStyle(el).color.match(/\d+/g);
    const rgbVal = window.getComputedStyle(el).backgroundColor.match(/\d+/g);
    if(!fontColor || !rgbVal) return;
    if (
      fontColor &&
      +fontColor[0] + +fontColor[1] + +fontColor[2] > 255 &&
      +fontColor[0] + +fontColor[1] + +fontColor[2] < 588
    ) {
      el.classList.add('ink-font');
    }
    if (rgbVal[3] && rgbVal[3] === '0') return;
    if (
      (+rgbVal[0] + +rgbVal[1] + +rgbVal[2]) / (rgbVal[3] ? +rgbVal[3] : 1) >
      640
    )
      el.classList.add('ink-background');
  };
  document.body.querySelectorAll('*').forEach((el) =>  inkEl(el) );
  const obOptions = {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
    attributeOldValue: false,
    characterDataOldValue: false,
    attributeFilter: [],
  };
  const observer = new MutationObserver(async (records, observer) => {
    observer.disconnect();
    const els = records
      // 改变的类型为 characterData，并且不是 body 元素的话
      .filter((el) => /^characterData$/i.test(el.type))
      .map((el) => el.target); // 把发生改变的元素放入合集
    // 改变的类型为 childList，则把新增的元素放入合集
    records
      .filter((el) => /^childList$/i.test(el.type))
      .forEach((el) => {
        el.addedNodes.forEach((node) => els.push(node));
      });
    // 遍历合集中所有元素
    for await (el of els) {
      if(el.nodeType === 1) {
        inkEl(el);
        el.querySelectorAll('*').forEach(e=>inkEl(e))
      }
    }
    // 页面处理完成之后重新监控页面变化
    observer.observe(document.body, obOptions);
  });
  observer.observe(document.body, obOptions);
});
// 闭包 End
})()
```

## 使用教程

![往油猴中导入墨水屏脚本，并使用](https://cdn.fangyuanxiaozhan.com/assets/1614414669516WxnchM5k.gif)

![模拟墨水屏幕效果](https://cdn.fangyuanxiaozhan.com/assets/1614415339612H5D6eJ6c.png)

往油猴编辑器中粘贴脚本后，按Ctrl+s键即可保存，自动跳转到脚本列表页面，然后刷新页面，脚本即刻生效。



![如果不需要墨水屏效果，可以手动关闭](https://cdn.fangyuanxiaozhan.com/assets/1614414901570SY5jPdPz.png)





## 《假装水墨屏》 下载链接

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
<a  href="https://cdn.jsdelivr.net/gh/zhaoolee/ChromeAppHeroes/backup/097-fake-ink-screen.zip">下载链接 / Download link</a>
</div>
</td>
<td>
<div style="text-align: center;">
<a href="https://cdn.jsdelivr.net/gh/zhaoolee/ChromeAppHeroes/backup/097-fake-ink-screen.zip">下载链接 / Download link</a>
</div>
</td>
<td>
<div style="text-align: center;">
<a href="https://cdn.jsdelivr.net/gh/zhaoolee/ChromeAppHeroes/backup/097-fake-ink-screen.zip">下载链接 / Download link</a>
</div>
</td>
<td>
<div style="text-align: center;"><a  href="https://cdn.jsdelivr.net/gh/zhaoolee/ChromeAppHeroes/backup/097-fake-ink-screen.zip">下载链接 / Download link</a></div>
</td>
</tr>
</tbody>
</table>


## 小结



墨水屏相当于把屏幕彩色变成了舒适的黑白，眼睛会舒服一些。





## 写在最后(我需要你的支持) / At the end (I need your support)

- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)


- This article is part of the **ChromeAppHeroes** project. Github link : [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes) 

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.

