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
      elements = template.find('*');
      childTemplates = [];
      if (variables instanceof Elegance.Model) {
        variables = variables.attributes;
        template.attr('data-model-id', variables.id);
      }
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
          results.push(element.text(value));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    return TemplateRenderer;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRlbXBsYXRlUmVuZGVyZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsRUFBTSxRQUFRLENBQUM7QUFFRCxJQUFBLDBCQUFDLEdBQUQsR0FBQTtBQUFRLE1BQVAsSUFBQyxDQUFBLE1BQUQsR0FBTyxDQUFSO0lBQUEsQ0FBYjs7QUFBQSwrQkFFQSxNQUFBLEdBQVEsU0FBQyxRQUFELEVBQVcsU0FBWCxHQUFBO0FBQ1AsVUFBQSx3RUFBQTs7UUFEa0IsWUFBWTtPQUM5QjtBQUFBLE1BQUEsUUFBQSxHQUFXLFFBQVEsQ0FBQyxJQUFULENBQWMsR0FBZCxDQUFYLENBQUE7QUFBQSxNQUVBLGNBQUEsR0FBaUIsRUFGakIsQ0FBQTtBQUlBLE1BQUEsSUFBRyxTQUFBLFlBQXFCLFFBQVEsQ0FBQyxLQUFqQztBQUNDLFFBQUEsU0FBQSxHQUFZLFNBQVMsQ0FBQyxVQUF0QixDQUFBO0FBQUEsUUFDQSxRQUFRLENBQUMsSUFBVCxDQUFjLGVBQWQsRUFBK0IsU0FBUyxDQUFDLEVBQXpDLENBREEsQ0FERDtPQUpBO0FBUUE7V0FBQSwwQ0FBQTs4QkFBQTtBQUNDLFFBQUEsT0FBQSxHQUFVLENBQUEsQ0FBRSxPQUFGLENBQVYsQ0FBQTtBQUFBLFFBR0EsTUFBQSxHQUFTLE9BQU8sQ0FBQyxZQUFSLENBQXFCLFFBQXJCLEVBQStCLHNCQUEvQixDQUFzRCxDQUFDLEtBQXZELENBQUEsQ0FIVCxDQUFBO0FBS0EsUUFBQSxJQUFHLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLENBQW5CO0FBQ0MsbUJBREQ7U0FMQTtBQUFBLFFBU0EsS0FBQSxHQUFRLE9BQU8sQ0FBQyxJQUFSLENBQWEsZUFBYixDQVRSLENBQUE7QUFVQSxRQUFBLElBQUcsYUFBSDtBQUNDLFVBQUEsS0FBQSxHQUFRLEVBQVIsQ0FBQTtBQUNBLFVBQUEsSUFBRyx3QkFBSDtBQUEwQixZQUFBLEtBQUEsR0FBUSxTQUFVLENBQUEsS0FBQSxDQUFsQixDQUExQjtXQURBO0FBQUEsdUJBRUEsT0FBTyxDQUFDLElBQVIsQ0FBYSxLQUFiLEVBRkEsQ0FERDtTQUFBLE1BQUE7K0JBQUE7U0FYRDtBQUFBO3FCQVRPO0lBQUEsQ0FGUixDQUFBOzs0QkFBQTs7TUFGRCxDQUFBO0FBQUEiLCJmaWxlIjoiVGVtcGxhdGVSZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEVsZWdhbmNlLlRlbXBsYXRlUmVuZGVyZXJcclxuXHJcblx0Y29uc3RydWN0b3I6IChAYXBwKSAtPlxyXG5cclxuXHRyZW5kZXI6ICh0ZW1wbGF0ZSwgdmFyaWFibGVzID0gW10pIC0+XHJcblx0XHRlbGVtZW50cyA9IHRlbXBsYXRlLmZpbmQoJyonKVxyXG5cdFx0XHJcblx0XHRjaGlsZFRlbXBsYXRlcyA9IFtdXHJcblx0XHRcclxuXHRcdGlmIHZhcmlhYmxlcyBpbnN0YW5jZW9mIEVsZWdhbmNlLk1vZGVsXHJcblx0XHRcdHZhcmlhYmxlcyA9IHZhcmlhYmxlcy5hdHRyaWJ1dGVzXHJcblx0XHRcdHRlbXBsYXRlLmF0dHIgJ2RhdGEtbW9kZWwtaWQnLCB2YXJpYWJsZXMuaWRcclxuXHJcblx0XHRmb3IgZWxlbWVudCBpbiBlbGVtZW50c1xyXG5cdFx0XHRlbGVtZW50ID0gJChlbGVtZW50KVxyXG5cclxuXHRcdFx0IyBtYWtlIHN1cmUgdGhpcyBlbGVtZW50IGlzIG5vdCBpbiBhIGNoaWxkLXRlbXBsYXRlXHJcblx0XHRcdHBhcmVudCA9IGVsZW1lbnQucGFyZW50c1VudGlsKHRlbXBsYXRlLCAnW2RhdGEtdGVtcGxhdGUtbmFtZV0nKS5maXJzdCgpXHJcblx0XHRcdFxyXG5cdFx0XHRpZiBwYXJlbnQubGVuZ3RoID4gMFxyXG5cdFx0XHRcdGNvbnRpbnVlXHJcblxyXG5cdFx0XHQjIGRvZXMgdGhpcyBlbGVtZW50IHJlZmVyZW5jZSBhIHZhcmlhYmxlP1xyXG5cdFx0XHRib3VuZCA9IGVsZW1lbnQuYXR0ciAnZGF0YS12YXJpYWJsZSdcclxuXHRcdFx0aWYgYm91bmQ/XHJcblx0XHRcdFx0dmFsdWUgPSBcIlwiXHJcblx0XHRcdFx0aWYgdmFyaWFibGVzW2JvdW5kXT8gdGhlbiB2YWx1ZSA9IHZhcmlhYmxlc1tib3VuZF1cclxuXHRcdFx0XHRlbGVtZW50LnRleHQodmFsdWUpIl19