var express = require('express');
var router = express.Router();
var db = require('../sequelize');
var Task = require('../models/task');

var records = [
	{
		'id': 0,
		'text': 'Lorem ipsum'
	},
	{
		'id': 1,
		'text': 'Dolor sit amet'
	},
	{
		'id': 2,
		'text': 'Yeah'
	},
	{
		'id': 3,
		'text': 'Wololo'
	},
	{
		'id': 4,
		'text': 'Lorem ipsum'
	},
	{
		'id': 5,
		'text': 'Dolor sit amet'
	},
	{
		'id': 6,
		'text': 'Lorem ipsum'
	},
	{
		'id': 7,
		'text': 'Wololo'
	},
	{
		'id': 8,
		'text': 'Yeah'
	},
	{
		'id': 9,
		'text': 'Lorem ipsum'
	},
	{
		'id': 10,
		'text': 'Dolor sit amet'
	},
	{
		'id': 11,
		'text': 'Dolor sit amet'
	},
	{
		'id': 12,
		'text': 'Lorem ipsum'
	},
	{
		'id': 13,
		'text': 'Yeah'
	},
	{
		'id': 14,
		'text': 'Wololo'
	},
]

router.get('/tasks', function(req, res, next) {
	res.json({
		'records': records
	})
});

router.get('tasks/page/:page', function(req, res, next) {
	var limit = 5
	var page = (req.params.page !== 'undefined') ? req.params.page - 1 : 1
	if (page < 1) page = 1
	var offset = 5 * page
	res.json({
		'records': records.splice(offset, limit)
	});
});

router.get('/tasks/:id', function(req, res, next) {
	res.json({'record': records[req.params.id]})
});

module.exports = router;