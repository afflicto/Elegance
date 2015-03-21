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

router.get('/task/count', function(req, res, next) {
	res.json({
		'count': records.length
	});
	res.end()
});

router.get('/task/page/:page', function(req, res, next) {
	var limit = 5
	var page = (req.params.page !== 'undefined') ? req.params.page - 1 : 1
	if (page < 0) page = 0
	var offset = 5 * page
	
	var r = []
	for(record in records) {
		r[record] = records[record];
	}

	res.json({
		'records': r.splice(offset, limit)
	});
	res.end()
});

router.get('/task/:id', function(req, res, next) {
	record = records[req.params.id];
	res.json({
		'records': [record]
	});
	res.end()
});

router.get('/task', function(req, res, next) {
	res.json({
		'records': records
	});
	res.end()
});

module.exports = router;