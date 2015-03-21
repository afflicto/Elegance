(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.NotesController = (function(superClass) {
    extend(NotesController, superClass);

    function NotesController() {
      this.destroy = bind(this.destroy, this);
      this.create = bind(this.create, this);
      return NotesController.__super__.constructor.apply(this, arguments);
    }

    NotesController.prototype.container = 'ul.notes';

    NotesController.prototype.events = {
      'submit form.create': 'create'
    };

    NotesController.prototype.childEvents = {
      'click button.destroy': 'destroy'
    };

    NotesController.prototype.init = function() {
      var collection;
      NotesController.__super__.init.apply(this, arguments);
      collection = new Elegance.Collection;
      collection.add(new NoteModel({
        'id': 0,
        'name': 'note 1',
        'text': 'Lorem ipsum dolor sit amet.'
      }));
      collection.add(new NoteModel({
        'id': 1,
        'name': 'Note Two!',
        'text': 'Lorem ipsum dolor.'
      }));
      collection.add(new NoteModel({
        'id': 2,
        'name': 'third note here',
        'text': 'Do that, then Lorem'
      }));
      collection.add(new NoteModel({
        'id': 3,
        'name': 'Number four!',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, labore!'
      }));
      return this.setData(collection);
    };

    NotesController.prototype.create = function(input) {
      return this.data.add(new NoteModel({
        id: this.data.length + 1,
        name: input.name,
        text: input.text
      }));
    };

    NotesController.prototype.destroy = function(note) {
      return note.destroy();
    };

    return NotesController;

  })(Elegance.CollectionController);

}).call(this);
