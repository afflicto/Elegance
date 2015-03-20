(function() {
  var slice = [].slice;

  Elegance.Radio = (function() {
    function Radio() {
      this.listeners = {};
      this.uid = 0;
    }

    Radio.prototype.on = function(events, callback) {
      var event, id, j, len, ref;
      id = ++this.uid;
      ref = events.split(',');
      for (j = 0, len = ref.length; j < len; j++) {
        event = ref[j];
        if ((this.listeners[event] != null) === false) {
          this.listeners[event] = [];
        }
        this.listeners[event].push({
          callback: callback,
          id: this.uid
        });
      }
      return this.uid;
    };

    Radio.prototype.off = function(events, id) {
      var event, i, j, len, listener, ref, results;
      ref = events.split(',');
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        event = ref[j];
        if (id instanceof Array) {
          results.push((function() {
            var k, len1, results1;
            results1 = [];
            for (k = 0, len1 = id.length; k < len1; k++) {
              i = id[k];
              results1.push(this.off(event, i));
            }
            return results1;
          }).call(this));
        } else if (this.listeners[event] != null) {
          results.push((function() {
            var k, len1, ref1, results1;
            ref1 = this.listeners[event];
            results1 = [];
            for (k = 0, len1 = ref1.length; k < len1; k++) {
              listener = ref1[k];
              if (listener.id === id) {
                results1.push(this.listeners[event].splice(this.listeners[event].indexOf(listener), 1));
              } else {
                results1.push(void 0);
              }
            }
            return results1;
          }).call(this));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    Radio.prototype.fire = function() {
      var eventName, j, len, listener, parameters, ref, results;
      eventName = arguments[0], parameters = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (this.listeners[eventName] != null) {
        ref = this.listeners[eventName];
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          listener = ref[j];
          results.push(listener.callback.apply(null, parameters));
        }
        return results;
      }
    };

    return Radio;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUEsZ0JBQUE7O0FBQUEsRUFBTSxRQUFRLENBQUM7QUFDRCxJQUFBLGVBQUEsR0FBQTtBQUNaLE1BQUEsSUFBQyxDQUFBLFNBQUQsR0FBYSxFQUFiLENBQUE7QUFBQSxNQUNBLElBQUMsQ0FBQSxHQUFELEdBQU8sQ0FEUCxDQURZO0lBQUEsQ0FBYjs7QUFBQSxvQkFJQSxFQUFBLEdBQUksU0FBQyxNQUFELEVBQVMsUUFBVCxHQUFBO0FBQ0gsVUFBQSxzQkFBQTtBQUFBLE1BQUEsRUFBQSxHQUFLLEVBQUEsSUFBRyxDQUFBLEdBQVIsQ0FBQTtBQUVBO0FBQUEsV0FBQSxxQ0FBQTt1QkFBQTtBQUNDLFFBQUEsSUFBRywrQkFBQSxLQUFzQixLQUF6QjtBQUNDLFVBQUEsSUFBQyxDQUFBLFNBQVUsQ0FBQSxLQUFBLENBQVgsR0FBb0IsRUFBcEIsQ0FERDtTQUFBO0FBQUEsUUFHQSxJQUFDLENBQUEsU0FBVSxDQUFBLEtBQUEsQ0FBTSxDQUFDLElBQWxCLENBQ0M7QUFBQSxVQUFBLFFBQUEsRUFBVSxRQUFWO0FBQUEsVUFDQSxFQUFBLEVBQUksSUFBQyxDQUFBLEdBREw7U0FERCxDQUhBLENBREQ7QUFBQSxPQUZBO0FBVUEsYUFBTyxJQUFDLENBQUEsR0FBUixDQVhHO0lBQUEsQ0FKSixDQUFBOztBQUFBLG9CQWlCQSxHQUFBLEdBQUssU0FBQyxNQUFELEVBQVMsRUFBVCxHQUFBO0FBQ0osVUFBQSx3Q0FBQTtBQUFBO0FBQUE7V0FBQSxxQ0FBQTt1QkFBQTtBQUNDLFFBQUEsSUFBRyxFQUFBLFlBQWMsS0FBakI7OztBQUNDO2lCQUFBLHNDQUFBO3dCQUFBO0FBQ0MsNEJBQUEsSUFBQyxDQUFBLEdBQUQsQ0FBSyxLQUFMLEVBQVksQ0FBWixFQUFBLENBREQ7QUFBQTs7eUJBREQ7U0FBQSxNQUdLLElBQUcsNkJBQUg7OztBQUNKO0FBQUE7aUJBQUEsd0NBQUE7aUNBQUE7QUFDQyxjQUFBLElBQUcsUUFBUSxDQUFDLEVBQVQsS0FBZSxFQUFsQjs4QkFDQyxJQUFDLENBQUEsU0FBVSxDQUFBLEtBQUEsQ0FBTSxDQUFDLE1BQWxCLENBQXlCLElBQUMsQ0FBQSxTQUFVLENBQUEsS0FBQSxDQUFNLENBQUMsT0FBbEIsQ0FBMEIsUUFBMUIsQ0FBekIsRUFBOEQsQ0FBOUQsR0FERDtlQUFBLE1BQUE7c0NBQUE7ZUFERDtBQUFBOzt5QkFESTtTQUFBLE1BQUE7K0JBQUE7U0FKTjtBQUFBO3FCQURJO0lBQUEsQ0FqQkwsQ0FBQTs7QUFBQSxvQkEyQkEsSUFBQSxHQUFNLFNBQUEsR0FBQTtBQUNMLFVBQUEscURBQUE7QUFBQSxNQURNLDBCQUFXLGtFQUNqQixDQUFBO0FBQUEsTUFBQSxJQUFHLGlDQUFIO0FBQ0M7QUFBQTthQUFBLHFDQUFBOzRCQUFBO0FBQ0MsdUJBQUEsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFsQixDQUF3QixJQUF4QixFQUE4QixVQUE5QixFQUFBLENBREQ7QUFBQTt1QkFERDtPQURLO0lBQUEsQ0EzQk4sQ0FBQTs7aUJBQUE7O01BREQsQ0FBQTtBQUFBIiwiZmlsZSI6InJhZGlvLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRWxlZ2FuY2UuUmFkaW9cclxuXHRjb25zdHJ1Y3RvcjogKCkgLT5cclxuXHRcdEBsaXN0ZW5lcnMgPSB7fVxyXG5cdFx0QHVpZCA9IDBcclxuXHJcblx0b246IChldmVudHMsIGNhbGxiYWNrKSAtPlxyXG5cdFx0aWQgPSArK0B1aWRcclxuXHJcblx0XHRmb3IgZXZlbnQgaW4gZXZlbnRzLnNwbGl0ICcsJ1xyXG5cdFx0XHRpZiBAbGlzdGVuZXJzW2V2ZW50XT8gPT0gZmFsc2VcclxuXHRcdFx0XHRAbGlzdGVuZXJzW2V2ZW50XSA9IFtdXHJcblxyXG5cdFx0XHRAbGlzdGVuZXJzW2V2ZW50XS5wdXNoXHJcblx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXHJcblx0XHRcdFx0aWQ6IEB1aWRcclxuXHJcblx0XHRyZXR1cm4gQHVpZFxyXG5cclxuXHRvZmY6IChldmVudHMsIGlkKSAtPlxyXG5cdFx0Zm9yIGV2ZW50IGluIGV2ZW50cy5zcGxpdCAnLCdcclxuXHRcdFx0aWYgaWQgaW5zdGFuY2VvZiBBcnJheVxyXG5cdFx0XHRcdGZvciBpIGluIGlkXHJcblx0XHRcdFx0XHRAb2ZmIGV2ZW50LCBpXHJcblx0XHRcdGVsc2UgaWYgQGxpc3RlbmVyc1tldmVudF0/XHJcblx0XHRcdFx0Zm9yIGxpc3RlbmVyIGluIEBsaXN0ZW5lcnNbZXZlbnRdXHJcblx0XHRcdFx0XHRpZiBsaXN0ZW5lci5pZCA9PSBpZFxyXG5cdFx0XHRcdFx0XHRAbGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoQGxpc3RlbmVyc1tldmVudF0uaW5kZXhPZihsaXN0ZW5lciksIDEpXHJcblxyXG5cdGZpcmU6IChldmVudE5hbWUsIHBhcmFtZXRlcnMuLi4pIC0+XHJcblx0XHRpZiBAbGlzdGVuZXJzW2V2ZW50TmFtZV0/XHJcblx0XHRcdGZvciBsaXN0ZW5lciBpbiBAbGlzdGVuZXJzW2V2ZW50TmFtZV1cclxuXHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseSBudWxsLCBwYXJhbWV0ZXJzIl19