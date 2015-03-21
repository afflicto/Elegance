class window.TasksController extends Elegance.CollectionController
	events:
		'submit form.create': 'create'
	container: 'ul.tasks'

	init: () ->
		super
		collection = new Elegance.Collection

		collection.add new TaskModel
			'id': 0
			'name': 'Something'
			'text': 'Lorem ipsum dolor sit amet.'
		collection.add new TaskModel
			'id': 1
			'name': 'Two!'
			'text': 'Lorem ipsum dolor.'
		collection.add new TaskModel
			'id': 2
			'name': 'Something else'
			'text': 'Do that, then Lorem'
		collection.add new TaskModel
			'id': 3
			'name': 'Number four!'
			'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, labore!'

		@setData collection

	create: (input) => @data.add new TaskModel input