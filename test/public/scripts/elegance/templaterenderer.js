(function() {
  Elegance.TemplateRenderer = (function() {
    function TemplateRenderer(app) {
      this.app = app;
    }

    TemplateRenderer.prototype.render = function(template, variables) {
      var bound, childTemplates, element, elements, i, len, parent, value;
      if (variables == null) {
        variables = [];
      }
      if (variables instanceof Elegance.Model) {
        variables = variables.attributes;
      }
      elements = template.find('*');
      childTemplates = [];
      for (i = 0, len = elements.length; i < len; i++) {
        element = elements[i];
        element = $(element);
        parent = element.parents('[data-template-name]').first();
        if (parent[0] !== template[0]) {
          childTemplates.push(parent);
          continue;
        }
        bound = element.attr('data-variable');
        if (bound != null) {
          value = "";
          if (variables[bound] != null) {
            value = variables[bound];
          }
          element.html(value);
        }
      }
      return childTemplates;
    };

    return TemplateRenderer;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcmVuZGVyZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsRUFBTSxRQUFRLENBQUM7QUFFRCxJQUFBLDBCQUFDLEdBQUQsR0FBQTtBQUFRLE1BQVAsSUFBQyxDQUFBLE1BQUQsR0FBTyxDQUFSO0lBQUEsQ0FBYjs7QUFBQSwrQkFFQSxNQUFBLEdBQVEsU0FBQyxRQUFELEVBQVcsU0FBWCxHQUFBO0FBQ1AsVUFBQSwrREFBQTs7UUFEa0IsWUFBWTtPQUM5QjtBQUFBLE1BQUEsSUFBb0MsU0FBQSxZQUFxQixRQUFRLENBQUMsS0FBbEU7QUFBQSxRQUFBLFNBQUEsR0FBWSxTQUFTLENBQUMsVUFBdEIsQ0FBQTtPQUFBO0FBQUEsTUFDQSxRQUFBLEdBQVcsUUFBUSxDQUFDLElBQVQsQ0FBYyxHQUFkLENBRFgsQ0FBQTtBQUFBLE1BR0EsY0FBQSxHQUFpQixFQUhqQixDQUFBO0FBS0EsV0FBQSwwQ0FBQTs4QkFBQTtBQUNDLFFBQUEsT0FBQSxHQUFVLENBQUEsQ0FBRSxPQUFGLENBQVYsQ0FBQTtBQUFBLFFBR0EsTUFBQSxHQUFTLE9BQU8sQ0FBQyxPQUFSLENBQWdCLHNCQUFoQixDQUF1QyxDQUFDLEtBQXhDLENBQUEsQ0FIVCxDQUFBO0FBS0EsUUFBQSxJQUFHLE1BQU8sQ0FBQSxDQUFBLENBQVAsS0FBYSxRQUFTLENBQUEsQ0FBQSxDQUF6QjtBQUNDLFVBQUEsY0FBYyxDQUFDLElBQWYsQ0FBb0IsTUFBcEIsQ0FBQSxDQUFBO0FBQ0EsbUJBRkQ7U0FMQTtBQUFBLFFBVUEsS0FBQSxHQUFRLE9BQU8sQ0FBQyxJQUFSLENBQWEsZUFBYixDQVZSLENBQUE7QUFXQSxRQUFBLElBQUcsYUFBSDtBQUNDLFVBQUEsS0FBQSxHQUFRLEVBQVIsQ0FBQTtBQUNBLFVBQUEsSUFBRyx3QkFBSDtBQUEwQixZQUFBLEtBQUEsR0FBUSxTQUFVLENBQUEsS0FBQSxDQUFsQixDQUExQjtXQURBO0FBQUEsVUFFQSxPQUFPLENBQUMsSUFBUixDQUFhLEtBQWIsQ0FGQSxDQUREO1NBWkQ7QUFBQSxPQUxBO0FBdUJBLGFBQU8sY0FBUCxDQXhCTztJQUFBLENBRlIsQ0FBQTs7NEJBQUE7O01BRkQsQ0FBQTtBQUFBIiwiZmlsZSI6InRlbXBsYXRlcmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFbGVnYW5jZS5UZW1wbGF0ZVJlbmRlcmVyXHJcblxyXG5cdGNvbnN0cnVjdG9yOiAoQGFwcCkgLT5cclxuXHJcblx0cmVuZGVyOiAodGVtcGxhdGUsIHZhcmlhYmxlcyA9IFtdKSAtPlxyXG5cdFx0dmFyaWFibGVzID0gdmFyaWFibGVzLmF0dHJpYnV0ZXMgaWYgdmFyaWFibGVzIGluc3RhbmNlb2YgRWxlZ2FuY2UuTW9kZWxcclxuXHRcdGVsZW1lbnRzID0gdGVtcGxhdGUuZmluZCgnKicpXHJcblx0XHRcclxuXHRcdGNoaWxkVGVtcGxhdGVzID0gW11cclxuXHJcblx0XHRmb3IgZWxlbWVudCBpbiBlbGVtZW50c1xyXG5cdFx0XHRlbGVtZW50ID0gJChlbGVtZW50KVxyXG5cclxuXHRcdFx0IyBtYWtlIHN1cmUgdGhpcyBlbGVtZW50IGlzIG5vdCBpbiBhIGNoaWxkLXRlbXBsYXRlXHJcblx0XHRcdHBhcmVudCA9IGVsZW1lbnQucGFyZW50cygnW2RhdGEtdGVtcGxhdGUtbmFtZV0nKS5maXJzdCgpXHJcblx0XHRcdFxyXG5cdFx0XHRpZiBwYXJlbnRbMF0gIT0gdGVtcGxhdGVbMF1cclxuXHRcdFx0XHRjaGlsZFRlbXBsYXRlcy5wdXNoIHBhcmVudFxyXG5cdFx0XHRcdGNvbnRpbnVlXHJcblxyXG5cdFx0XHQjIGRvZXMgdGhpcyBlbGVtZW50IHJlZmVyZW5jZSBhIHZhcmlhYmxlP1xyXG5cdFx0XHRib3VuZCA9IGVsZW1lbnQuYXR0ciAnZGF0YS12YXJpYWJsZSdcclxuXHRcdFx0aWYgYm91bmQ/XHJcblx0XHRcdFx0dmFsdWUgPSBcIlwiXHJcblx0XHRcdFx0aWYgdmFyaWFibGVzW2JvdW5kXT8gdGhlbiB2YWx1ZSA9IHZhcmlhYmxlc1tib3VuZF1cclxuXHRcdFx0XHRlbGVtZW50Lmh0bWwodmFsdWUpXHJcblxyXG5cdFx0IyByZXR1cm4gcGFyZW50IHRlbXBsYXRlc1xyXG5cdFx0cmV0dXJuIGNoaWxkVGVtcGxhdGVzIl19