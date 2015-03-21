(function() {
  Elegance.TemplateRenderer = (function() {
    function TemplateRenderer(app) {
      this.app = app;
    }

    TemplateRenderer.prototype.render = function(template, variables) {
      var bound, childTemplates, element, elements, i, len, parent, results, value;
      if (variables == null) {
        variables = [];
      }
      if (variables instanceof Elegance.Model) {
        variables = variables.attributes;
      }
      elements = template.find('*');
      childTemplates = [];
      template.attr('data-model-id', variables.id);
      results = [];
      for (i = 0, len = elements.length; i < len; i++) {
        element = elements[i];
        element = $(element);
        parent = element.parentsUntil(template, '[data-template-name]').first();
        if (parent.length > 0) {
          continue;
        }
        bound = element.attr('data-variable');
        if (bound != null) {
          value = "";
          if (variables[bound] != null) {
            value = variables[bound];
          }
          results.push(element.html(value));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    return TemplateRenderer;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRlbXBsYXRlUmVuZGVyZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsRUFBTSxRQUFRLENBQUM7QUFFRCxJQUFBLDBCQUFDLEdBQUQsR0FBQTtBQUFRLE1BQVAsSUFBQyxDQUFBLE1BQUQsR0FBTyxDQUFSO0lBQUEsQ0FBYjs7QUFBQSwrQkFFQSxNQUFBLEdBQVEsU0FBQyxRQUFELEVBQVcsU0FBWCxHQUFBO0FBQ1AsVUFBQSx3RUFBQTs7UUFEa0IsWUFBWTtPQUM5QjtBQUFBLE1BQUEsSUFBb0MsU0FBQSxZQUFxQixRQUFRLENBQUMsS0FBbEU7QUFBQSxRQUFBLFNBQUEsR0FBWSxTQUFTLENBQUMsVUFBdEIsQ0FBQTtPQUFBO0FBQUEsTUFDQSxRQUFBLEdBQVcsUUFBUSxDQUFDLElBQVQsQ0FBYyxHQUFkLENBRFgsQ0FBQTtBQUFBLE1BR0EsY0FBQSxHQUFpQixFQUhqQixDQUFBO0FBQUEsTUFLQSxRQUFRLENBQUMsSUFBVCxDQUFjLGVBQWQsRUFBK0IsU0FBUyxDQUFDLEVBQXpDLENBTEEsQ0FBQTtBQU9BO1dBQUEsMENBQUE7OEJBQUE7QUFDQyxRQUFBLE9BQUEsR0FBVSxDQUFBLENBQUUsT0FBRixDQUFWLENBQUE7QUFBQSxRQUdBLE1BQUEsR0FBUyxPQUFPLENBQUMsWUFBUixDQUFxQixRQUFyQixFQUErQixzQkFBL0IsQ0FBc0QsQ0FBQyxLQUF2RCxDQUFBLENBSFQsQ0FBQTtBQUtBLFFBQUEsSUFBRyxNQUFNLENBQUMsTUFBUCxHQUFnQixDQUFuQjtBQUNDLG1CQUREO1NBTEE7QUFBQSxRQVNBLEtBQUEsR0FBUSxPQUFPLENBQUMsSUFBUixDQUFhLGVBQWIsQ0FUUixDQUFBO0FBVUEsUUFBQSxJQUFHLGFBQUg7QUFDQyxVQUFBLEtBQUEsR0FBUSxFQUFSLENBQUE7QUFDQSxVQUFBLElBQUcsd0JBQUg7QUFBMEIsWUFBQSxLQUFBLEdBQVEsU0FBVSxDQUFBLEtBQUEsQ0FBbEIsQ0FBMUI7V0FEQTtBQUFBLHVCQUVBLE9BQU8sQ0FBQyxJQUFSLENBQWEsS0FBYixFQUZBLENBREQ7U0FBQSxNQUFBOytCQUFBO1NBWEQ7QUFBQTtxQkFSTztJQUFBLENBRlIsQ0FBQTs7NEJBQUE7O01BRkQsQ0FBQTtBQUFBIiwiZmlsZSI6IlRlbXBsYXRlUmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFbGVnYW5jZS5UZW1wbGF0ZVJlbmRlcmVyXHJcblxyXG5cdGNvbnN0cnVjdG9yOiAoQGFwcCkgLT5cclxuXHJcblx0cmVuZGVyOiAodGVtcGxhdGUsIHZhcmlhYmxlcyA9IFtdKSAtPlxyXG5cdFx0dmFyaWFibGVzID0gdmFyaWFibGVzLmF0dHJpYnV0ZXMgaWYgdmFyaWFibGVzIGluc3RhbmNlb2YgRWxlZ2FuY2UuTW9kZWxcclxuXHRcdGVsZW1lbnRzID0gdGVtcGxhdGUuZmluZCgnKicpXHJcblx0XHRcclxuXHRcdGNoaWxkVGVtcGxhdGVzID0gW11cclxuXHJcblx0XHR0ZW1wbGF0ZS5hdHRyICdkYXRhLW1vZGVsLWlkJywgdmFyaWFibGVzLmlkXHJcblxyXG5cdFx0Zm9yIGVsZW1lbnQgaW4gZWxlbWVudHNcclxuXHRcdFx0ZWxlbWVudCA9ICQoZWxlbWVudClcclxuXHJcblx0XHRcdCMgbWFrZSBzdXJlIHRoaXMgZWxlbWVudCBpcyBub3QgaW4gYSBjaGlsZC10ZW1wbGF0ZVxyXG5cdFx0XHRwYXJlbnQgPSBlbGVtZW50LnBhcmVudHNVbnRpbCh0ZW1wbGF0ZSwgJ1tkYXRhLXRlbXBsYXRlLW5hbWVdJykuZmlyc3QoKVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgcGFyZW50Lmxlbmd0aCA+IDBcclxuXHRcdFx0XHRjb250aW51ZVxyXG5cclxuXHRcdFx0IyBkb2VzIHRoaXMgZWxlbWVudCByZWZlcmVuY2UgYSB2YXJpYWJsZT9cclxuXHRcdFx0Ym91bmQgPSBlbGVtZW50LmF0dHIgJ2RhdGEtdmFyaWFibGUnXHJcblx0XHRcdGlmIGJvdW5kP1xyXG5cdFx0XHRcdHZhbHVlID0gXCJcIlxyXG5cdFx0XHRcdGlmIHZhcmlhYmxlc1tib3VuZF0/IHRoZW4gdmFsdWUgPSB2YXJpYWJsZXNbYm91bmRdXHJcblx0XHRcdFx0ZWxlbWVudC5odG1sKHZhbHVlKSJdfQ==