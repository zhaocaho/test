//引入express框架
const express = require("express");
//引入path模块
const path = require("path");
//创建网站服务器
const app = express();
//实现静态资源访问功能
app.use("/static", express.static(path.join(__dirname, "dist")));
// =====》这里表示public下面的html文件可以在这样的路径下访问  localhost/static/index.html   ,可以省略/static表示是根目录下面

// //创建了二级路由过后，路径相当于 localhost/hoem/index

//监听端口
app.listen(3000);
console.log("服务器启动");
