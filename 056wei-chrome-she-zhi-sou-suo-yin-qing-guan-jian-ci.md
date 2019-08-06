Chrome的搜索栏很好用, 但默认只设置了一个搜索引擎, 如果想使用另外的搜索, 就要到相应的搜索主页, 作为一个懒人, 希望地址栏同时支持多种搜索, 经过一阵摸索,找到了以下方法


## 进入设置搜索引擎的界面

![](https://user-images.githubusercontent.com/15868458/62503013-eca3c500-b824-11e9-97d0-b220e8a19838.gif)


## 为百度搜索设置 关键词 `bd`
![g0002](https://user-images.githubusercontent.com/15868458/62503051-15c45580-b825-11e9-8b8f-b67f37475ccd.gif)
- 搜索成功! 在地址栏输入 关键词 `bd` 后, 按空格键, 就可以快速切换到百度搜索了


## 原理

![](https://user-images.githubusercontent.com/15868458/62503208-c599c300-b825-11e9-8f85-a3714d0ac7db.png)
上面`nihao`最终发出的请求为`https://www.baidu.com/s?ie=UTF-8&wd=nihao`



## 活学活用: 为Github搜索添加关键词`gh`

- 确定搜索模板的url

![](https://user-images.githubusercontent.com/15868458/62503480-f4fcff80-b826-11e9-9e8b-667afd131fa7.png)
> Github搜索模板的url应为`https://github.com/search?q=%s`

![](https://user-images.githubusercontent.com/15868458/62503773-3c37c000-b828-11e9-9605-4ecce76830ec.gif)
```
https://github.com/search?q=%s
chinesebqb
```


## 小结:

在早期的网址导航主页上, 可以通过点击选择不同的搜索引擎进行搜索(数量有限, 而且不支持自定义), 而Chrome搜索更极客一些, 通过**自定义关键词加空格**的方法, 在搜索引擎之间自由切换, 是一种兼具扩展性与易用性的做法
