---
title: 022《扩展管理器》管理你的Chrome扩展
---
如果你读完了 **Chrome插件英雄榜** 前面的章节，并且实际操作了一下，或许你会下图所示的情况
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/21ca22fb1aba4f0caeac2fc138f21a4b.png)
> emm... 插件装的太多了，搜索框变短好多
- 如何简单解决这个问题？你拖动一下就好了嘛~
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/b8e7aadf740d4fa0bf241d7476820957.gif)

- 但拖动只是隐藏了，并不能减少插件对内存的占用
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/eab77c87fb6e4f95a8c24e37d39d499b.png)

- 最好的解决方法是，对插件进行分组，按照场景，启用不同组的插件
> - 工作场景下：启用`React`，`XPath`, `Vue`
> - 娱乐场景下：启用`超级马里奥`，`哔哩哔哩助手`
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/7bb418bb7684495c88be514e5b715726.gif)


## 首先安装 [扩展管理器](https://chrome.google.com/webstore/detail/extension-manager/gjldcdngmdknpinoemndlidpcabkggco)
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/3da2f32e7b4843fbafa24bfd3299f6ce.png)
- 右键->Option
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/3cf37ee5cc45480a994b2914de9ebf63.png)

- 新建组
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/7056bf087f95460488619b0a5c52988a.png)

- 添加组名
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/7a23f9d8547f43bea3d07bed3ed0f573.png)

- 左键单击启用相关插件，插件启用后，图标会高亮而且插件右上方会多一个小圆圈
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/ae4ccbb662ee4cf39565c11720d77b16.png)
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/629960ef3a5a41809841711089a96984.png)
> - 插件启用后，再次点击，即可关闭

- 插件可以在不同组中同时启用，我可以在 `工作`和`娱乐`同时启用油猴子`tampermonkey`
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/96e94197550f433ca0aba10294a6d137.png)
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/6854e5a388f34b36b66ed59065cc2f9d.png)
> **油猴子** 内心OS：我一个能抵得上他们一群~
> 相信细心的程序员小伙伴会发现，`工作`和`娱乐`面板的图标顺序是一致的，官方给出的解释是在扩展管理器中，插件图标会根据您的使用频率智能排序

## Default 面板的妙用
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/c0b80354521f4c81b5f536bc36b07d9f.png)
我喜欢尝试新的插件，但新的插件效果，可能会受到已安装插件的干扰，所以需要一个纯净的浏览器环境进行测试（禁用所有已安装的插件，只启用新插件），我可以在 Default 组只放入待测试的插件，然后切换到 Default 组，就可以安心测试新插件的功能了

## 快速搜索插件
`扩展管理器` 为我们提供了很好的用的搜索功能，帮助我们快速启用插件
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/a162fc9708f0450a8c851f7299f8c4df.gif)

## 快速还原插件组
我们可能需要在`工作`插件组，临时添加一个二维码插件，一个截图插件，用完后，需要恢复`工作`插件组到原来的状态
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/41c2a7e112224f708febcbe6ec0abfe1.gif)
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/58ea1cdba9924adf92401aebb4854e6f.png)

## 一些后台的其他选项
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/184dab110b6e4f5bad90acbf469fc2ef.png)
> ![](https://www.v2fy.com/asset/022kuo_zhan_guan_li_qi/7cffa6c207224e61b92aa2cc19057bf5.png)

## 小结:

**扩展管理器** 适合安装多个 Chrome 扩展的爱好者，如果你使用的扩展超过了 10 个，可以尝试用 **扩展管理器** 管理一下你的 Chrome 扩展~


## 插件下载地址:

https://chrome.google.com/webstore/detail/extension-manager/gjldcdngmdknpinoemndlidpcabkggco

## 开源地址

https://github.com/chevion/chrome-plugins-manager

---

## 写在最后(我需要你的支持)
- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.
