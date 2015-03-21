(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.NoteModel = (function(superClass) {
    extend(NoteModel, superClass);

    function NoteModel() {
      return NoteModel.__super__.constructor.apply(this, arguments);
    }

    return NoteModel;

  })(Elegance.Model);

}).call(this);
