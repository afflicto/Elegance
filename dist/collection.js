
/**
 * A Collection of models.
 *
 * events:
 * change: when a model fires change
 * add: when a model is added
 * remove: when a model is removed
 */

(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Elegance.Collection = (function(superClass) {
    extend(Collection, superClass);

    function Collection(models) {
      var i, len, model;
      if (models == null) {
        models = [];
      }
      this.onModelChanged = bind(this.onModelChanged, this);
      this.radio = new Elegance.Radio();
      this.listeners = [];
      for (i = 0, len = models.length; i < len; i++) {
        model = models[i];
        this.push(model);
        this.listeners.push(model.on('change', (function(_this) {
          return function() {
            return _this.onModelChanged(model);
          };
        })(this)));
        this.listeners.push(model.on('destroy', (function(_this) {
          return function() {
            return _this.remove(model);
          };
        })(this)));
      }
    }

    Collection.prototype.onModelChanged = function(model) {
      return this.radio.fire('change', model);
    };

    Collection.prototype.find = function(id) {
      var i, len, model;
      id = parseInt(id);
      for (i = 0, len = this.length; i < len; i++) {
        model = this[i];
        if (model.attributes.id === id) {
          return model;
        }
      }
      return null;
    };

    Collection.prototype.add = function(model) {
      if (!this.contains(model)) {
        this.push(model);
        this.listeners.push(model.on('change', (function(_this) {
          return function() {
            return _this.onModelChanged(model);
          };
        })(this)));
        this.listeners.push(model.on('destroy', (function(_this) {
          return function() {
            return _this.remove(model);
          };
        })(this)));
        return this.radio.fire('add', model);
      }
    };

    Collection.prototype.remove = function(model) {
      var index;
      index = this.indexOf(model);
      if (this[index] != null) {
        model = this[index];
        if (this.model != null) {
          this.model.off('change', this.listeners);
        }
        this.splice(index, 1);
        return this.radio.fire('remove', model);
      }
    };

    Collection.prototype.contains = function(model) {
      var i, len, record;
      for (i = 0, len = this.length; i < len; i++) {
        record = this[i];
        if (record === model) {
          return true;
        }
      }
      return false;
    };

    Collection.prototype.on = function(events, callback) {
      return this.radio.on(events, callback);
    };

    Collection.prototype.off = function(events, listeners) {
      return this.radio.off(events, listeners);
    };

    return Collection;

  })(Array);

}).call(this);

