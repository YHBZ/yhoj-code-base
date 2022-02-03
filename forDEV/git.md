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
git config --global user.name "你的github用户名"
git config user.email "你的邮箱" --global
git pull origin develop
```
建议安装`GitHub Desktop`

### 前端人员/美工
HTML存放在`/front`文件夹中，Javascript及CSS文件保存在`/front/static`中，一些常用的大型库（如`jQuery`、`Vue.js`、`Bootstrap`等）请使用第三方静态CDN  
图标请保存在`/front`文件夹中，命名为`favicon.ico`

##### CDN列表
* [BootCDN](https://www.bootcdn.cn/)
* [Staticfile CDN](http://www.staticfile.org/)
* [jsdelivr](http://www.jsdelivr.com/)
* 其他（自行摸索）

### 后端人员
pull下来代码时，使用`npm install`或`cnpm install`
后端的代码存放在src文件夹中，/src/index.ts是入口程序，尽量不要进行大更改，路由可以放在/src/routes中，不要擅自修改根目录的文件，尤其是`.gitignore`、`package.json`等重要文件，也不要自行删改`node_modules`的文件，通过npm操作。  
后端开发使用的是`Node.js`+`TypeScript`语言，监听端口为8080，使用nginx来进行转发。