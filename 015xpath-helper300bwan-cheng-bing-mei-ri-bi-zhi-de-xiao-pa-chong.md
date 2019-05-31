## 安装XPath Helper
- https://chrome.google.com/webstore/detail/xpath-helper/hgimnogjllphhhkhlmebbmlgjoejdpjl

## 打开需要爬取的网站

https://bing.ioliu.cn/

## 打开XPath Helper, 输入`/html/body/div[@class="page"]/span`, 获取页数信息

```
/html/body/div[@class="page"]/span
```
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eeca32fe6e6d?w=1240&h=601&f=png&s=975101)

## 获取图片日期信息
```
/html/body/div[@class="container"]/div/div[@class="card progressive"]/div[@class="description"]/p[@class="calendar"]/em
```
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eeca332943df?w=1240&h=559&f=png&s=1027387)


## 获取图片下载链接信息
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eeca32dec091?w=1240&h=717&f=png&s=1433933)

```
/html/body/div[@class="container"]/div/div/a/@href
```
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eeca3309060f?w=1240&h=633&f=png&s=1212122)


## 编写爬虫脚本,并运行
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eeca33262255?w=1240&h=1466&f=png&s=1275673)

> 如果你不是程序员, 也可以使用编译好的bing.exe, 右键管理员身份运行即可~
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eeca3a408119?w=1240&h=443&f=png&s=74489)
> 爬虫脚本和.exe文件都被我放到了github上, 感兴趣可以自行下载, 链接地址 https://github.com/zhaoolee/ChromeAppHeroes/tree/master/%E7%9B%B8%E5%85%B3%E8%B5%84%E6%BA%90/bing
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eeca6d6d584a?w=1240&h=652&f=png&s=170937)


## 插件下载地址
https://chrome.google.com/webstore/detail/xpath-helper/hgimnogjllphhhkhlmebbmlgjoejdpjl

## 开源地址 （基于XPath的解析框架（XPaF））
https://github.com/google/xpaf

---

## 写在最后(我需要你的支持)
- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.




