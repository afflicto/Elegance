window.app = app = new Elegance.App ['router']

app.router.setRootURL('http://localhost:3000');
app.router.map () ->
	this.resource 'task', '/tasks/:id'
	this.resource 'tasks', '/tasks'
	this.resource 'about', '/about'

app.router.init()