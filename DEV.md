# 内部开发人员文档
> 注：所有文件以英文、下划线命名，尽量不要使用数字，禁止使用中文及其他非英文字符

[Git学习](https://oschina.gitee.io/learn-git-branching/)

### Git配置
1. 创建一个文件夹来存放代码
2. 安装[git](https://git-scm.org/downloads)
3. 打开`cmd`，切换到建的文件夹
4. 在本项目的主页上点 Code->https，将网址复制下来
5. 输入命令：  
```cmd
git init
git remote add origin 你刚复制的网址
git config http.sslverify false
git config user.name=你的github用户名 --global
git config user.email=你的邮箱 --global
git pull origin main
```

### 前端人员
HTML存在front文件夹中，Javascript及CSS文件保存在front/static中，一些常用的大型库（如`jQuery`、`vue.js`、`Bootstrap`等）请使用第三方静态CDN  

##### CDN列表
* [BootCDN](https://www.bootcdn.cn/)
* [Staticfile CDN](http://www.staticfile.org/)
* [jsdelivr](http://www.jsdelivr.com/)
* 其他（自行摸索）

### 后端人员
后端的代码存放在src文件夹中，src/index.ts是入口程序，尽量不要进行大更改，路由可以放在src/routes中，不要擅自修改根目录的文件，尤其是`.gitignore`、`package.json`等重要文件，也不要自行删改`node_modules`的文件，通过npm操作，删除npm包时一定要征求管理员同意


