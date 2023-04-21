---
title: Chrome插件英雄榜117《ChatGPT HeartBeat》让ChatGPT Web服务保持连接，避免反复刷新ChatGPT Web版页面
---


今天是2023年4月21日，ChatGPT 正在内测GPT4, 比GPT3.5好用, 但api版本需要白名单，ChatGPT Web版则需要开通每月20美元的ChatGPT PLUS

![3小时25条](https://cdn.fangyuanxiaozhan.com/assets/16820738481821YNKaMDC.png)

但ChatGPT 配备了 CloudFlare 防火墙，不仅会检测用户访问页面时的IP, 还会每隔一段时间就断开用户（包含ChatGPT PLUS用户）的连接，

![wrong](https://cdn.fangyuanxiaozhan.com/assets/1682073750657dMCPGkf7.png)



用户为了继续使用，不得不刷新页面，刷新页面还可能加载不出页面，用户体验大打折扣。



![image-20230421183517497](https://cdn.fangyuanxiaozhan.com/assets/1682073318135HEHaEmEp.png)



最骚的是，ChatGPT限制了用户刷新页面的次数， session请求回复: `Too many requests in 1 hour. Try again later.`  用户只能一小时后再试...

![刷新页面报错](https://cdn.fangyuanxiaozhan.com/assets/16820734480662mHYW8de.png)



而ChatGPT HeartBeat 这个油猴脚本，可以每隔30秒（具体的秒数可以自定义），请求 `_ssgManifest.js` 文件， 原理类似服务器ssh连接登录服务器的心跳包，向服务器表明，用户仍在活跃，不要断开连接

- 安装 `https://greasyfork.org/zh-CN/scripts/462967-chatgpt-heartbeat/code`

![安装](https://cdn.fangyuanxiaozhan.com/assets/1682076807315zmJQS5Ap.gif)



![image-20230421183153928](https://cdn.fangyuanxiaozhan.com/assets/16820731152848iiQzz2F.png)



## ChatGPT HeartBeat 自定义请求时间



- 自定义请求时间

![自定义请求时间](https://cdn.fangyuanxiaozhan.com/assets/1682074168690zn1Pbhr1.png)

- 如果默认的30秒依然掉线，可以自定义为20秒

![image-20230421185036525](https://cdn.fangyuanxiaozhan.com/assets/16820742373295jhG7xH1.png)



## 脚本直接支持ChatGPT4链接



当我们开通ChatGPT PLUS会员后，可以直接通过 `https://chat.openai.com/?model=gpt-4` 直接默认选择ChatGPT4进行使用（氪金用户的爽点儿）



但是，脚本最新的0.2.5版本的 `@match` 匹配规则还未支持 `?model=gpt-4`  ,这就导致，如果我们直接访问`https://chat.openai.com/?model=gpt-4` 进入氪金模式（GPT4模式），脚本是不运行的...



修改方法也很简单，**安装脚本后**，进入油猴的Dashboard, 加一条 `// @match        https://chat.openai.com/?model=gpt-4` 即可



![Dashboard](https://cdn.fangyuanxiaozhan.com/assets/1682074609404YKZw4ben.png)

编辑脚本

![编辑脚本](https://cdn.fangyuanxiaozhan.com/assets/1682074684303fwGy4QnF.png)

添加匹配规则

![加一条](https://cdn.fangyuanxiaozhan.com/assets/1682074523318EkmWSW0a.png)

![保存修改](https://cdn.fangyuanxiaozhan.com/assets/1682074756710ZD6jzjmc.png)





## 看脚本源码能学到很多小技巧



![](https://cdn.fangyuanxiaozhan.com/assets/1682075048335bWR7nPDp.png)

即使启用了脚本，Chrome浏览器的`Auto Discardable`也可能会释放标签页的内存，导致页面再次被使用时，需要刷新页面重新加载，如果你对ChatGPT页面刷新深恶痛绝，可以禁用`Auto Discardable`



![Auto Discardable](https://cdn.fangyuanxiaozhan.com/assets/1682075027425xkDes7nY.png)




## 《ChatGPT HeartBeat》 下载链接
```
https://greasyfork.org/zh-CN/scripts/462967-chatgpt-heartbeat/code
```

如果无法访问以上链接，可以直接复制以下脚本内容进行安装

```javascript
// ==UserScript==
// @name         ChatGPT HeartBeat
// @namespace    http://tampermonkey.net/
// @version      0.2.5
// @license      GPLv3
// @description  USE AT YOUR OWN RISK!
// @author       https://v2ex.com/t/926890
// @homepage     https://v2ex.com/t/926890
// @homepageURL  https://v2ex.com/t/926890
// @match        https://chat.openai.com
// @match        https://chat.openai.com/
// @match        https://chat.openai.com/?model=gpt-4
// @match        https://chat.openai.com/c/*
// @match        https://chat.openai.com/chat
// @match        https://chat.openai.com/chat/*
// @icon         https://chat.openai.com/favicon.ico
// @require      https://greasyfork.org/scripts/395037-monkeyconfig-modern/code/MonkeyConfig%20Modern.js?version=764968
// @run-at       document-start
// @noframes
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_addStyle
// ==/UserScript==
 
/*
  需要保持非常久的，可以额外尝试在 chrome://discards 里禁用 `Auto Discardable`，
  或者用 https://github.com/WorldLanguages/DoNotDiscard
  否则就算保持了 Cookies 有效，Chrome 也有可能自动休眠标签页。
*/
(function () {
    function isWindow(obj) {
        return obj instanceof Window;
    }
 
    // 防止页面通过监听事件强制刷新
    // https://gist.github.com/fuzmish/bd444b1aadc2d22aada7c9b1a6de56ba
    const rawAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (...args) {
        const [eventName] = args;
        if (
            isWindow(this) &&
            ["focus", "focusin", "visibilitychange"].includes(eventName)
        ) {
            return;
        }
        return rawAddEventListener.apply(this, args);
    };
 
    const cfg = new MonkeyConfig({
        title: "Configuration",
        menuCommand: true,
        params: {
            refreshInterval: {
                type: "number",
                default: 30,
            },
            refreshURL: {
                type: "text",
                default:
                "https://chat.openai.com/_next/static/k9OKjvwgjWES7JT3k-6g9/_ssgManifest.js",
            },
        },
    });
 
    function getRefreshURL () {
        var refreshURL = cfg.get("refreshURL");
        // 如果手动配置了 _ssgManifest.js 以外的 URL，就不尝试获取最新的
        if (!refreshURL.endsWith("_ssgManifest.js")) {
            return refreshURL;
        }
        // 获取最新的 _ssgManifest.js 链接
        // https://v2ex.com/t/926890#r_12897849
        const manifestScript = document.querySelector(
            'script[src*="_ssgManifest.js"]'
        );
        if (manifestScript) {
            cfg.set("refreshURL", manifestScript.src);
            return manifestScript.src;
        }
        return refreshURL;
    };
 
    const heartbeat = document.createElement("iframe");
    heartbeat.style.display = "none";
    document.head.prepend(heartbeat);
 
    let count = 0;
    function refresh() {
        count = 0;
        heartbeat.src = `${getRefreshURL()}?${Date.now()}`;
    }
    setInterval(function () {
        try {
            let current = new URL(heartbeat.contentWindow.location.href);
            let expect = new URL(getRefreshURL());
            if ( heartbeat.contentWindow.location.href === '' ||
                heartbeat.contentWindow.location.href === 'about:blank' ||
                current.pathname === expect.pathname ||
                count++ * cfg.get("refreshInterval") >= 2 * 60) {
                refresh();
            }
        } catch (error) {
            // https://v2ex.com/t/926890#r_12935587
            console.error(error);
            refresh();
        }
    }, cfg.get("refreshInterval") * 1000);
})();
```

另外，ChatGPT会检测访问网页的IP, 如果你的IP被ban了，这个脚本无法帮你（我的新加坡阿里云和美国亚马逊云也被ban了，目前没找到解封的方案），我目前解决方案是，用GLaDOS家的服务 [http://i.v2fy.com/vpn](http://i.v2fy.com/vpn) ，走美国代理，然后配合本文的脚本，可以稳定使用ChatGPT Web版



## 小结



ChatGPT 确实是很棒的工具，比Google好用的多，著名程序员问答网站Stack Overflow也因此失去了大量的访问量，这说明类似Stack Overflow的问答网站产品形态落后了，所有的问答网站，都会受到ChatGPT的影响，要么改革，要么被人忘记。






## 写在最后(我需要你的支持) / At the end (I need your support)

- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)


- This article is part of the **ChromeAppHeroes** project. Github link : [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes) 

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.

