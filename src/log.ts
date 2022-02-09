// written by sjc0910
// msg箭头格式
// 链接 ==> 链接（永久重定向）
// 链接 --> 链接（临时重定向）
import chalk = require('chalk');
function log_httpget(msg: string, code: number = 200) {
    console.log(chalk.green(`[HTTP GET ${code}] `) + msg);
}

function log_httppost(msg: string) {
    console.log(chalk.red('[HTTP POST] ') + msg);
}

export { log_httpget, log_httppost };
