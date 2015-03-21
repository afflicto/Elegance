(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.TasksController = (function(superClass) {
    extend(TasksController, superClass);

    TasksController.prototype.type = 'task';

    TasksController.prototype.container = 'ul.tasks';

    TasksController.prototype.events = {
      'submit form.create': 'create',
      'click a.next-page': 'next',
      'click a.previous-page': 'previous'
    };

    TasksController.prototype.childEvents = {
      'click button.destroy': 'destroy'
    };

    function TasksController(app, route) {
      this.app = app;
      this.route = route;
      this.previous = bind(this.previous, this);
      this.next = bind(this.next, this);
      this.destroy = bind(this.destroy, this);
      this.create = bind(this.create, this);
      TasksController.__super__.constructor.apply(this, arguments);
    }

    TasksController.prototype.create = function(input) {
      return console.log('create');
    };

    TasksController.prototype.destroy = function(task) {
      return task.destroy();
    };

    TasksController.prototype.next = function() {
      var p;
      console.log("page:");
      console.log(this.page);
      if (this.page !== this.pages) {
        p = this.page;
        p += 1;
        return this.app.router.navigate('/tasks/page/' + p);
      }
    };

    TasksController.prototype.previous = function() {
      var p;
      if (this.page > 1) {
        p = this.page;
        p -= 1;
        return this.app.router.navigate('/tasks/page/' + p);
      }
    };

    return TasksController;

  })(Elegance.CollectionController);

}).call(this);
