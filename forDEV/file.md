/ --|

    |--README.md 介绍YHOJ

    |--LICENSE 开源协议

    |--package.json & package-lock.json NPM包管理器

    |--.gitignore GIT COMMIT忽略特定文件

    |--.github/ 配置ACTIONS，可实现自动化构建及部署

    |--forDEV/ 内部开发文档

    |  |--file.md 介绍文件结构
       
       |--branch.md 介绍各分支

       |--build.md 构建步骤

    |  |__dev.md 开发人员必读

    |--front/ 存放前端文件，方便后端调用

    |  |--static/ 存放多个HTML同时调用的JS或CSS，方便分类

    |  |__Other 前端HTML及其CSS，JS

    |--src/ 存放后端文件

    |  |--routes/ 路由，为不同的事件写的不同代码，如404页、登录页，供index.ts调用

    |  |__Other 后端代码，调用各模块、监听
    
    |__