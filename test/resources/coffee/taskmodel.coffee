class window.TaskModel extends Elegance.Model
	constructor: (@attributes) ->
		super
		@attributes = 
			'id': Math.floor Math.random() * 1000
			'text': 'Lorem ipsum!'