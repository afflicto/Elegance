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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxFQUFNLFFBQVEsQ0FBQztBQUVkO0FBQUE7Ozs7T0FBQTtBQUthLElBQUEsYUFBQyxPQUFELEdBQUE7QUFDWixVQUFBLCtCQUFBOztRQURhLFVBQVU7T0FDdkI7QUFBQSxNQUFBLElBQUcsT0FBQSxZQUFtQixLQUFuQixLQUE0QixLQUEvQjtBQUNDLGNBQVUsSUFBQSxLQUFBLENBQU0sa0RBQU4sQ0FBVixDQUREO09BQUE7QUFBQSxNQUlBLElBQUMsQ0FBQSxPQUFELEdBQVcsRUFKWCxDQUFBO0FBS0EsV0FBQSx5Q0FBQTs0QkFBQTtBQUVDLFFBQUEsS0FBQSxHQUFRLFFBQVEsQ0FBQyxPQUFRLENBQUEsTUFBQSxDQUF6QixDQUFBO0FBQ0EsUUFBQSxJQUFHLGFBQUg7QUFDQyxVQUFBLFFBQUEsR0FBZSxJQUFBLEtBQUEsQ0FBTSxJQUFOLENBQWYsQ0FBQTtBQUFBLFVBQ0EsSUFBSyxDQUFBLE1BQUEsQ0FBTCxHQUFlLFFBRGYsQ0FERDtTQUFBLE1BQUE7QUFJQyxnQkFBVSxJQUFBLEtBQUEsQ0FBTSxrQkFBQSxHQUFtQixNQUFuQixHQUEwQixHQUFoQyxDQUFWLENBSkQ7U0FIRDtBQUFBLE9BTEE7QUFBQSxNQWVBLENBQUEsQ0FBRSxzQkFBRixDQUF5QixDQUFDLElBQTFCLENBQUEsQ0FmQSxDQURZO0lBQUEsQ0FMYjs7QUF1QkE7QUFBQTs7Ozs7T0F2QkE7O0FBQUEsa0JBNkJBLE1BQUEsR0FBUSxTQUFDLE9BQUQsRUFBVSxLQUFWLEdBQUE7QUFDUCxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksb0JBQVosQ0FBQSxDQUFBO0FBQ0EsTUFBQSxJQUFHLHVCQUFBLEtBQWMsS0FBakI7QUFDQyxRQUFBLElBQUMsQ0FBQSxRQUFELEdBQWdCLElBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLElBQTFCLENBQWhCLENBREQ7T0FEQTthQUdBLElBQUMsQ0FBQSxRQUFRLENBQUMsTUFBVixDQUFpQixPQUFqQixFQUEwQixLQUExQixFQUpPO0lBQUEsQ0E3QlIsQ0FBQTs7ZUFBQTs7TUFGRCxDQUFBO0FBQUEiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRWxlZ2FuY2UuQXBwXHJcblxyXG5cdCMjIypcclxuXHQgKiBDcmVhdGVzIGEgbmV3IEVsZWdhbmNlIEFwcFxyXG5cdCAqIEBwYXJhbSAge0FycmF5fSBtb2R1bGVzID0gICAgICAgICAgICAgW10gQXJyYXkgb2Ygc3RyaW5ncyBjb3JyZXNwb25kaW5nIHRvIGEgbW9kdWxlLlxyXG5cdCAqIEByZXR1cm4ge0VsZWdhbmNlLkFwcH0gICAgICAgICBUaGUgbmV3IEFwcCBpbnN0YW5jZVxyXG5cdCMjI1xyXG5cdGNvbnN0cnVjdG9yOiAobW9kdWxlcyA9IFtdKSAtPlxyXG5cdFx0aWYgbW9kdWxlcyBpbnN0YW5jZW9mIEFycmF5IGlzIGZhbHNlXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciBcIkZpcnN0IGFyZ3VtZW50IHRvIEVsZWdhbmNlLkFwcCBtdXN0IGJlIGFuIEFycmF5IVwiXHJcblxyXG5cdFx0IyBpbml0IG1vZHVsZXNcclxuXHRcdEBtb2R1bGVzID0gW11cclxuXHRcdGZvciBtb2R1bGUgaW4gbW9kdWxlc1xyXG5cdFx0XHQjIGNyZWF0ZSBtb2R1bGVcclxuXHRcdFx0Y2xhenogPSBFbGVnYW5jZS5tb2R1bGVzW21vZHVsZV1cclxuXHRcdFx0aWYgY2xheno/XHJcblx0XHRcdFx0aW5zdGFuY2UgPSBuZXcgY2xhenooQClcclxuXHRcdFx0XHR0aGlzW21vZHVsZV0gPSBpbnN0YW5jZVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yIFwiVW5rbm93biBtb2R1bGUgJyN7bW9kdWxlfSdcIlxyXG5cclxuXHRcdCMgaGlkZSBhbGwgdGVtcGxhdGVzXHJcblx0XHQkKCdbZGF0YS10ZW1wbGF0ZS1uYW1lXScpLmhpZGUoKVxyXG5cclxuXHQjIyMqXHJcblx0ICogUmVuZGVyIHNvbWUgZGF0YSBpbnRvIGEgdGVtcGxhdGVcclxuXHQgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxlbWVudCB0aGUgdGVtcGxhdGVcclxuXHQgKiBAcGFyYW0gIHtFbGVnYW5jZS5Db2xsZWN0aW9ufEVsZWdhbmNlLk1vZGVsfSBtb2RlbCAgIEEgQ29sbGVjdGlvbiBvciBNb2RlbFxyXG5cdCAqIEByZXR1cm4ge3ZvaWR9ICAgICAgICAgXHJcblx0IyMjXHJcblx0cmVuZGVyOiAoZWxlbWVudCwgbW9kZWwpIC0+XHJcblx0XHRjb25zb2xlLmxvZyAncmVuZGVyaW5nIHRlbXBsYXRlJ1xyXG5cdFx0aWYgQHJlbmRlcmVyPyA9PSBmYWxzZVxyXG5cdFx0XHRAcmVuZGVyZXIgPSBuZXcgRWxlZ2FuY2UuVGVtcGxhdGVSZW5kZXJlciBAXHJcblx0XHRAcmVuZGVyZXIucmVuZGVyIGVsZW1lbnQsIG1vZGVsIl19