//# sourceMappingURL=data:application/json;base64,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ZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjIyMqXHJcbiAqIEEgQ29sbGVjdGlvbiBvZiBtb2RlbHMuXHJcbiAqXHJcbiAqIGV2ZW50czpcclxuICogY2hhbmdlOiB3aGVuIGEgbW9kZWwgZmlyZXMgY2hhbmdlXHJcbiAqIGFkZDogd2hlbiBhIG1vZGVsIGlzIGFkZGVkXHJcbiAqIHJlbW92ZTogd2hlbiBhIG1vZGVsIGlzIHJlbW92ZWRcclxuIyMjXHJcbmNsYXNzIEVsZWdhbmNlLkNvbGxlY3Rpb24gZXh0ZW5kcyBBcnJheVxyXG5cdFxyXG5cdGNvbnN0cnVjdG9yOiAobW9kZWxzID0gW10pIC0+XHJcblx0XHRAcmFkaW8gPSBuZXcgRWxlZ2FuY2UuUmFkaW8oKVxyXG5cdFx0QGxpc3RlbmVycyA9IFtdXHJcblxyXG5cdFx0Zm9yIG1vZGVsIGluIG1vZGVsc1xyXG5cdFx0XHRAcHVzaCBtb2RlbFxyXG5cclxuXHRcdFx0IyBsaXN0ZW4gZm9yIG1vZGVsIGNoYW5nZXNcclxuXHRcdFx0QGxpc3RlbmVycy5wdXNoIG1vZGVsLm9uICdjaGFuZ2UnLCAoKSA9PlxyXG5cdFx0XHRcdEBvbk1vZGVsQ2hhbmdlZCBtb2RlbFxyXG5cdFx0XHRAbGlzdGVuZXJzLnB1c2ggbW9kZWwub24gJ2Rlc3Ryb3knLCAoKSA9PlxyXG5cdFx0XHRcdEByZW1vdmUgbW9kZWxcclxuXHRcdFx0XHJcblxyXG5cdG9uTW9kZWxDaGFuZ2VkOiAobW9kZWwpID0+XHJcblx0XHRAcmFkaW8uZmlyZSAnY2hhbmdlJywgbW9kZWxcclxuXHJcblx0ZmluZDogKGlkKSAtPlxyXG5cdFx0aWQgPSBwYXJzZUludCBpZFxyXG5cdFx0Zm9yIG1vZGVsIGluIEBcclxuXHRcdFx0aWYgbW9kZWwuYXR0cmlidXRlcy5pZCA9PSBpZFxyXG5cdFx0XHRcdHJldHVybiBtb2RlbFxyXG5cdFx0cmV0dXJuIG51bGxcclxuXHJcblx0YWRkOiAobW9kZWwpIC0+XHJcblx0XHR1bmxlc3MgQGNvbnRhaW5zIG1vZGVsXHJcblx0XHRcdEBwdXNoIG1vZGVsXHJcblxyXG5cdFx0XHQjIGxpc3RlbiBmb3IgbW9kZWwgY2hhbmdlc1xyXG5cdFx0XHRAbGlzdGVuZXJzLnB1c2ggbW9kZWwub24gJ2NoYW5nZScsICgpID0+XHJcblx0XHRcdFx0QG9uTW9kZWxDaGFuZ2VkIG1vZGVsXHJcblx0XHRcdEBsaXN0ZW5lcnMucHVzaCBtb2RlbC5vbiAnZGVzdHJveScsICgpID0+XHJcblx0XHRcdFx0QHJlbW92ZSBtb2RlbFxyXG5cclxuXHRcdFx0IyB0cmlnZ2VyIGFkZFxyXG5cdFx0XHRAcmFkaW8uZmlyZSAnYWRkJywgbW9kZWxcclxuXHJcblx0cmVtb3ZlOiAobW9kZWwpIC0+XHJcblx0XHRpbmRleCA9IEBpbmRleE9mIG1vZGVsXHJcblx0XHRpZiBAW2luZGV4XT9cclxuXHRcdFx0bW9kZWwgPSBAW2luZGV4XVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgQG1vZGVsP1xyXG5cdFx0XHRcdCMgc3RvcCBsaXN0ZW5pbmcgb24gdGhpcyBtb2RlbFxyXG5cdFx0XHRcdEBtb2RlbC5vZmYgJ2NoYW5nZScsIEBsaXN0ZW5lcnNcclxuXHJcblx0XHRcdEBzcGxpY2UgaW5kZXgsIDFcclxuXHRcdFx0QHJhZGlvLmZpcmUgJ3JlbW92ZScsIG1vZGVsXHJcblxyXG5cdGNvbnRhaW5zOiAobW9kZWwpIC0+XHJcblx0XHRmb3IgcmVjb3JkIGluIEBcclxuXHRcdFx0aWYgcmVjb3JkID09IG1vZGVsXHJcblx0XHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdGZhbHNlXHJcblxyXG5cdG9uOiAoZXZlbnRzLCBjYWxsYmFjaykgLT4gQHJhZGlvLm9uIGV2ZW50cywgY2FsbGJhY2tcclxuXHJcblx0b2ZmOiAoZXZlbnRzLCBsaXN0ZW5lcnMpIC0+IEByYWRpby5vZmYgZXZlbnRzLCBsaXN0ZW5lcnNcclxuIl19