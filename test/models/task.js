var Sequelize = require('sequelize');
var sequelize = require('../sequelize');

var Task = sequelize.define('task', {
	title: {
		type: Sequelize.STRING,
	},
	completed: {
		type: Sequelize.BOOLEAN,
	}
});

module.exports = Task;