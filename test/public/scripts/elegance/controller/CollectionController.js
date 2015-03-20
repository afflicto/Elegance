(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Elegance.CollectionController = (function(superClass) {
    extend(CollectionController, superClass);

    function CollectionController(app, route) {
      this.app = app;
      this.route = route;
      CollectionController.__super__.constructor.apply(this, arguments);
    }

    return CollectionController;

  })(Elegance.Controller);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvQ29sbGVjdGlvbkNvbnRyb2xsZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTsrQkFBQTs7QUFBQSxFQUFNLFFBQVEsQ0FBQztBQUNkLDRDQUFBLENBQUE7O0FBQWEsSUFBQSw4QkFBQyxHQUFELEVBQU8sS0FBUCxHQUFBO0FBQ1osTUFEYSxJQUFDLENBQUEsTUFBRCxHQUNiLENBQUE7QUFBQSxNQURtQixJQUFDLENBQUEsUUFBRCxLQUNuQixDQUFBO0FBQUEsTUFBQSx1REFBQSxTQUFBLENBQUEsQ0FEWTtJQUFBLENBQWI7O2dDQUFBOztLQUQyQyxRQUFRLENBQUMsV0FBckQsQ0FBQTtBQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXIvQ29sbGVjdGlvbkNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFbGVnYW5jZS5Db2xsZWN0aW9uQ29udHJvbGxlciBleHRlbmRzIEVsZWdhbmNlLkNvbnRyb2xsZXJcclxuXHRjb25zdHJ1Y3RvcjogKEBhcHAsIEByb3V0ZSkgLT5cclxuXHRcdHN1cGVyIl19