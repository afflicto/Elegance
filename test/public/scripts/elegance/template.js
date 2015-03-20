(function() {
  Elegance.TemplateRenderer = (function() {
    function TemplateRenderer() {}

    TemplateRenderer.prototype.render = function(template, variables) {
      var attr, bound, childTemplates, element, elements, i, len, parent;
      elements = template.find('*');
      childTemplates = [];
      for (i = 0, len = elements.length; i < len; i++) {
        element = elements[i];
        element = $(element);
        parent = element.parents('[data-template-name]').first();
        attr = parent.attr('data-template-name');
        if (attr != null) {
          if (attr !== this.name) {
            childTemplates.push(parent);
            continue;
          }
        }
        bound = element.attr('data-variable');
        if ((bound != null) && (variables[bound] != null)) {
          element.html(variables[bound]);
        }
      }
      return parents;
    };

    return TemplateRenderer;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEVBQU0sUUFBUSxDQUFDO2tDQUVkOztBQUFBLCtCQUFBLE1BQUEsR0FBUSxTQUFDLFFBQUQsRUFBVyxTQUFYLEdBQUE7QUFDUCxVQUFBLDhEQUFBO0FBQUEsTUFBQSxRQUFBLEdBQVcsUUFBUSxDQUFDLElBQVQsQ0FBYyxHQUFkLENBQVgsQ0FBQTtBQUFBLE1BRUEsY0FBQSxHQUFpQixFQUZqQixDQUFBO0FBSUEsV0FBQSwwQ0FBQTs4QkFBQTtBQUNDLFFBQUEsT0FBQSxHQUFVLENBQUEsQ0FBRSxPQUFGLENBQVYsQ0FBQTtBQUFBLFFBR0EsTUFBQSxHQUFTLE9BQU8sQ0FBQyxPQUFSLENBQWdCLHNCQUFoQixDQUF1QyxDQUFDLEtBQXhDLENBQUEsQ0FIVCxDQUFBO0FBQUEsUUFLQSxJQUFBLEdBQU8sTUFBTSxDQUFDLElBQVAsQ0FBWSxvQkFBWixDQUxQLENBQUE7QUFNQSxRQUFBLElBQUcsWUFBSDtBQUNDLFVBQUEsSUFBRyxJQUFBLEtBQVEsSUFBQyxDQUFBLElBQVo7QUFFQyxZQUFBLGNBQWMsQ0FBQyxJQUFmLENBQW9CLE1BQXBCLENBQUEsQ0FBQTtBQUNBLHFCQUhEO1dBREQ7U0FOQTtBQUFBLFFBYUEsS0FBQSxHQUFRLE9BQU8sQ0FBQyxJQUFSLENBQWEsZUFBYixDQWJSLENBQUE7QUFjQSxRQUFBLElBQUcsZUFBQSxJQUFXLDBCQUFkO0FBQ0MsVUFBQSxPQUFPLENBQUMsSUFBUixDQUFhLFNBQVUsQ0FBQSxLQUFBLENBQXZCLENBQUEsQ0FERDtTQWZEO0FBQUEsT0FKQTtBQXVCQSxhQUFPLE9BQVAsQ0F4Qk87SUFBQSxDQUFSLENBQUE7OzRCQUFBOztNQUZELENBQUE7QUFBQSIsImZpbGUiOiJ0ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEVsZWdhbmNlLlRlbXBsYXRlUmVuZGVyZXJcclxuXHJcblx0cmVuZGVyOiAodGVtcGxhdGUsIHZhcmlhYmxlcykgLT5cclxuXHRcdGVsZW1lbnRzID0gdGVtcGxhdGUuZmluZCgnKicpXHJcblx0XHRcclxuXHRcdGNoaWxkVGVtcGxhdGVzID0gW11cclxuXHJcblx0XHRmb3IgZWxlbWVudCBpbiBlbGVtZW50c1xyXG5cdFx0XHRlbGVtZW50ID0gJChlbGVtZW50KVxyXG5cclxuXHRcdFx0IyBtYWtlIHN1cmUgdGhpcyBlbGVtZW50IGlzIG5vdCBpbiBhIGNoaWxkLXRlbXBsYXRlXHJcblx0XHRcdHBhcmVudCA9IGVsZW1lbnQucGFyZW50cygnW2RhdGEtdGVtcGxhdGUtbmFtZV0nKS5maXJzdCgpXHJcblx0XHRcdFxyXG5cdFx0XHRhdHRyID0gcGFyZW50LmF0dHIoJ2RhdGEtdGVtcGxhdGUtbmFtZScpXHJcblx0XHRcdGlmIGF0dHI/XHJcblx0XHRcdFx0aWYgYXR0ciAhPSBAbmFtZVxyXG5cdFx0XHRcdFx0IyBnb3QgYSBjaGlsZCB0ZW1wbGF0ZSwgbGV0J3MgYWRkIGl0LlxyXG5cdFx0XHRcdFx0Y2hpbGRUZW1wbGF0ZXMucHVzaCBwYXJlbnRcclxuXHRcdFx0XHRcdGNvbnRpbnVlXHJcblxyXG5cdFx0XHQjIGlzIHRoaXMgZWxlbWVudCBidW5kIHRvIGEgdmFsdWU/XHJcblx0XHRcdGJvdW5kID0gZWxlbWVudC5hdHRyICdkYXRhLXZhcmlhYmxlJ1xyXG5cdFx0XHRpZiBib3VuZD8gYW5kIHZhcmlhYmxlc1tib3VuZF0/XHJcblx0XHRcdFx0ZWxlbWVudC5odG1sKHZhcmlhYmxlc1tib3VuZF0pXHJcblxyXG5cdFx0IyByZXR1cm4gcGFyZW50IHRlbXBsYXRlc1xyXG5cdFx0cmV0dXJuIHBhcmVudHMiXX0=