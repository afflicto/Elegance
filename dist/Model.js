(function() {
  var hasProp = {}.hasOwnProperty;

  Elegance.Model = (function() {
    function Model(attributes) {
      this.attributes = attributes != null ? attributes : {};
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

    Model.prototype.destroy = function() {
      return this.radio.fire('destroy');
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
            changed[key] = value;
          }
        }
      }
      if (this.attributes[attribute] !== value) {
        this.attributes[attribute] = value;
        isDifferent = true;
      }
      if (isDifferent) {
        return this.radio.fire('change', attribute, value);
      }
    };

    return Model;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUEsMkJBQUE7O0FBQUEsRUFBTSxRQUFRLENBQUM7QUFDRCxJQUFBLGVBQUMsVUFBRCxHQUFBO0FBQXNCLE1BQXJCLElBQUMsQ0FBQSxrQ0FBRCxhQUFjLEVBQU8sQ0FBQTtBQUFBLE1BQUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxHQUFBLENBQUEsUUFBWSxDQUFDLEtBQXRCLENBQXRCO0lBQUEsQ0FBYjs7QUFFQTtBQUFBOzs7OztPQUZBOztBQUFBLG9CQVFBLEVBQUEsR0FBSSxTQUFDLFNBQUQsRUFBWSxRQUFaLEdBQUE7YUFBeUIsSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUFQLENBQVUsU0FBVixFQUFxQixRQUFyQixFQUF6QjtJQUFBLENBUkosQ0FBQTs7QUFBQSxvQkFVQSxHQUFBLEdBQUssU0FBQyxTQUFELEVBQVksU0FBWixHQUFBO2FBQTBCLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBUCxDQUFXLFNBQVgsRUFBc0IsU0FBdEIsRUFBMUI7SUFBQSxDQVZMLENBQUE7O0FBQUEsb0JBWUEsT0FBQSxHQUFTLFNBQUEsR0FBQTthQUFNLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLFNBQVosRUFBTjtJQUFBLENBWlQsQ0FBQTs7QUFjQTtBQUFBOzs7O09BZEE7O0FBQUEsb0JBbUJBLEdBQUEsR0FBSyxTQUFDLFNBQUQsR0FBQTthQUFlLElBQUMsQ0FBQSxVQUFXLENBQUEsU0FBQSxFQUEzQjtJQUFBLENBbkJMLENBQUE7O0FBQUEsb0JBcUJBLEdBQUEsR0FBSyxTQUFDLFNBQUQsRUFBWSxLQUFaLEdBQUE7QUFDSixVQUFBLGdCQUFBO0FBQUEsTUFBQSxXQUFBLEdBQWMsS0FBZCxDQUFBO0FBRUEsTUFBQSxJQUFHLE1BQUEsQ0FBQSxTQUFBLEtBQW9CLFFBQXZCO0FBQ0MsYUFBQSxnQkFBQTs7aUNBQUE7QUFDQyxVQUFBLElBQU8sSUFBQyxDQUFBLFVBQVcsQ0FBQSxHQUFBLENBQVosS0FBb0IsS0FBM0I7QUFDQyxZQUFBLElBQUMsQ0FBQSxVQUFXLENBQUEsR0FBQSxDQUFaLEdBQW1CLEtBQW5CLENBQUE7QUFBQSxZQUNBLFdBQUEsR0FBYyxJQURkLENBQUE7QUFBQSxZQUVBLE9BQVEsQ0FBQSxHQUFBLENBQVIsR0FBZSxLQUZmLENBREQ7V0FERDtBQUFBLFNBREQ7T0FGQTtBQVNBLE1BQUEsSUFBRyxJQUFDLENBQUEsVUFBVyxDQUFBLFNBQUEsQ0FBWixLQUEwQixLQUE3QjtBQUNDLFFBQUEsSUFBQyxDQUFBLFVBQVcsQ0FBQSxTQUFBLENBQVosR0FBeUIsS0FBekIsQ0FBQTtBQUFBLFFBQ0EsV0FBQSxHQUFjLElBRGQsQ0FERDtPQVRBO0FBYUEsTUFBQSxJQUEwQyxXQUExQztlQUFBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLFFBQVosRUFBc0IsU0FBdEIsRUFBaUMsS0FBakMsRUFBQTtPQWRJO0lBQUEsQ0FyQkwsQ0FBQTs7aUJBQUE7O01BREQsQ0FBQTtBQUFBIiwiZmlsZSI6Im1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRWxlZ2FuY2UuTW9kZWxcclxuXHRjb25zdHJ1Y3RvcjogKEBhdHRyaWJ1dGVzID0ge30pIC0+IEByYWRpbyA9IG5ldyBFbGVnYW5jZS5SYWRpb1xyXG5cclxuXHQjIyMqXHJcblx0ICogQmVnaW4gbGlzdGVuaW5nIGZvciBhbiBldmVudCBvbiB0aGlzIG1vZGVscyByYWRpb1xyXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gICBldmVudCAgICBuYW1lIG9mIHRoZSBldmVudCB0byBsaXN0ZW4gZm9yXHJcblx0ICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIHRoZSBjYWxsYmFjayBmdW5jdGlvblxyXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXHJcblx0IyMjXHJcblx0b246IChldmVudE5hbWUsIGNhbGxiYWNrKSAtPiBAcmFkaW8ub24gZXZlbnROYW1lLCBjYWxsYmFja1xyXG5cclxuXHRvZmY6IChldmVudE5hbWUsIGxpc3RlbmVycykgLT4gQHJhZGlvLm9mZiBldmVudE5hbWUsIGxpc3RlbmVyc1xyXG5cclxuXHRkZXN0cm95OiAoKSAtPiBAcmFkaW8uZmlyZSAnZGVzdHJveSdcclxuXHJcblx0IyMjKlxyXG5cdCAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZVxyXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gYXR0cmlidXRlIHRoZSBhdHRyaWJ1dGUva2V5XHJcblx0ICogQHJldHVybiB7bWl4ZWR9ICAgICAgICAgICB2YWx1ZVxyXG5cdCMjI1xyXG5cdGdldDogKGF0dHJpYnV0ZSkgLT4gQGF0dHJpYnV0ZXNbYXR0cmlidXRlXVxyXG5cclxuXHRzZXQ6IChhdHRyaWJ1dGUsIHZhbHVlKSAtPlxyXG5cdFx0aXNEaWZmZXJlbnQgPSBub1xyXG5cclxuXHRcdGlmIHR5cGVvZiBhdHRyaWJ1dGUgaXMgJ29iamVjdCdcclxuXHRcdFx0Zm9yIG93biBrZXksIHZhbHVlIG9mIGF0dHJpYnV0ZVxyXG5cdFx0XHRcdHVubGVzcyBAYXR0cmlidXRlc1trZXldID09IHZhbHVlXHJcblx0XHRcdFx0XHRAYXR0cmlidXRlc1trZXldID0gdmFsdWVcclxuXHRcdFx0XHRcdGlzRGlmZmVyZW50ID0geWVzXHJcblx0XHRcdFx0XHRjaGFuZ2VkW2tleV0gPSB2YWx1ZVxyXG5cclxuXHRcdGlmIEBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gIT0gdmFsdWVcclxuXHRcdFx0QGF0dHJpYnV0ZXNbYXR0cmlidXRlXSA9IHZhbHVlXHJcblx0XHRcdGlzRGlmZmVyZW50ID0geWVzXHJcblxyXG5cdFx0QHJhZGlvLmZpcmUgJ2NoYW5nZScsIGF0dHJpYnV0ZSwgdmFsdWUgaWYgaXNEaWZmZXJlbnQiXX0=