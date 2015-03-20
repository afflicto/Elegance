class window.TaskController extends Elegance.Controller
	events:
		'click button.delete': 'destroy'
	
	init: () ->
		super
		@setData new TaskModel

	destroy: () =>
		@setData null
		@app.router.navigate '/tasks'