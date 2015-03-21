(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Elegance.CollectionController = (function(superClass) {
    extend(CollectionController, superClass);

    CollectionController.prototype.container = null;

    CollectionController.prototype.template = null;

    CollectionController.prototype.instances = [];

    function CollectionController(app, route) {
      this.app = app;
      this.route = route;
      CollectionController.__super__.constructor.apply(this, arguments);
      this.template = $(this.container).find('[data-template-name]').first().remove();
    }

    CollectionController.prototype.setData = function(data) {
      this.data = data;
      return this.onDataChange();
    };

    CollectionController.prototype.render = function() {
      var clone, container, i, len, model, ref, results;
      container = $(this.container);
      container.find('[data-template-instance]').remove();
      ref = this.data;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        model = ref[i];
        clone = this.template.clone();
        clone.removeAttr('data-template-name');
        clone.attr('data-template-instance', 'true');
        container.append(clone);
        this.app.render(clone, model);
        results.push(clone.show());
      }
      return results;
    };

    return CollectionController;

  })(Elegance.Controller);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXIvQ29sbGVjdGlvbkNvbnRyb2xsZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTsrQkFBQTs7QUFBQSxFQUFNLFFBQVEsQ0FBQztBQUNkLDRDQUFBLENBQUE7O0FBQUEsbUNBQUEsU0FBQSxHQUFXLElBQVgsQ0FBQTs7QUFBQSxtQ0FDQSxRQUFBLEdBQVUsSUFEVixDQUFBOztBQUFBLG1DQUVBLFNBQUEsR0FBVyxFQUZYLENBQUE7O0FBSWEsSUFBQSw4QkFBQyxHQUFELEVBQU8sS0FBUCxHQUFBO0FBQ1osTUFEYSxJQUFDLENBQUEsTUFBRCxHQUNiLENBQUE7QUFBQSxNQURtQixJQUFDLENBQUEsUUFBRCxLQUNuQixDQUFBO0FBQUEsTUFBQSx1REFBQSxTQUFBLENBQUEsQ0FBQTtBQUFBLE1BQ0EsSUFBQyxDQUFBLFFBQUQsR0FBWSxDQUFBLENBQUUsSUFBQyxDQUFBLFNBQUgsQ0FBYSxDQUFDLElBQWQsQ0FBbUIsc0JBQW5CLENBQTBDLENBQUMsS0FBM0MsQ0FBQSxDQUFrRCxDQUFDLE1BQW5ELENBQUEsQ0FEWixDQURZO0lBQUEsQ0FKYjs7QUFBQSxtQ0FRQSxPQUFBLEdBQVMsU0FBQyxJQUFELEdBQUE7QUFXUixNQVhTLElBQUMsQ0FBQSxPQUFELElBV1QsQ0FBQTthQUFBLElBQUMsQ0FBQSxZQUFELENBQUEsRUFYUTtJQUFBLENBUlQsQ0FBQTs7QUFBQSxtQ0FxQkEsTUFBQSxHQUFRLFNBQUEsR0FBQTtBQUVQLFVBQUEsNkNBQUE7QUFBQSxNQUFBLFNBQUEsR0FBWSxDQUFBLENBQUUsSUFBQyxDQUFBLFNBQUgsQ0FBWixDQUFBO0FBQUEsTUFHQSxTQUFTLENBQUMsSUFBVixDQUFlLDBCQUFmLENBQTBDLENBQUMsTUFBM0MsQ0FBQSxDQUhBLENBQUE7QUFNQTtBQUFBO1dBQUEscUNBQUE7dUJBQUE7QUFDQyxRQUFBLEtBQUEsR0FBUSxJQUFDLENBQUEsUUFBUSxDQUFDLEtBQVYsQ0FBQSxDQUFSLENBQUE7QUFBQSxRQUNBLEtBQUssQ0FBQyxVQUFOLENBQWlCLG9CQUFqQixDQURBLENBQUE7QUFBQSxRQUVBLEtBQUssQ0FBQyxJQUFOLENBQVcsd0JBQVgsRUFBcUMsTUFBckMsQ0FGQSxDQUFBO0FBQUEsUUFJQSxTQUFTLENBQUMsTUFBVixDQUFpQixLQUFqQixDQUpBLENBQUE7QUFBQSxRQU1BLElBQUMsQ0FBQSxHQUFHLENBQUMsTUFBTCxDQUFZLEtBQVosRUFBbUIsS0FBbkIsQ0FOQSxDQUFBO0FBQUEscUJBUUEsS0FBSyxDQUFDLElBQU4sQ0FBQSxFQVJBLENBREQ7QUFBQTtxQkFSTztJQUFBLENBckJSLENBQUE7O2dDQUFBOztLQUQyQyxRQUFRLENBQUMsV0FBckQsQ0FBQTtBQUFBIiwiZmlsZSI6IkNvbnRyb2xsZXIvQ29sbGVjdGlvbkNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFbGVnYW5jZS5Db2xsZWN0aW9uQ29udHJvbGxlciBleHRlbmRzIEVsZWdhbmNlLkNvbnRyb2xsZXJcclxuXHRjb250YWluZXI6IG51bGxcclxuXHR0ZW1wbGF0ZTogbnVsbFxyXG5cdGluc3RhbmNlczogW11cclxuXHJcblx0Y29uc3RydWN0b3I6IChAYXBwLCBAcm91dGUpIC0+XHJcblx0XHRzdXBlclxyXG5cdFx0QHRlbXBsYXRlID0gJChAY29udGFpbmVyKS5maW5kKCdbZGF0YS10ZW1wbGF0ZS1uYW1lXScpLmZpcnN0KCkucmVtb3ZlKClcclxuXHJcblx0c2V0RGF0YTogKEBkYXRhKSAtPlxyXG5cdFx0IyAjIHN0b3AgbGlzdGVuaW5nIG9uIG91ciBjdXJyZW50IGRhdGFcclxuXHRcdCMgaWYgQGRhdGE/XHJcblx0XHQjIFx0QGRhdGEub2ZmICdjaGFuZ2UnLCBAbGlzdGVuZXJzXHJcblx0XHQjIFx0QGxpc3RlbmVycyA9IFtdXHJcblx0XHQjIEBkYXRhID0gZGF0YVxyXG5cclxuXHRcdCMgIyBiZWdpbiBsaXN0ZW5pbmdcclxuXHRcdCMgaWYgQGRhdGE/XHJcblx0XHQjIFx0QGxpc3RlbmVycy5wdXNoIEBkYXRhLm9uICdjaGFuZ2UnLCBAb25EYXRhQ2hhbmdlXHJcblxyXG5cdFx0QG9uRGF0YUNoYW5nZSgpXHJcblxyXG5cdHJlbmRlcjogKCkgLT5cclxuXHRcdCMgZ2V0IHRoZSBjb250YWluZXIgZWxlbWVudCBmb3IgdGhlIGNvbGxlY3Rpb25cclxuXHRcdGNvbnRhaW5lciA9ICQoQGNvbnRhaW5lcilcclxuXHRcdFxyXG5cdFx0IyByZW1vdmUgYWxsIHRoZSB0ZW1wbGF0ZSBpbnN0YW5jZXNcclxuXHRcdGNvbnRhaW5lci5maW5kKCdbZGF0YS10ZW1wbGF0ZS1pbnN0YW5jZV0nKS5yZW1vdmUoKVxyXG5cclxuXHRcdCMgcmVuZGVyIFxyXG5cdFx0Zm9yIG1vZGVsIGluIEBkYXRhXHJcblx0XHRcdGNsb25lID0gQHRlbXBsYXRlLmNsb25lKClcclxuXHRcdFx0Y2xvbmUucmVtb3ZlQXR0ciAnZGF0YS10ZW1wbGF0ZS1uYW1lJ1xyXG5cdFx0XHRjbG9uZS5hdHRyICdkYXRhLXRlbXBsYXRlLWluc3RhbmNlJywgJ3RydWUnXHJcblxyXG5cdFx0XHRjb250YWluZXIuYXBwZW5kIGNsb25lXHJcblxyXG5cdFx0XHRAYXBwLnJlbmRlciBjbG9uZSwgbW9kZWxcclxuXHJcblx0XHRcdGNsb25lLnNob3coKSJdfQ==