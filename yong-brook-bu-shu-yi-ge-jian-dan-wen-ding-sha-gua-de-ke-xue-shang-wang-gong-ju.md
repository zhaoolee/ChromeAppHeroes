- Brook是一个github开源项目, 项目地址https://github.com/txthinking/brook.
- Brook是一个跨平台的代理/ VPN软件, 软件的目标是保持简单,傻瓜, 无感知.
- Brook部署和使用比ss更简单, 如果ss某天挂了, 可以用Brook作为替代品.

> ![](https://upload-images.jianshu.io/upload_images/3203841-5605df13e403fe98.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


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
> ![](https://upload-images.jianshu.io/upload_images/3203841-9448ce3c2f497449.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 开启服务

```
# 赋予执行权限
chmod 777 brook
# 开启服务
./brook server -l :9999 -p password
# 以非阻塞方式开启服务(比较推荐)
./brook server -l :9999 -p password /dev/null 2>&1 &
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-0a77ee94d33ef101.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 用客户端登录
- 下载客户端
Window客户端下载:https://github.com/txthinking/brook/releases/download/v20181212/Brook.exe
Mac客户端下载:https://github.com/txthinking/brook/releases/download/v20181212/Brook.dmg
安卓客户端下载:https://github.com/txthinking/brook/releases/download/v20181212/Brook.apk
IOS客户端下载(你可能需要美国区账户): https://itunes.apple.com/us/app/brook-brook-shadowsocks-vpn-proxy/id1216002642

- 填写登录信息
> ![](https://upload-images.jianshu.io/upload_images/3203841-66b5247145029dc4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 右击任务栏图标选择start
> ![](https://upload-images.jianshu.io/upload_images/3203841-8ccec462d28867ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> ![ios版本登录](http://upload-images.jianshu.io/upload_images/3203841-fe7ec1c34bca96a6.jpg)




- 可以愉快的上网了
> ![](https://upload-images.jianshu.io/upload_images/3203841-203a274b85d48b26.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> ![ios查看youtube](http://upload-images.jianshu.io/upload_images/3203841-b3d05eaf0e9fdad1.jpg)



> 如果你想让自己的服务更稳定一些, 可以继续往下读
## 先结束刚刚创建的进程
> ![](https://upload-images.jianshu.io/upload_images/3203841-7020f0c66da36544.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

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
> ![](https://upload-images.jianshu.io/upload_images/3203841-e185ffdc46273745.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>  大功告成! 现在可以稳定的访问服务了, 即使brook服务端程序挂掉了, pm2也会自动重启brook服务端程序

## 相关问题:

- 如何查看brook服务端进程

```
pm2 list
```
> ![](https://upload-images.jianshu.io/upload_images/3203841-73829862208172ed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 如何关闭brook服务端进程

```
pm2 delete start_brook
```

> ![](https://upload-images.jianshu.io/upload_images/3203841-cad2641c6c552b5a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 愉快的访问谷歌和油管吧~
> ![](https://upload-images.jianshu.io/upload_images/3203841-1350dc7b204001ef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](https://upload-images.jianshu.io/upload_images/3203841-fa9c64fbee8f97ed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 小结:
Brook是一个蛮好用的工具, 不需要ss复杂的部署过程, 开箱即用, 配合pm2可以提供非常稳定的服务, 如果自己想搭建科学上网服务, 可以试试Brook!  
