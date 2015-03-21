(function() {
  Elegance.App = (function() {

    /**
    	 * Creates a new Elegance App
    	 * @param  {Array} modules =             [] Array of strings corresponding to a module.
    	 * @return {Elegance.App}         The new App instance
     */
    function App(modules) {
      var clazz, i, instance, len, module;
      if (modules == null) {
        modules = [];
      }
      Elegance.App.instance = this;
      if (modules instanceof Array === false) {
        throw new Error("First argument to Elegance.App must be an Array!");
      }
      this.modules = [];
      for (i = 0, len = modules.length; i < len; i++) {
        module = modules[i];
        clazz = Elegance.modules[module];
        if (clazz != null) {
          instance = new clazz(this);
          this[module] = instance;
        } else {
          throw new Error("Unknown module '" + module + "'");
        }
      }
      $('[data-template-name]').hide();
    }


    /**
    	 * Render some data into a template
    	 * @param  {HTMLElement} element the template
    	 * @param  {Elegance.Collection|Elegance.Model} model   A Collection or Model
    	 * @return {void}
     */

    App.prototype.render = function(element, model) {
      console.log('rendering template');
      if ((this.renderer != null) === false) {
        this.renderer = new Elegance.TemplateRenderer(this);
      }
      return this.renderer.render(element, model);
    };

    return App;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxFQUFNLFFBQVEsQ0FBQztBQUVkO0FBQUE7Ozs7T0FBQTtBQUthLElBQUEsYUFBQyxPQUFELEdBQUE7QUFDWixVQUFBLCtCQUFBOztRQURhLFVBQVU7T0FDdkI7QUFBQSxNQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBYixHQUF3QixJQUF4QixDQUFBO0FBRUEsTUFBQSxJQUFHLE9BQUEsWUFBbUIsS0FBbkIsS0FBNEIsS0FBL0I7QUFDQyxjQUFVLElBQUEsS0FBQSxDQUFNLGtEQUFOLENBQVYsQ0FERDtPQUZBO0FBQUEsTUFNQSxJQUFDLENBQUEsT0FBRCxHQUFXLEVBTlgsQ0FBQTtBQU9BLFdBQUEseUNBQUE7NEJBQUE7QUFFQyxRQUFBLEtBQUEsR0FBUSxRQUFRLENBQUMsT0FBUSxDQUFBLE1BQUEsQ0FBekIsQ0FBQTtBQUNBLFFBQUEsSUFBRyxhQUFIO0FBQ0MsVUFBQSxRQUFBLEdBQWUsSUFBQSxLQUFBLENBQU0sSUFBTixDQUFmLENBQUE7QUFBQSxVQUNBLElBQUssQ0FBQSxNQUFBLENBQUwsR0FBZSxRQURmLENBREQ7U0FBQSxNQUFBO0FBSUMsZ0JBQVUsSUFBQSxLQUFBLENBQU0sa0JBQUEsR0FBbUIsTUFBbkIsR0FBMEIsR0FBaEMsQ0FBVixDQUpEO1NBSEQ7QUFBQSxPQVBBO0FBQUEsTUFpQkEsQ0FBQSxDQUFFLHNCQUFGLENBQXlCLENBQUMsSUFBMUIsQ0FBQSxDQWpCQSxDQURZO0lBQUEsQ0FMYjs7QUF5QkE7QUFBQTs7Ozs7T0F6QkE7O0FBQUEsa0JBK0JBLE1BQUEsR0FBUSxTQUFDLE9BQUQsRUFBVSxLQUFWLEdBQUE7QUFDUCxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksb0JBQVosQ0FBQSxDQUFBO0FBQ0EsTUFBQSxJQUFHLHVCQUFBLEtBQWMsS0FBakI7QUFDQyxRQUFBLElBQUMsQ0FBQSxRQUFELEdBQWdCLElBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLElBQTFCLENBQWhCLENBREQ7T0FEQTthQUdBLElBQUMsQ0FBQSxRQUFRLENBQUMsTUFBVixDQUFpQixPQUFqQixFQUEwQixLQUExQixFQUpPO0lBQUEsQ0EvQlIsQ0FBQTs7ZUFBQTs7TUFGRCxDQUFBO0FBQUEiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRWxlZ2FuY2UuQXBwXHJcblxyXG5cdCMjIypcclxuXHQgKiBDcmVhdGVzIGEgbmV3IEVsZWdhbmNlIEFwcFxyXG5cdCAqIEBwYXJhbSAge0FycmF5fSBtb2R1bGVzID0gICAgICAgICAgICAgW10gQXJyYXkgb2Ygc3RyaW5ncyBjb3JyZXNwb25kaW5nIHRvIGEgbW9kdWxlLlxyXG5cdCAqIEByZXR1cm4ge0VsZWdhbmNlLkFwcH0gICAgICAgICBUaGUgbmV3IEFwcCBpbnN0YW5jZVxyXG5cdCMjI1xyXG5cdGNvbnN0cnVjdG9yOiAobW9kdWxlcyA9IFtdKSAtPlxyXG5cdFx0RWxlZ2FuY2UuQXBwLmluc3RhbmNlID0gdGhpc1xyXG5cdFx0XHJcblx0XHRpZiBtb2R1bGVzIGluc3RhbmNlb2YgQXJyYXkgaXMgZmFsc2VcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yIFwiRmlyc3QgYXJndW1lbnQgdG8gRWxlZ2FuY2UuQXBwIG11c3QgYmUgYW4gQXJyYXkhXCJcclxuXHJcblx0XHQjIGluaXQgbW9kdWxlc1xyXG5cdFx0QG1vZHVsZXMgPSBbXVxyXG5cdFx0Zm9yIG1vZHVsZSBpbiBtb2R1bGVzXHJcblx0XHRcdCMgY3JlYXRlIG1vZHVsZVxyXG5cdFx0XHRjbGF6eiA9IEVsZWdhbmNlLm1vZHVsZXNbbW9kdWxlXVxyXG5cdFx0XHRpZiBjbGF6ej9cclxuXHRcdFx0XHRpbnN0YW5jZSA9IG5ldyBjbGF6eihAKVxyXG5cdFx0XHRcdHRoaXNbbW9kdWxlXSA9IGluc3RhbmNlXHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IgXCJVbmtub3duIG1vZHVsZSAnI3ttb2R1bGV9J1wiXHJcblxyXG5cdFx0IyBoaWRlIGFsbCB0ZW1wbGF0ZXNcclxuXHRcdCQoJ1tkYXRhLXRlbXBsYXRlLW5hbWVdJykuaGlkZSgpXHJcblxyXG5cdCMjIypcclxuXHQgKiBSZW5kZXIgc29tZSBkYXRhIGludG8gYSB0ZW1wbGF0ZVxyXG5cdCAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50IHRoZSB0ZW1wbGF0ZVxyXG5cdCAqIEBwYXJhbSAge0VsZWdhbmNlLkNvbGxlY3Rpb258RWxlZ2FuY2UuTW9kZWx9IG1vZGVsICAgQSBDb2xsZWN0aW9uIG9yIE1vZGVsXHJcblx0ICogQHJldHVybiB7dm9pZH0gICAgICAgICBcclxuXHQjIyNcclxuXHRyZW5kZXI6IChlbGVtZW50LCBtb2RlbCkgLT5cclxuXHRcdGNvbnNvbGUubG9nICdyZW5kZXJpbmcgdGVtcGxhdGUnXHJcblx0XHRpZiBAcmVuZGVyZXI/ID09IGZhbHNlXHJcblx0XHRcdEByZW5kZXJlciA9IG5ldyBFbGVnYW5jZS5UZW1wbGF0ZVJlbmRlcmVyIEBcclxuXHRcdEByZW5kZXJlci5yZW5kZXIgZWxlbWVudCwgbW9kZWwiXX0=