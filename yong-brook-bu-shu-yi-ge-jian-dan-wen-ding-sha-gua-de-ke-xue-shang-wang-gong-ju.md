- Brook是一个github开源项目, 项目地址https://github.com/txthinking/brook.
- Brook是一个跨平台的代理/ VPN软件, 软件的目标是保持简单,傻瓜, 无感知.
- Brook部署和使用比ss更简单, 如果ss某天挂了, 可以用Brook作为替代品.

> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0edecf9237d45?w=1000&h=1000&f=png&s=35777)


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
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0edecf9561c6f?w=1079&h=304&f=png&s=70068)

## 开启服务

```
# 赋予执行权限
chmod 777 brook
# 开启服务
./brook server -l :9999 -p password
# 以非阻塞方式开启服务(比较推荐)
./brook server -l :9999 -p password /dev/null 2>&1 &
```
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0edecfa312c44?w=1066&h=106&f=png&s=51478)

## 用客户端登录
- 下载客户端
Window客户端下载:https://github.com/txthinking/brook/releases/download/v20181212/Brook.exe
Mac客户端下载:https://github.com/txthinking/brook/releases/download/v20181212/Brook.dmg
安卓客户端下载:https://github.com/txthinking/brook/releases/download/v20181212/Brook.apk
IOS客户端下载(你可能需要美国区账户): https://itunes.apple.com/us/app/brook-brook-shadowsocks-vpn-proxy/id1216002642

- 填写登录信息
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0edecfa651e7b?w=695&h=696&f=png&s=57256)
- 右击任务栏图标选择start
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0edecfa7dc8f2?w=414&h=238&f=png&s=72801)

> ![ios版本登录](https://user-gold-cdn.xitu.io/2019/6/1/16b0edecfab77a2e?w=750&h=1334&f=jpeg&s=55029)




- 可以愉快的上网了
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eded2d7acc36?w=959&h=679&f=png&s=245513)

> ![ios查看youtube](https://user-gold-cdn.xitu.io/2019/6/1/16b0eded3439ed3c?w=750&h=1334&f=jpeg&s=208886)



> 如果你想让自己的服务更稳定一些, 可以继续往下读
## 先结束刚刚创建的进程
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eded3935b18d?w=1090&h=131&f=png&s=77004)

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
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eded3f511f61?w=1084&h=496&f=png&s=210922)

> 大功告成! 现在可以稳定的访问服务了, 即使brook服务端程序挂掉了, pm2也会自动重启brook服务端程序

## 相关问题:

- 如何查看brook服务端进程

```
pm2 list
```
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eded4bf77fd7?w=1061&h=262&f=png&s=122058)

- 如何关闭brook服务端进程

```
pm2 delete start_brook
```

> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eded5a4db701?w=982&h=264&f=png&s=137244)

## 愉快的访问谷歌和油管吧~
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eded66c35d6a?w=1240&h=737&f=png&s=367278)
> ![](https://user-gold-cdn.xitu.io/2019/6/1/16b0eded686ac2bb?w=1240&h=652&f=png&s=1020928)


## 小结:
Brook是一个蛮好用的工具, 不需要ss复杂的部署过程, 开箱即用, 配合pm2可以提供非常稳定的服务, 如果自己想搭建科学上网服务, 可以试试Brook!


---

## 写在最后(我需要你的支持)
- 本文属于**Chrome插件英雄榜** 项目的一部分, 项目Github地址: [https://github.com/zhaoolee/ChromeAppHeroes](https://github.com/zhaoolee/ChromeAppHeroes)

- **Chrome插件英雄榜**, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类, 如果你喜欢这个项目, 希望你能为本项目添加一颗 🌟星.

- ChromeAppHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human, If you like this project, I hope you can add a star 🌟 to this project.


