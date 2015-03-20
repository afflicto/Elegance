var Sequelize = require('sequelize');
var sequelize = new Sequelize('elegance', 'root', '', {
	host: 'localhost',
	dialect: 'mysql',
});



module.exports = sequelize;