- Brook是一个github开源项目, 项目地址https://github.com/txthinking/brook.
- Brook是一个跨平台的代理/ VPN软件, 软件的目标是保持简单,傻瓜, 无感知.
- Brook部署和使用比ss更简单, 如果ss某天挂了, 可以用Brook作为替代品.

> ![](https://v2fy.com/asset/brook/400b6c393df448428973df595435950f.png)


## 准备工作
- 购买一台可以自由访问外网的vps虚拟主机
- vps虚拟主机安装 cenos7 64位
- 能以ssh方式, 登录vps虚拟主机

## 安装brook
- 登录服务器,切换到root用户
```
su
```
- 在根目录下新建文件夹`my_brook`,并将brook下载到文件夹内
```
cd /
mkdir my_brook
cd my_brook
wget https://github.com/txthinking/brook/releases/download/v20181212/brook
```
> ![](https://v2fy.com/asset/brook/d041120e80364cc5b79eead72f3b9aa7.png)

## 开启服务

```
# 赋予执行权限
chmod 777 brook
# 开启服务
./brook server -l :9999 -p password
# 以非阻塞方式开启服务(比较推荐)
./brook server -l :9999 -p password /dev/null 2>&1 &
```
> ![](https://v2fy.com/asset/brook/7515538692f9495a8e01900590aa9060.png)

## 用客户端登录
- 下载客户端
Window客户端下载:https://github.com/txthinking/brook/releases/download/v20181212/Brook.exe
Mac客户端下载:https://github.com/txthinking/brook/releases/download/v20181212/Brook.dmg
安卓客户端下载:https://github.com/txthinking/brook/releases/download/v20181212/Brook.apk
IOS客户端下载(你可能需要美国区账户): https://itunes.apple.com/us/app/brook-brook-shadowsocks-vpn-proxy/id1216002642

- 填写登录信息
> ![](https://v2fy.com/asset/brook/e8af9af693184fceb920c1f57344c8e8.png)
- 右击任务栏图标选择start
> ![](https://v2fy.com/asset/brook/e6c3812831cd4650996e0da0a4a0e450.png)

> ![ios版本登录](https://v2fy.com/asset/brook/ca60464f37b34df2a4f1f761595344d2.jpeg)




- 可以愉快的上网了
> ![](https://v2fy.com/asset/brook/c04cf3ae3fe949f1acdef86e4f89d7e9.png)

> ![ios查看youtube](https://v2fy.com/asset/brook/502d4d4260e442cd9a9f40c5d339d8a8.jpeg)



> 如果你想让自己的服务更稳定一些, 可以继续往下读
## 先结束刚刚创建的进程
> ![](https://v2fy.com/asset/brook/a56fa2eb49b240529d14cb26e1918933.png)

## 安装守护进程pm2
```
yum install nodejs
npm install pm2 -g
```
- 在/my_brook目录下创建文件 `start_brook.sh`
```
cd /my_brook
touch start_brook.sh
```
- 用vi打开start_brook.sh
```
vi start_brook.sh
```
- 在start_brook.sh内写入启动指令(这里的`9999`可以换成你喜欢的端口, `password`也可以换成你自己喜欢的密码)
```
./brook server -l :9999 -p password
```
## pm2自带守护属性, 用pm2启动brook,在`/my_brook`下执行以下语句
```
pm2 start start_brook.sh
```
> ![](https://v2fy.com/asset/brook/b16a55e37cd848c395f437aea6056f42.png)

> 大功告成! 现在可以稳定的访问服务了, 即使brook服务端程序挂掉了, pm2也会自动重启brook服务端程序

## 相关问题:

- 如何查看brook服务端进程

```
pm2 list
```
> ![](https://v2fy.com/asset/brook/4f5f769a86ec4ffc8ba98c0e123d3420.png)

- 如何关闭brook服务端进程

```
pm2 delete start_brook
```

> ![](https://v2fy.com/asset/brook/89f330fcfec14057adf808ee2e15be41.png)

## 愉快的访问谷歌和油管吧~
> ![](https://v2fy.com/asset/brook/37139eabd9f7493580abf64e06aa76a6.png)
> ![](https://v2fy.com/asset/brook/7eaae3ed9ac54fe2a56b146996c16a82.png)


## 小结:
Brook是一个蛮好用的工具, 不需要ss复杂的部署过程, 开箱即用, 配合pm2可以提供非常稳定的服务, 如果自己想搭建科学上网服务, 可以试试Brook!


---

## 写在最后(我需要你的支持)
- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.


