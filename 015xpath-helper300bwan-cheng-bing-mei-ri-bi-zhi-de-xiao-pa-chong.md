## 安装XPath Helper
- https://chrome.google.com/webstore/detail/xpath-helper/hgimnogjllphhhkhlmebbmlgjoejdpjl

## 打开需要爬取的网站

https://bing.ioliu.cn/

## 打开XPath Helper, 输入`/html/body/div[@class="page"]/span`, 获取页数信息
> ![](https://upload-images.jianshu.io/upload_images/3203841-f222421e9ac3fb59.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 获取图片日期信息
```
/html/body/div[@class="container"]/div/div[@class="card progressive"]/div[@class="description"]/p[@class="calendar"]/em
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-92ef0f707c5d3673.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 获取图片下载链接信息
> ![](https://upload-images.jianshu.io/upload_images/3203841-5bee718b342a7290.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
/html/body/div[@class="container"]/div/div/a/@href
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-a7ffb8e22d9afc67.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 编写爬虫脚本,并运行
> ![](https://upload-images.jianshu.io/upload_images/3203841-f68267370ca914bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 如果你不是程序员, 也可以使用编译好的bing.exe, 右键管理员身份运行即可~
> ![](https://upload-images.jianshu.io/upload_images/3203841-97c5c3eb16a2f36a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 爬虫脚本和.exe文件都被我放到了github上, 感兴趣可以自行下载, 链接地址 https://github.com/zhaoolee/ChromeAppHeroes/tree/master/%E7%9B%B8%E5%85%B3%E8%B5%84%E6%BA%90/bing
> ![](https://upload-images.jianshu.io/upload_images/3203841-79b47e9bf7e45245.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 插件下载地址
https://chrome.google.com/webstore/detail/xpath-helper/hgimnogjllphhhkhlmebbmlgjoejdpjl
