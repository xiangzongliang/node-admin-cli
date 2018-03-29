[TOC]

#### 1、安装步骤

```
npm i
```

#### 2、启动
```
npm run dev
```
或
```
npm run start
```
#### 3、目录介绍

|--- config         //项目配置文件

|--- interfaces     //所有接口文档


|--- router         //路由文件


|-  app.js           //入口文件

|-  package.json


#### 4、项目依赖 `express  mysql  lodash`


#### 5、说明文档
##### 新增接口方式
1.在`interfaces`目录中添加`demo.js`文件,并编辑内容如下：
```
const demo = (req, res) => {
	res.json({
	    status:2000,
	    msg:'OK'
	});
}

module.exports = demo;
```
2.修改`router`目录下的`index.js`文件,在`init`方法中新增接口:
```
router.get('/demo', interfaces.demo);
```
3.重启项目，在浏览器中访问`localhost:3456/demo`,就会出现我们所返回的JSON。

4.启动端口默认为`3456`可以修改`config/index.js`文件来自定义配置
