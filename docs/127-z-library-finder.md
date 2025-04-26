---
title: 127《Z-Library Finder》优雅进入全球最大的Z-Library自由免费Free图书馆
---

最近需要找几本电子书，发现几年前很好用的搜书网站都停站了，于是我只好重新回到了 Z-Library的怀抱。

Z-Library最大的问题还是域名不稳定，收藏的域名可能过一段就失效了。于是Z-Library官方开发一个小扩展工具，点击扩展工具的图标，会自动查找并打开可用的域名。

![2025-04-26 14.54.44](https://cdn.fangyuanxiaozhan.com/assets/1745650815740TEsSdnXb.gif)

查找下载过程中，没有任何弹窗，点击即可下载，除了下载有点慢，没什么缺点，下载后的epub格式，可以被各类主流电子书软件打开，我个人比较喜欢Apple的Books，可以通过iCloud同步阅读进度。

![image-20250426145800852](https://cdn.fangyuanxiaozhan.com/assets/1745650688640T7Wj2Aet.png)



《Z-Library Finder》扩展工具并没有在任何商店上架，只提供了一个下载页，下载页提供了火狐浏览器扩展工具的下载。

https://go-to-library.sk/#browser_extensions_tab

## 《Z-Library Finder》 下载链接

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
暂无
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
<div style="text-align: center;"><a  href="https://cdn.jsdelivr.net/gh/zhaoolee/ChromeAppHeroes/backup/127-z-library-finder.zip">下载链接 / Download link</a></div>
</td>
</tbody>
</table>


## 源码分析小课堂：这个扩展做了什么？



```
$(() => {
    const supportEmail = 'support@z-lib.do'
    const domains = {
        staticList: [
            'https://singlelogin.re',
            'https://z-library.rs',
            'https://z-library.do',
            'https://z-lib.gs',
            'https://z-lib.gd',
            'https://z-lib.do',
            'https://z-lib.fm',
        ],
        getLastAvailableDomain: () => {
            return window.localStorage ? window.localStorage.getItem('availableDomain') : null
        },
        getAll: () => {
            try {
                const list = JSON.parse(window.localStorage.getItem('allDomains'))
                if (Array.isArray(list) && list.length) {
                    for (let domain of domains.staticList) {
                        if (list.indexOf(domain) === -1) {
                            list.push(domain)
                        }
                    }
                    return list
                }
            } catch (error) {}

            return Array.from(domains.staticList)
        },
        updateList: (availableDomain, callback) => {
            if (!window.localStorage) {
                return callback()
            }

            // check last update
            try {
                const currentTimestamp = Math.ceil((new Date().getTime() / 1000))
                const lastUpdate = parseInt(window.localStorage.getItem('lastUpdate'))
                if (isNaN(lastUpdate) || (currentTimestamp - lastUpdate) > 86400) {
                    window.localStorage.setItem('lastUpdate', currentTimestamp.toString())
                } else {
                    return callback()
                }
            } catch (error) {}

            // update domains
            const url = availableDomain + '/eapi/info/domains'
            $.ajax({
                url: url,
                timeout: 7000,
            }).done((result) => {
                let list = Array.from(domains.staticList)
                if (result !== null && typeof result === 'object' && result.domains) {
                    for (let row of result.domains) {
                        if (row !== null && typeof row === 'object' && row.domain) {
                            list.push('https://' + row.domain)
                        }
                    }
                }
                list = list.filter(function(itm, i, a) {
                    return i === list.indexOf(itm)
                })
                window.localStorage.setItem('allDomains', JSON.stringify(list))
                callback()
            }).fail(()=> {
                callback()
            })
        }
    }

    const domainsChecker = {
        stop: false,
        checkDomainTimeout: 15, // sec
        checkInParts: 5,
        checkInPartsDelay: 7, // sec
        processes: {
            list: {},
            add: (domain) => {
                domainsChecker.processes.list[domain] = 'start'
            },
            setAsCompleted: (domain) => {
                if (domainsChecker.processes.list[domain]) {
                    domainsChecker.processes.list[domain] = 'completed'
                }
            },
            clear: () => {
                domainsChecker.processes.list = {}
            },
            isEmpty: () => {
                for (let i in domainsChecker.processes.list) {
                    if (domainsChecker.processes.list[i] === 'start') {
                        return false
                    }
                }
                return true
            }
        },
        results: {
            availableDomain: null,
        },
        run: (sendResponse) => {
            if (domainsChecker.stop) {
                return
            }

            // fill processes
            domainsChecker.processes.clear()
            let domainsOriginal = domains.getAll()
            for (let domain of domainsOriginal) {
                domainsChecker.processes.add(domain)
            }

            // slice domains and create queue
            let domainsPart
            let counter = 0
            while (domainsPart = domainsOriginal.splice(0, domainsChecker.checkInParts)) {
                if (!domainsPart.length) {
                    break;
                }
                setTimeout((list) => {
                    for (let domain of list) {
                        domainsChecker.checkDomain(domain, (isAvailable) => {
                            if (domainsChecker.stop) {
                                return
                            }
                            if (!isAvailable && domainsChecker.processes.isEmpty()) {
                                return sendResponse(domainsChecker.results)
                            }
                            if (isAvailable && !domainsChecker.results.availableDomain) {
                                domainsChecker.stop = true
                                domainsChecker.results.availableDomain = domain
                                return sendResponse(domainsChecker.results)
                            }
                        })
                    }
                }, counter * domainsChecker.checkInPartsDelay * 1000, Array.from(domainsPart))
                counter += 1
            }
        },
        checkDomain: (domain, callback) => {
            if (domainsChecker.stop) {
                return
            }
            let url = domain + '/p/index.php?v=' + new Date().getTime()
            $.ajax({
                url: url,
                timeout: domainsChecker.checkDomainTimeout * 1000,
                crossDomain: true,
            }).done((data, g, resp) => {
                domainsChecker.processes.setAsCompleted(domain)
                callback((resp.status === 200 && resp.responseText.length > 0))
            }).fail((data, g, resp) => {
                domainsChecker.processes.setAsCompleted(domain)
                callback(false)
            })
        },
        processResult: (result) => {
            const availableDomain = (result || {}).availableDomain
            if (availableDomain) {
                window.localStorage && window.localStorage.setItem('availableDomain', availableDomain)
                domains.updateList(availableDomain, () => {
                    domainsChecker.saveMetric(availableDomain, () => {
                        browser.tabs.create({url: availableDomain})
                        window.close()
                    })
                })
            } else {
                $('.loading').addClass('hidden')
                $('.no-available-domains #supportEmail').attr('href', `mailto:${supportEmail}`).text(supportEmail)
                $('.no-available-domains').removeClass('hidden')
            }
        },
        // metric for redirects
        saveMetric: (availableDomain, callback) => {
            const url = availableDomain + '/eapi/system/metric'
            $.ajax({
                url: url,
                method: 'POST',
                data: {'name': 'BrowserExtensionRedirect', 'value': 1, 'tags': {'extension': 'firefox'}},
                timeout: 7000,
            }).done(() => {
                callback()
            }).fail(()=> {
                callback()
            })
        }
    }

    const lastAvailableDomain = domains.getLastAvailableDomain()
    if (lastAvailableDomain) {
        domainsChecker.checkDomain(lastAvailableDomain, (isAvailable) => {
            if (isAvailable) {
                domainsChecker.results.availableDomain = lastAvailableDomain
                domainsChecker.processResult(domainsChecker.results)
            } else {
                domainsChecker.run(domainsChecker.processResult)
            }
        })
    } else {
        domainsChecker.run(domainsChecker.processResult)
    }
})
```

这个扩展工具提供了包含7个域名的列表`'https://singlelogin.re','https://z-library.rs','https://z-library.do', 'https://z-lib.gs','https://z-lib.gd', 'https://z-lib.do','https://z-lib.fm',`  通过这些域名列表，动态获取可用的网页服务。

![image-20250426152105989](https://cdn.fangyuanxiaozhan.com/assets/17456520754582EawTKiE.png)



## 小结

人类可以通过音视频学习，也可以通过读书进行学习，读书的优势是，可以自行控制阅读的速度，自由掌控思考的时间。

想成为某个领域的专家，需要对领域内遇到的问题进行思考，然后实践，再思考，再实践，循环往复，读书这种学习形式，能给我们更多思考的机会。




## 写在最后(我需要你的支持) / At the end (I need your support)

- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)


- This article is part of the **ChromeAppHeroes** project. Github link : [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes) 

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.
