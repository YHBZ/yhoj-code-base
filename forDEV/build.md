# 开发人员构建说明
> 注：确保你已执行[dev.md中的Git配置](https://github.com/YHBZ/yhoj-code-base/blob/develop/forDEV/dev.md#git%E9%85%8D%E7%BD%AE)
1. 安装[Node.js](http://nodejs.cn/download/)
2. 将代码拉取下来
```bash
> git pull origin develop
```
3. 进行准备工作
```bash
> npm run init_cn
```
4. 在根目录创建`config.json`，内容参考根目录的[config-template.jsonc](https://github.com/YHBZ/yhoj-code-base/blob/develop/config-template.jsonc)（一定要删除注释，不然程序无法读取）
5. 构建项目并运行
```bash
> npm run build
> npm run run
```