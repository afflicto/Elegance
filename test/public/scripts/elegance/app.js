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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxFQUFNLFFBQVEsQ0FBQztBQUVkO0FBQUE7Ozs7T0FBQTtBQUthLElBQUEsYUFBQyxPQUFELEdBQUE7QUFDWixVQUFBLCtCQUFBOztRQURhLFVBQVU7T0FDdkI7QUFBQSxNQUFBLElBQUcsT0FBQSxZQUFtQixLQUFuQixLQUE0QixLQUEvQjtBQUNDLGNBQVUsSUFBQSxLQUFBLENBQU0sa0RBQU4sQ0FBVixDQUREO09BQUE7QUFBQSxNQUlBLElBQUMsQ0FBQSxPQUFELEdBQVcsRUFKWCxDQUFBO0FBS0EsV0FBQSx5Q0FBQTs0QkFBQTtBQUVDLFFBQUEsS0FBQSxHQUFRLFFBQVEsQ0FBQyxPQUFRLENBQUEsTUFBQSxDQUF6QixDQUFBO0FBQ0EsUUFBQSxJQUFHLGFBQUg7QUFDQyxVQUFBLFFBQUEsR0FBZSxJQUFBLEtBQUEsQ0FBTSxJQUFOLENBQWYsQ0FBQTtBQUFBLFVBQ0EsSUFBSyxDQUFBLE1BQUEsQ0FBTCxHQUFlLFFBRGYsQ0FERDtTQUFBLE1BQUE7QUFJQyxnQkFBVSxJQUFBLEtBQUEsQ0FBTSxrQkFBQSxHQUFtQixNQUFuQixHQUEwQixHQUFoQyxDQUFWLENBSkQ7U0FIRDtBQUFBLE9BTlk7SUFBQSxDQUxiOztBQW9CQTtBQUFBOzs7OztPQXBCQTs7QUFBQSxrQkEwQkEsTUFBQSxHQUFRLFNBQUMsT0FBRCxFQUFVLEtBQVYsR0FBQTtBQUNQLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxvQkFBWixDQUFBLENBQUE7QUFDQSxNQUFBLElBQUcsdUJBQUEsS0FBYyxLQUFqQjtBQUNDLFFBQUEsSUFBQyxDQUFBLFFBQUQsR0FBZ0IsSUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsSUFBMUIsQ0FBaEIsQ0FERDtPQURBO2FBR0EsSUFBQyxDQUFBLFFBQVEsQ0FBQyxNQUFWLENBQWlCLE9BQWpCLEVBQTBCLEtBQTFCLEVBSk87SUFBQSxDQTFCUixDQUFBOztlQUFBOztNQUZELENBQUE7QUFBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFbGVnYW5jZS5BcHBcclxuXHJcblx0IyMjKlxyXG5cdCAqIENyZWF0ZXMgYSBuZXcgRWxlZ2FuY2UgQXBwXHJcblx0ICogQHBhcmFtICB7QXJyYXl9IG1vZHVsZXMgPSAgICAgICAgICAgICBbXSBBcnJheSBvZiBzdHJpbmdzIGNvcnJlc3BvbmRpbmcgdG8gYSBtb2R1bGUuXHJcblx0ICogQHJldHVybiB7RWxlZ2FuY2UuQXBwfSAgICAgICAgIFRoZSBuZXcgQXBwIGluc3RhbmNlXHJcblx0IyMjXHJcblx0Y29uc3RydWN0b3I6IChtb2R1bGVzID0gW10pIC0+XHJcblx0XHRpZiBtb2R1bGVzIGluc3RhbmNlb2YgQXJyYXkgaXMgZmFsc2VcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yIFwiRmlyc3QgYXJndW1lbnQgdG8gRWxlZ2FuY2UuQXBwIG11c3QgYmUgYW4gQXJyYXkhXCJcclxuXHJcblx0XHQjIGluaXQgbW9kdWxlc1xyXG5cdFx0QG1vZHVsZXMgPSBbXVxyXG5cdFx0Zm9yIG1vZHVsZSBpbiBtb2R1bGVzXHJcblx0XHRcdCMgY3JlYXRlIG1vZHVsZVxyXG5cdFx0XHRjbGF6eiA9IEVsZWdhbmNlLm1vZHVsZXNbbW9kdWxlXVxyXG5cdFx0XHRpZiBjbGF6ej9cclxuXHRcdFx0XHRpbnN0YW5jZSA9IG5ldyBjbGF6eihAKVxyXG5cdFx0XHRcdHRoaXNbbW9kdWxlXSA9IGluc3RhbmNlXHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IgXCJVbmtub3duIG1vZHVsZSAnI3ttb2R1bGV9J1wiXHJcblxyXG5cdCMjIypcclxuXHQgKiBSZW5kZXIgc29tZSBkYXRhIGludG8gYSB0ZW1wbGF0ZVxyXG5cdCAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50IHRoZSB0ZW1wbGF0ZVxyXG5cdCAqIEBwYXJhbSAge0VsZWdhbmNlLkNvbGxlY3Rpb258RWxlZ2FuY2UuTW9kZWx9IG1vZGVsICAgQSBDb2xsZWN0aW9uIG9yIE1vZGVsXHJcblx0ICogQHJldHVybiB7dm9pZH0gICAgICAgICBcclxuXHQjIyNcclxuXHRyZW5kZXI6IChlbGVtZW50LCBtb2RlbCkgLT5cclxuXHRcdGNvbnNvbGUubG9nICdyZW5kZXJpbmcgdGVtcGxhdGUnXHJcblx0XHRpZiBAcmVuZGVyZXI/ID09IGZhbHNlXHJcblx0XHRcdEByZW5kZXJlciA9IG5ldyBFbGVnYW5jZS5UZW1wbGF0ZVJlbmRlcmVyIEBcclxuXHRcdEByZW5kZXJlci5yZW5kZXIgZWxlbWVudCwgbW9kZWwiXX0=