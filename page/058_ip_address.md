---
title: 058《IP-Address》快速查看当前设备IP
---
如何快速查看自己设备真实的IP地址, 并获得ip所在的国家或地区?
这款名为《IP-Address》的Chrome扩展可以帮到你～

IP-Address的使用方法非常简单,而且可以实时检测网络IP的变化,并显示IP所在的国家或地区

![ip_address](https://www.v2fy.com/asset/058_ip_address/63222725-ee369b00-c1dd-11e9-986e-cbc002168db8.gif)

- 上图超清gif原图:  https://user-images.githubusercontent.com/15868458/63222726-eecf3180-c1dd-11e9-9dad-42812718c814.gif



## 如果你想自己写一个类似的程序, 可以这样搞

通过`http://www.ip138.com/ips138.asp?ip=`+`待查询的ip地址`的方式获取相关信息(是一个静态页面), 然后用程序对静态页面中的关键信息进行提取

```python
import requests
from lxml import etree

# 查询ip归属地
def query_ip_attribution(ip_addr):
    # 设置用户代理头
    headers = {
        # 设置用户代理头(为狼披上羊皮)
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
    }
    target_url = "http://www.ip138.com/ips138.asp?ip="+ ip_addr
    response = requests.get(target_url, headers = headers).content
    data_etree = etree.HTML(response)
    ip_attr = data_etree.xpath('//tr[3]/td/ul/li[1]//text()')
    ip_attr = ip_attr[0].strip("本站数据：")
    return {"ip_attr": ip_attr, "ip": ip_addr}

print(query_ip_attribution("5.181.23.103"));
```

## 运行程序

> ![](https://www.v2fy.com/asset/058_ip_address/63222883-d8c27080-c1df-11e9-8828-cb4a5ce716cb.png)


## Chrome扩展`IP-Address` 下载链接:

https://chrome.google.com/webstore/detail/ip-address/ghlojgpiinfelppegaabbiphgomaidml


## 小结:

获取当前设备的IP地址,对于开发者而言,是一个经常遇到的问题,而《IP-Address》这款简洁小巧的软件, 能满足我们的需求


