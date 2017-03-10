## ionic2-wallet

[toc]

### 更新记录



#### 2017-02-28

* 添加了HTTP拦截器
* 添加了多语言支持
* 添加扫描二维码
* 添加生成二维码
* 添加操作剪切板功能

#### 2017-03-06

* 添加了bitcore-lib|bitcore-mnemonic
* 集成了nwJS打包功能


### Build

```
npm run build:macos
```


### IOS真机器调试

IOS真机调试需要配合Safari浏览器的调试工具，先运行下面命令

```
ionic run ios -lc --debug --device
```

>先运行上面命令来启动app在你的Iphone手机上
>
>打开Safari的Preferences->Advanced 勾选底部的Show Develop menu in menu bar.
>
>打开Iphone手机的Safari也打开同样的设置
>
>然后回到Mac的Safari,点击菜单栏的Develop->YourName's Iphone 然后出现右侧一个菜单列表，勾选你的App，就会弹出一个开发人员调试工具
>
>这时候点击App上的元素，可以看到console中打印的log信息
>
>如果还不懂，请参考文献 http://geeklearning.io/apache-cordova-and-remote-debugging-on-ios/
>






## 常见错误

### 开启调试时报错

```
 ionic emulate ios -lsc
```

添加lsc参数的时候报下面这个错误，原因是本机的53703端口被占用了.

```
[12:21:08]  build dev started ...
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE 0.0.0.0:53703
    at Object.exports._errnoException (util.js:1022:11)
    at exports._exceptionWithHostPort (util.js:1045:20)
    at Server._listen2 (net.js:1259:14)
    at listen (net.js:1295:10)
    at net.js:1405:9
    at _combinedTickCallback (internal/process/next_tick.js:77:11)
    at process._tickCallback (internal/process/next_tick.js:98:9)
    at Module.runMain (module.js:606:11)
    at run (bootstrap_node.js:394:7)
    at startup (bootstrap_node.js:149:9)

```

**解决方案**

先查看53703端口被什么程序占用

```
lsof -i tcp:53703

COMMAND  PID   USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    6785 Daniel   15u  IPv4 0xd54c49cfdd2fefbb      0t0  TCP *:53703 (LISTEN)

```

然后用kill命令来结束掉被占用的程序的PID

```
kill 6785

```

### git拉取远程代码的时候被拒绝

我先在本地创建了一个ionic项目，开发了一段时间以后在git上新建了一个仓库，准备把代码提交到git上，发现git pull的时候被拒绝了

```
git pull origin master
From https://github.com/cssxn/ionic2-wallet
 * branch            master     -> FETCH_HEAD
fatal: refusing to merge unrelated histories
```

**解决方案**

原文地址：http://blog.csdn.net/lindexi_gd/article/details/52554159

```
git pull origin master ----allow-unrelated-histories

```














