(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.TaskModel = (function(superClass) {
    extend(TaskModel, superClass);

    function TaskModel() {
      return TaskModel.__super__.constructor.apply(this, arguments);
    }

    TaskModel.prototype.attributes = {
      id: 0,
      name: "new task",
      text: "lorem ipsum",
      completed: false
    };

    return TaskModel;

  })(Elegance.Model);

}).call(this);
