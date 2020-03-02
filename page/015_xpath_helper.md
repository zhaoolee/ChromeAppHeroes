---
title: 015 《XPath Helper》完成Bing每日壁纸的小爬虫
---
## 安装XPath Helper
- https://chrome.google.com/webstore/detail/xpath-helper/hgimnogjllphhhkhlmebbmlgjoejdpjl

## 打开需要爬取的网站

https://bing.ioliu.cn/

## 打开XPath Helper, 输入`/html/body/div[@class="page"]/span`, 获取页数信息

```
/html/body/div[@class="page"]/span
```
> ![](https://www.v2fy.com/asset/015_xpath_helper/c386fd93de5a4942b785994698f225aa.png)

## 获取图片日期信息
```
/html/body/div[@class="container"]/div/div[@class="card progressive"]/div[@class="description"]/p[@class="calendar"]/em
```
> ![](https://www.v2fy.com/asset/015_xpath_helper/b9f7882fc32d498cb30bc621359ab9f7.png)


## 获取图片下载链接信息
> ![](https://www.v2fy.com/asset/015_xpath_helper/044682301def4141b9907738b10cd0f4.png)

```
/html/body/div[@class="container"]/div/div/a/@href
```
> ![](https://www.v2fy.com/asset/015_xpath_helper/0193d0122feb4eb29ea6dc11d049c764.png)


## 编写爬虫脚本,并运行
> ![](https://www.v2fy.com/asset/015_xpath_helper/0ed47e862c3443a0a801a7779ee716b8.png)

> 如果你不是程序员, 也可以使用编译好的bing.exe, 右键管理员身份运行即可~
> ![](https://www.v2fy.com/asset/015_xpath_helper/388f7686cb3149a5b2692ab23535de65.png)
> 爬虫脚本和.exe文件都被我放到了github上, 感兴趣可以自行下载, 链接地址 https://github.com/zhaoolee/ChromeAppHeroes/tree/master/%E7%9B%B8%E5%85%B3%E8%B5%84%E6%BA%90/bing
> ![](https://www.v2fy.com/asset/015_xpath_helper/1b015ac803c041e5a7bdd27c3f6245ae.png)


## 插件下载地址
https://chrome.google.com/webstore/detail/xpath-helper/hgimnogjllphhhkhlmebbmlgjoejdpjl

## 开源地址 （基于XPath的解析框架（XPaF））
https://github.com/google/xpaf

---

## 写在最后(我需要你的支持)
- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.




