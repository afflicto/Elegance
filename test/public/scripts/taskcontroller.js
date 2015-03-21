(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.TaskController = (function(superClass) {
    extend(TaskController, superClass);

    function TaskController() {
      this.destroy = bind(this.destroy, this);
      this.show = bind(this.show, this);
      return TaskController.__super__.constructor.apply(this, arguments);
    }

    TaskController.prototype.events = {
      'click button.delete': 'destroy',
      'submit form.create': 'create'
    };

    TaskController.prototype.init = function() {
      TaskController.__super__.init.apply(this, arguments);
      return this.setData(new TaskModel({
        'id': 0,
        'text': 'hello world!'
      }));
    };

    TaskController.prototype.show = function(id) {
      TaskController.__super__.show.apply(this, arguments);
      return console.log('showing task id: ' + id);
    };

    TaskController.prototype.destroy = function() {
      this.setData(null);
      return this.app.router.navigate('/tasks');
    };

    return TaskController;

  })(Elegance.Controller);

}).call(this);
