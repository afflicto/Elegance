(function() {
  var hasProp = {}.hasOwnProperty;

  Elegance.Model = (function() {
    function Model(attributes) {
      if (attributes == null) {
        attributes = {};
      }
      this.app = Elegance.App.instance;
      this.attributes = $.extend({}, this.attributes, attributes);
      this.radio = new Elegance.Radio;
    }


    /**
    	 * Begin listening for an event on this models radio
    	 * @param  {string}   event    name of the event to listen for
    	 * @param  {Function} callback the callback function
    	 * @return {[type]}            [description]
     */

    Model.prototype.on = function(eventName, callback) {
      return this.radio.on(eventName, callback);
    };

    Model.prototype.off = function(eventName, listeners) {
      return this.radio.off(eventName, listeners);
    };


    /**
    	 * Get the value of the attribute
    	 * @param  {string} attribute the attribute/key
    	 * @return {mixed}           value
     */

    Model.prototype.get = function(attribute) {
      return this.attributes[attribute];
    };

    Model.prototype.set = function(attribute, value) {
      var isDifferent, key;
      isDifferent = false;
      if (typeof attribute === 'object') {
        for (key in attribute) {
          if (!hasProp.call(attribute, key)) continue;
          value = attribute[key];
          if (this.attributes[key] !== value) {
            this.attributes[key] = value;
            isDifferent = true;
          }
        }
      } else if (this.attributes[attribute] !== value) {
        this.attributes[attribute] = value;
        isDifferent = true;
      }
      if (isDifferent) {
        return this.radio.fire('change', attribute, value);
      }
    };

    Model.prototype.destroy = function(persist) {
      if (persist == null) {
        persist = true;
      }
      this.radio.fire('destroy');
      if (persist) {
        return this.app.store.destroy(this);
      }
    };

    Model.prototype.save = function() {
      return this.app.store.save(this);
    };

    return Model;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGVsLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUEsMkJBQUE7O0FBQUEsRUFBTSxRQUFRLENBQUM7QUFDRCxJQUFBLGVBQUMsVUFBRCxHQUFBOztRQUFDLGFBQWE7T0FDMUI7QUFBQSxNQUFBLElBQUMsQ0FBQSxHQUFELEdBQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFwQixDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsVUFBRCxHQUFjLENBQUMsQ0FBQyxNQUFGLENBQVMsRUFBVCxFQUFhLElBQUMsQ0FBQSxVQUFkLEVBQTBCLFVBQTFCLENBRGQsQ0FBQTtBQUFBLE1BRUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxHQUFBLENBQUEsUUFBWSxDQUFDLEtBRnRCLENBRFk7SUFBQSxDQUFiOztBQUtBO0FBQUE7Ozs7O09BTEE7O0FBQUEsb0JBV0EsRUFBQSxHQUFJLFNBQUMsU0FBRCxFQUFZLFFBQVosR0FBQTthQUF5QixJQUFDLENBQUEsS0FBSyxDQUFDLEVBQVAsQ0FBVSxTQUFWLEVBQXFCLFFBQXJCLEVBQXpCO0lBQUEsQ0FYSixDQUFBOztBQUFBLG9CQWFBLEdBQUEsR0FBSyxTQUFDLFNBQUQsRUFBWSxTQUFaLEdBQUE7YUFBMEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFQLENBQVcsU0FBWCxFQUFzQixTQUF0QixFQUExQjtJQUFBLENBYkwsQ0FBQTs7QUFlQTtBQUFBOzs7O09BZkE7O0FBQUEsb0JBb0JBLEdBQUEsR0FBSyxTQUFDLFNBQUQsR0FBQTthQUFlLElBQUMsQ0FBQSxVQUFXLENBQUEsU0FBQSxFQUEzQjtJQUFBLENBcEJMLENBQUE7O0FBQUEsb0JBc0JBLEdBQUEsR0FBSyxTQUFDLFNBQUQsRUFBWSxLQUFaLEdBQUE7QUFDSixVQUFBLGdCQUFBO0FBQUEsTUFBQSxXQUFBLEdBQWMsS0FBZCxDQUFBO0FBRUEsTUFBQSxJQUFHLE1BQUEsQ0FBQSxTQUFBLEtBQW9CLFFBQXZCO0FBQ0MsYUFBQSxnQkFBQTs7aUNBQUE7QUFDQyxVQUFBLElBQU8sSUFBQyxDQUFBLFVBQVcsQ0FBQSxHQUFBLENBQVosS0FBb0IsS0FBM0I7QUFDQyxZQUFBLElBQUMsQ0FBQSxVQUFXLENBQUEsR0FBQSxDQUFaLEdBQW1CLEtBQW5CLENBQUE7QUFBQSxZQUNBLFdBQUEsR0FBYyxJQURkLENBREQ7V0FERDtBQUFBLFNBREQ7T0FBQSxNQU1LLElBQUcsSUFBQyxDQUFBLFVBQVcsQ0FBQSxTQUFBLENBQVosS0FBMEIsS0FBN0I7QUFDSixRQUFBLElBQUMsQ0FBQSxVQUFXLENBQUEsU0FBQSxDQUFaLEdBQXlCLEtBQXpCLENBQUE7QUFBQSxRQUNBLFdBQUEsR0FBYyxJQURkLENBREk7T0FSTDtBQVlBLE1BQUEsSUFBMEMsV0FBMUM7ZUFBQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxRQUFaLEVBQXNCLFNBQXRCLEVBQWlDLEtBQWpDLEVBQUE7T0FiSTtJQUFBLENBdEJMLENBQUE7O0FBQUEsb0JBcUNBLE9BQUEsR0FBUyxTQUFDLE9BQUQsR0FBQTs7UUFBQyxVQUFVO09BQ25CO0FBQUEsTUFBQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxTQUFaLENBQUEsQ0FBQTtBQUNBLE1BQUEsSUFBRyxPQUFIO2VBQ0MsSUFBQyxDQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBWCxDQUFtQixJQUFuQixFQUREO09BRlE7SUFBQSxDQXJDVCxDQUFBOztBQUFBLG9CQTBDQSxJQUFBLEdBQU0sU0FBQSxHQUFBO2FBQ0wsSUFBQyxDQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBWCxDQUFnQixJQUFoQixFQURLO0lBQUEsQ0ExQ04sQ0FBQTs7aUJBQUE7O01BREQsQ0FBQTtBQUFBIiwiZmlsZSI6Ik1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRWxlZ2FuY2UuTW9kZWxcclxuXHRjb25zdHJ1Y3RvcjogKGF0dHJpYnV0ZXMgPSB7fSkgLT5cclxuXHRcdEBhcHAgPSBFbGVnYW5jZS5BcHAuaW5zdGFuY2VcclxuXHRcdEBhdHRyaWJ1dGVzID0gJC5leHRlbmQge30sIEBhdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzXHJcblx0XHRAcmFkaW8gPSBuZXcgRWxlZ2FuY2UuUmFkaW9cclxuXHJcblx0IyMjKlxyXG5cdCAqIEJlZ2luIGxpc3RlbmluZyBmb3IgYW4gZXZlbnQgb24gdGhpcyBtb2RlbHMgcmFkaW9cclxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICAgZXZlbnQgICAgbmFtZSBvZiB0aGUgZXZlbnQgdG8gbGlzdGVuIGZvclxyXG5cdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cclxuXHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxyXG5cdCMjI1xyXG5cdG9uOiAoZXZlbnROYW1lLCBjYWxsYmFjaykgLT4gQHJhZGlvLm9uIGV2ZW50TmFtZSwgY2FsbGJhY2tcclxuXHJcblx0b2ZmOiAoZXZlbnROYW1lLCBsaXN0ZW5lcnMpIC0+IEByYWRpby5vZmYgZXZlbnROYW1lLCBsaXN0ZW5lcnNcclxuXHJcblx0IyMjKlxyXG5cdCAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZVxyXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gYXR0cmlidXRlIHRoZSBhdHRyaWJ1dGUva2V5XHJcblx0ICogQHJldHVybiB7bWl4ZWR9ICAgICAgICAgICB2YWx1ZVxyXG5cdCMjI1xyXG5cdGdldDogKGF0dHJpYnV0ZSkgLT4gQGF0dHJpYnV0ZXNbYXR0cmlidXRlXVxyXG5cclxuXHRzZXQ6IChhdHRyaWJ1dGUsIHZhbHVlKSAtPlxyXG5cdFx0aXNEaWZmZXJlbnQgPSBub1xyXG5cclxuXHRcdGlmIHR5cGVvZiBhdHRyaWJ1dGUgaXMgJ29iamVjdCdcclxuXHRcdFx0Zm9yIG93biBrZXksIHZhbHVlIG9mIGF0dHJpYnV0ZVxyXG5cdFx0XHRcdHVubGVzcyBAYXR0cmlidXRlc1trZXldID09IHZhbHVlXHJcblx0XHRcdFx0XHRAYXR0cmlidXRlc1trZXldID0gdmFsdWVcclxuXHRcdFx0XHRcdGlzRGlmZmVyZW50ID0geWVzXHJcblxyXG5cdFx0ZWxzZSBpZiBAYXR0cmlidXRlc1thdHRyaWJ1dGVdICE9IHZhbHVlXHJcblx0XHRcdEBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPSB2YWx1ZVxyXG5cdFx0XHRpc0RpZmZlcmVudCA9IHllc1xyXG5cclxuXHRcdEByYWRpby5maXJlICdjaGFuZ2UnLCBhdHRyaWJ1dGUsIHZhbHVlIGlmIGlzRGlmZmVyZW50XHJcblxyXG5cdGRlc3Ryb3k6IChwZXJzaXN0ID0gdHJ1ZSkgLT4gXHJcblx0XHRAcmFkaW8uZmlyZSAnZGVzdHJveSdcclxuXHRcdGlmIHBlcnNpc3RcclxuXHRcdFx0QGFwcC5zdG9yZS5kZXN0cm95IEBcclxuXHJcblx0c2F2ZTogKCkgLT5cclxuXHRcdEBhcHAuc3RvcmUuc2F2ZSBAIl19