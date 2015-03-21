class window.TasksController extends Elegance.CollectionController
	type: 'task'
	container: 'ul.tasks'
	events:
		'submit form.create': 'create'
		'click a.next-page': 'next'
		'click a.previous-page': 'previous'
	childEvents:
		'click button.destroy': 'destroy'

	constructor: (@app, @route) ->
		super

	create: (input) => 
		console.log 'create'

	destroy: (task) =>
		task.destroy()

	next: () =>
		console.log "page:"
		console.log @page
		unless @page == @pages
			p = @page
			p+=1
			@app.router.navigate '/tasks/page/' + p

	previous: () =>
		if @page > 1
			p = @page
			p-=1
			@app.router.navigate '/tasks/page/' + p