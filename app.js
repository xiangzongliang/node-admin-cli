const express = require('express');
const mysql = require('mysql');
const app = express();
const EXProuter = express.Router();
const http = require('http').Server(app);

const config = require('./config');
const router = require('./router');


// 设置所有路由的配置
app.use('/', router.init(EXProuter));

//所有静态资源配置加载
app.use(express.static('/'));


let PORT = config.port || 3456;
http.listen(PORT, function (e) {
	console.log('The port of listening is :' + PORT);
});