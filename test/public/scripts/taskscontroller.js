(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.TasksController = (function(superClass) {
    extend(TasksController, superClass);

    function TasksController() {
      return TasksController.__super__.constructor.apply(this, arguments);
    }

    return TasksController;

  })(Elegance.CollectionController);

}).call(this);
