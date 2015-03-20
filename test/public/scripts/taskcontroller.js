(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.TaskController = (function(superClass) {
    extend(TaskController, superClass);

    function TaskController() {
      this.destroy = bind(this.destroy, this);
      return TaskController.__super__.constructor.apply(this, arguments);
    }

    TaskController.prototype.events = {
      'click button.delete': 'destroy'
    };

    TaskController.prototype.init = function() {
      TaskController.__super__.init.apply(this, arguments);
      return this.setData(new TaskModel);
    };

    TaskController.prototype.destroy = function() {
      this.setData(null);
      return this.app.router.navigate('/tasks');
    };

    return TaskController;

  })(Elegance.Controller);

}).call(this);
