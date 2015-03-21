(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.TasksController = (function(superClass) {
    extend(TasksController, superClass);

    function TasksController() {
      this.create = bind(this.create, this);
      return TasksController.__super__.constructor.apply(this, arguments);
    }

    TasksController.prototype.events = {
      'submit form.create': 'create'
    };

    TasksController.prototype.container = 'ul.tasks';

    TasksController.prototype.init = function() {
      var collection;
      TasksController.__super__.init.apply(this, arguments);
      collection = new Elegance.Collection;
      collection.add(new TaskModel({
        'id': 0,
        'name': 'Something',
        'text': 'Lorem ipsum dolor sit amet.'
      }));
      collection.add(new TaskModel({
        'id': 1,
        'name': 'Two!',
        'text': 'Lorem ipsum dolor.'
      }));
      collection.add(new TaskModel({
        'id': 2,
        'name': 'Something else',
        'text': 'Do that, then Lorem'
      }));
      collection.add(new TaskModel({
        'id': 3,
        'name': 'Number four!',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, labore!'
      }));
      return this.setData(collection);
    };

    TasksController.prototype.create = function(input) {
      return this.data.add(new TaskModel(input));
    };

    return TasksController;

  })(Elegance.CollectionController);

}).call(this);
