window.app = app = new Elegance.App ['router', 'store']

app.router.setRootURL('http://localhost:3000');
app.router.map () ->
	this.resource 'tasks', '/tasks/page/:page'
	this.resource 'task', '/tasks/:id'
	this.resource 'tasks', '/tasks'
	this.resource 'about', '/about'
	this.resource 'notes', '/notes'

app.store.setDriver new Elegance.RESTDriver(app, 'http://localhost:3000/api')

app.router.init()