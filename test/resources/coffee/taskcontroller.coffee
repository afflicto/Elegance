class window.TaskController extends Elegance.Controller
	events:
		'click button.delete': 'destroy',
		'submit form.create': 'create'
	
	init: () ->
		super
		@setData new TaskModel
			'id': 0,
			'text': 'hello world!'

	show: (id) =>
		super
		console.log 'showing task id: ' + id

	destroy: () =>
		@setData null
		@app.router.navigate '/tasks'