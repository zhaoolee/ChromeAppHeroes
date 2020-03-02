---
title: 060《Tabagotchi》为减缓全球变暖做出贡献
---
程序员大量写function函数, 服务器运行代码时, 产生热量, 导致全球气候变暖!同理, 我们使用Chrome浏览器, 开启大量标签页,导致计算机产生更多热量,导致了全球变暖,而Tamagotchi这款Chrome扩展，通过养小怪物的方式,提醒用户减少标签页。


![image](https://www.v2fy.com/asset/060_tabagotchi/63477585-6213c480-c4b8-11e9-88b6-f1c8fb572943.png)


## 这个扩展如何使用？
你打开的标签越少，你的“Tabagotchi”小怪物就越快乐和健康！ 每当你打开一个标签，你的Tabagotchi会失去4点HP，使它更加愤怒和病情。


## 如何进化我的Tabagotchi？
如果1个小时内打开5个或更少标签，Tabagotchi就会成长1格。10个格子被填满，就可以进化一次！

## 成长图鉴在哪里可以看到?
![image](https://www.v2fy.com/asset/060_tabagotchi/63477871-e0bd3180-c4b9-11e9-977f-397d7f29bf6d.png)

![image](https://www.v2fy.com/asset/060_tabagotchi/63477932-2548cd00-c4ba-11e9-8c34-bacb2c0d20e7.png)

![image](https://www.v2fy.com/asset/060_tabagotchi/63478037-94262600-c4ba-11e9-86ad-3c9005304dbb.png)


## 有没有加速成长的秘籍?

![tabagotchi](https://www.v2fy.com/asset/060_tabagotchi/63478935-7b1f7400-c4be-11e9-8679-5f4a6a56c89c.gif)

上图超清gif原图: https://user-images.githubusercontent.com/15868458/63478933-7b1f7400-c4be-11e9-8c79-1a8ce344ffda.gif

```javascript
let tmp_state = {
  hp: 96,     // 设置HP
  evolutionLevel: 2, // 0为成长期, 1为成熟期, 2为完全体
  evolutionStage: 0, // 成长进度条 0-9 10个级别
  evolutionTimestamp: new Date().getTime(), // 
  monster: ``,
  monsterStatus: ""My name is 完全体"",
  tabCount: 1 // 当前标签数量
}
chrome.storage.local.set({monster: tmp_state})
```


## Chrome扩展`Tabagotchi` 下载链接:


[https://chrome.google.com/webstore/detail/tabagotchi-by-breather/ojahbhfflnbaiddhnkgeccgopmedjjen](https://chrome.google.com/webstore/detail/tabagotchi-by-breather/ojahbhfflnbaiddhnkgeccgopmedjjen)



## 小结

Tabagotchi扩展以一种有趣的方式, 提醒我们减少标签页数量, 减少了计算机产生的热量, 为阻止全球变暖做出了贡献~


