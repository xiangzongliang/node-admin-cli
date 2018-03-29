const interfaces = require('../interfaces');
module.exports = {
	init: (router) => {
		// Default access page
		router.get('/', function (req, res) {
			res.sendfile('index.html');
		});

		// add page router
		router.get('/about', interfaces.about);




		return router
	}
}
