(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Elegance.Collection = (function(superClass) {
    extend(Collection, superClass);

    function Collection(models) {
      var i, len, model;
      if (models == null) {
        models = [];
      }
      for (i = 0, len = models.length; i < len; i++) {
        model = models[i];
        this.push(model);
      }
      this.radio = new Elegance.Radio();
    }

    Collection.prototype.add = function(model) {
      if (!this.contains(model)) {
        this.push(model);
        this.radio.fire('add', model);
        return this.radio.fire('change', 'add', model);
      }
    };

    Collection.prototype.remove = function(model) {
      var index;
      index = this.indexOf(model);
      if (index != null) {
        this.splice(index, 1);
        this.radio.fire('remove', model);
        return this.radio.fire('change', 'remove', model);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbGxlY3Rpb24uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTsrQkFBQTs7QUFBQSxFQUFNLFFBQVEsQ0FBQztBQUVkLGtDQUFBLENBQUE7O0FBQWEsSUFBQSxvQkFBQyxNQUFELEdBQUE7QUFDWixVQUFBLGFBQUE7O1FBRGEsU0FBUztPQUN0QjtBQUFBLFdBQUEsd0NBQUE7MEJBQUE7QUFDQyxRQUFBLElBQUMsQ0FBQSxJQUFELENBQU0sS0FBTixDQUFBLENBREQ7QUFBQSxPQUFBO0FBQUEsTUFFQSxJQUFDLENBQUEsS0FBRCxHQUFhLElBQUEsUUFBUSxDQUFDLEtBQVQsQ0FBQSxDQUZiLENBRFk7SUFBQSxDQUFiOztBQUFBLHlCQUtBLEdBQUEsR0FBSyxTQUFDLEtBQUQsR0FBQTtBQUNKLE1BQUEsSUFBQSxDQUFBLElBQVEsQ0FBQSxRQUFELENBQVUsS0FBVixDQUFQO0FBQ0MsUUFBQSxJQUFDLENBQUEsSUFBRCxDQUFNLEtBQU4sQ0FBQSxDQUFBO0FBQUEsUUFDQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxLQUFaLEVBQW1CLEtBQW5CLENBREEsQ0FBQTtlQUVBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLFFBQVosRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFIRDtPQURJO0lBQUEsQ0FMTCxDQUFBOztBQUFBLHlCQVdBLE1BQUEsR0FBUSxTQUFDLEtBQUQsR0FBQTtBQUNQLFVBQUEsS0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFRLElBQUMsQ0FBQSxPQUFELENBQVMsS0FBVCxDQUFSLENBQUE7QUFDQSxNQUFBLElBQUcsYUFBSDtBQUNDLFFBQUEsSUFBQyxDQUFBLE1BQUQsQ0FBUSxLQUFSLEVBQWUsQ0FBZixDQUFBLENBQUE7QUFBQSxRQUNBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLFFBQVosRUFBc0IsS0FBdEIsQ0FEQSxDQUFBO2VBRUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksUUFBWixFQUFzQixRQUF0QixFQUFnQyxLQUFoQyxFQUhEO09BRk87SUFBQSxDQVhSLENBQUE7O0FBQUEseUJBa0JBLFFBQUEsR0FBVSxTQUFDLEtBQUQsR0FBQTtBQUNULFVBQUEsY0FBQTtBQUFBLFdBQUEsc0NBQUE7eUJBQUE7QUFDQyxRQUFBLElBQUcsTUFBQSxLQUFVLEtBQWI7QUFDQyxpQkFBTyxJQUFQLENBREQ7U0FERDtBQUFBLE9BQUE7YUFHQSxNQUpTO0lBQUEsQ0FsQlYsQ0FBQTs7QUFBQSx5QkF3QkEsRUFBQSxHQUFJLFNBQUMsTUFBRCxFQUFTLFFBQVQsR0FBQTthQUFzQixJQUFDLENBQUEsS0FBSyxDQUFDLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLFFBQWxCLEVBQXRCO0lBQUEsQ0F4QkosQ0FBQTs7QUFBQSx5QkEwQkEsR0FBQSxHQUFLLFNBQUMsTUFBRCxFQUFTLFNBQVQsR0FBQTthQUF1QixJQUFDLENBQUEsS0FBSyxDQUFDLEdBQVAsQ0FBVyxNQUFYLEVBQW1CLFNBQW5CLEVBQXZCO0lBQUEsQ0ExQkwsQ0FBQTs7c0JBQUE7O0tBRmlDLE1BQWxDLENBQUE7QUFBQSIsImZpbGUiOiJDb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRWxlZ2FuY2UuQ29sbGVjdGlvbiBleHRlbmRzIEFycmF5XHJcblx0XHJcblx0Y29uc3RydWN0b3I6IChtb2RlbHMgPSBbXSkgLT5cclxuXHRcdGZvciBtb2RlbCBpbiBtb2RlbHNcclxuXHRcdFx0QHB1c2ggbW9kZWxcclxuXHRcdEByYWRpbyA9IG5ldyBFbGVnYW5jZS5SYWRpbygpXHJcblxyXG5cdGFkZDogKG1vZGVsKSAtPlxyXG5cdFx0dW5sZXNzIEBjb250YWlucyBtb2RlbFxyXG5cdFx0XHRAcHVzaCBtb2RlbFxyXG5cdFx0XHRAcmFkaW8uZmlyZSAnYWRkJywgbW9kZWxcclxuXHRcdFx0QHJhZGlvLmZpcmUgJ2NoYW5nZScsICdhZGQnLCBtb2RlbFxyXG5cclxuXHRyZW1vdmU6IChtb2RlbCkgLT5cclxuXHRcdGluZGV4ID0gQGluZGV4T2YgbW9kZWxcclxuXHRcdGlmIGluZGV4P1xyXG5cdFx0XHRAc3BsaWNlIGluZGV4LCAxXHJcblx0XHRcdEByYWRpby5maXJlICdyZW1vdmUnLCBtb2RlbFxyXG5cdFx0XHRAcmFkaW8uZmlyZSAnY2hhbmdlJywgJ3JlbW92ZScsIG1vZGVsXHJcblxyXG5cdGNvbnRhaW5zOiAobW9kZWwpIC0+XHJcblx0XHRmb3IgcmVjb3JkIGluIEBcclxuXHRcdFx0aWYgcmVjb3JkID09IG1vZGVsXHJcblx0XHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdGZhbHNlXHJcblxyXG5cdG9uOiAoZXZlbnRzLCBjYWxsYmFjaykgLT4gQHJhZGlvLm9uIGV2ZW50cywgY2FsbGJhY2tcclxuXHJcblx0b2ZmOiAoZXZlbnRzLCBsaXN0ZW5lcnMpIC0+IEByYWRpby5vZmYgZXZlbnRzLCBsaXN0ZW5lcnNcclxuIl19