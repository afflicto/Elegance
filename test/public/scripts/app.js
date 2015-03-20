(function() {
  var app;

  window.app = app = new Elegance.App(['router']);

  app.router.setRootURL('http://localhost:3000');

  app.router.map(function() {
    this.resource('task', '/tasks/:id');
    this.resource('tasks', '/tasks');
    return this.resource('about', '/about');
  });

  app.router.init();

}).call(this);
