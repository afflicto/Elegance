(function() {
  var slice = [].slice;

  Elegance.Radio = (function() {
    function Radio() {
      this.listeners = {};
    }

    Radio.prototype.on = function(events, callback) {
      var event, id, j, len, ref;
      id = ++Elegance.Radio.uid;
      ref = events.split(',');
      for (j = 0, len = ref.length; j < len; j++) {
        event = ref[j];
        if ((this.listeners[event] != null) === false) {
          this.listeners[event] = [];
        }
        this.listeners[event].push({
          callback: callback,
          id: id
        });
      }
      return id;
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

  Elegance.Radio.uid = 0;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhZGlvLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUEsZ0JBQUE7O0FBQUEsRUFBTSxRQUFRLENBQUM7QUFDRCxJQUFBLGVBQUEsR0FBQTtBQUNaLE1BQUEsSUFBQyxDQUFBLFNBQUQsR0FBYSxFQUFiLENBRFk7SUFBQSxDQUFiOztBQUFBLG9CQUdBLEVBQUEsR0FBSSxTQUFDLE1BQUQsRUFBUyxRQUFULEdBQUE7QUFDSCxVQUFBLHNCQUFBO0FBQUEsTUFBQSxFQUFBLEdBQUssRUFBQSxRQUFVLENBQUMsS0FBSyxDQUFDLEdBQXRCLENBQUE7QUFFQTtBQUFBLFdBQUEscUNBQUE7dUJBQUE7QUFDQyxRQUFBLElBQUcsK0JBQUEsS0FBc0IsS0FBekI7QUFDQyxVQUFBLElBQUMsQ0FBQSxTQUFVLENBQUEsS0FBQSxDQUFYLEdBQW9CLEVBQXBCLENBREQ7U0FBQTtBQUFBLFFBR0EsSUFBQyxDQUFBLFNBQVUsQ0FBQSxLQUFBLENBQU0sQ0FBQyxJQUFsQixDQUNDO0FBQUEsVUFBQSxRQUFBLEVBQVUsUUFBVjtBQUFBLFVBQ0EsRUFBQSxFQUFJLEVBREo7U0FERCxDQUhBLENBREQ7QUFBQSxPQUZBO0FBVUEsYUFBTyxFQUFQLENBWEc7SUFBQSxDQUhKLENBQUE7O0FBQUEsb0JBZ0JBLEdBQUEsR0FBSyxTQUFDLE1BQUQsRUFBUyxFQUFULEdBQUE7QUFDSixVQUFBLHdDQUFBO0FBQUE7QUFBQTtXQUFBLHFDQUFBO3VCQUFBO0FBQ0MsUUFBQSxJQUFHLEVBQUEsWUFBYyxLQUFqQjs7O0FBQ0M7aUJBQUEsc0NBQUE7d0JBQUE7QUFDQyw0QkFBQSxJQUFDLENBQUEsR0FBRCxDQUFLLEtBQUwsRUFBWSxDQUFaLEVBQUEsQ0FERDtBQUFBOzt5QkFERDtTQUFBLE1BR0ssSUFBRyw2QkFBSDs7O0FBQ0o7QUFBQTtpQkFBQSx3Q0FBQTtpQ0FBQTtBQUNDLGNBQUEsSUFBRyxRQUFRLENBQUMsRUFBVCxLQUFlLEVBQWxCOzhCQUNDLElBQUMsQ0FBQSxTQUFVLENBQUEsS0FBQSxDQUFNLENBQUMsTUFBbEIsQ0FBeUIsSUFBQyxDQUFBLFNBQVUsQ0FBQSxLQUFBLENBQU0sQ0FBQyxPQUFsQixDQUEwQixRQUExQixDQUF6QixFQUE4RCxDQUE5RCxHQUREO2VBQUEsTUFBQTtzQ0FBQTtlQUREO0FBQUE7O3lCQURJO1NBQUEsTUFBQTsrQkFBQTtTQUpOO0FBQUE7cUJBREk7SUFBQSxDQWhCTCxDQUFBOztBQUFBLG9CQTBCQSxJQUFBLEdBQU0sU0FBQSxHQUFBO0FBQ0wsVUFBQSxxREFBQTtBQUFBLE1BRE0sMEJBQVcsa0VBQ2pCLENBQUE7QUFBQSxNQUFBLElBQUcsaUNBQUg7QUFDQztBQUFBO2FBQUEscUNBQUE7NEJBQUE7QUFDQyx1QkFBQSxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQWxCLENBQXdCLElBQXhCLEVBQThCLFVBQTlCLEVBQUEsQ0FERDtBQUFBO3VCQUREO09BREs7SUFBQSxDQTFCTixDQUFBOztpQkFBQTs7TUFERCxDQUFBOztBQUFBLEVBa0NBLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBZixHQUFxQixDQWxDckIsQ0FBQTtBQUFBIiwiZmlsZSI6IlJhZGlvLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRWxlZ2FuY2UuUmFkaW9cclxuXHRjb25zdHJ1Y3RvcjogKCkgLT5cclxuXHRcdEBsaXN0ZW5lcnMgPSB7fVxyXG5cclxuXHRvbjogKGV2ZW50cywgY2FsbGJhY2spIC0+XHJcblx0XHRpZCA9ICsrRWxlZ2FuY2UuUmFkaW8udWlkXHJcblxyXG5cdFx0Zm9yIGV2ZW50IGluIGV2ZW50cy5zcGxpdCAnLCdcclxuXHRcdFx0aWYgQGxpc3RlbmVyc1tldmVudF0/ID09IGZhbHNlXHJcblx0XHRcdFx0QGxpc3RlbmVyc1tldmVudF0gPSBbXVxyXG5cclxuXHRcdFx0QGxpc3RlbmVyc1tldmVudF0ucHVzaFxyXG5cdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xyXG5cdFx0XHRcdGlkOiBpZFxyXG5cclxuXHRcdHJldHVybiBpZFxyXG5cclxuXHRvZmY6IChldmVudHMsIGlkKSAtPlxyXG5cdFx0Zm9yIGV2ZW50IGluIGV2ZW50cy5zcGxpdCAnLCdcclxuXHRcdFx0aWYgaWQgaW5zdGFuY2VvZiBBcnJheVxyXG5cdFx0XHRcdGZvciBpIGluIGlkXHJcblx0XHRcdFx0XHRAb2ZmIGV2ZW50LCBpXHJcblx0XHRcdGVsc2UgaWYgQGxpc3RlbmVyc1tldmVudF0/XHJcblx0XHRcdFx0Zm9yIGxpc3RlbmVyIGluIEBsaXN0ZW5lcnNbZXZlbnRdXHJcblx0XHRcdFx0XHRpZiBsaXN0ZW5lci5pZCA9PSBpZFxyXG5cdFx0XHRcdFx0XHRAbGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoQGxpc3RlbmVyc1tldmVudF0uaW5kZXhPZihsaXN0ZW5lciksIDEpXHJcblxyXG5cdGZpcmU6IChldmVudE5hbWUsIHBhcmFtZXRlcnMuLi4pIC0+XHJcblx0XHRpZiBAbGlzdGVuZXJzW2V2ZW50TmFtZV0/XHJcblx0XHRcdGZvciBsaXN0ZW5lciBpbiBAbGlzdGVuZXJzW2V2ZW50TmFtZV1cclxuXHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseSBudWxsLCBwYXJhbWV0ZXJzXHJcblxyXG5cclxuXHJcbkVsZWdhbmNlLlJhZGlvLnVpZCA9IDAiXX0=