const config = {
	port: 3456,     //服务器启动端口

	mysql: {
		host: 'localhost',
		user: 'root',
		password: 'root',
		port: '3306',
		database: 'nodeData',
	},
	// 开发环境下
	dev: {
		hot: true,     //是否开始热更新调试
	}
}


module.exports = config