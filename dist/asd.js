(function() {
  var attr;

  attr = Elegance.attributes;

  Elegance.Model = (function() {
    Model.prototype.attributes = {
      'id': attr.integer()
    };

    function Model(attributes) {
      this.attributes = attributes;
    }

    return Model;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzZC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLElBQUE7O0FBQUEsRUFBQSxJQUFBLEdBQU8sUUFBUSxDQUFDLFVBQWhCLENBQUE7O0FBQUEsRUFFTSxRQUFRLENBQUM7QUFDZCxvQkFBQSxVQUFBLEdBQ0M7QUFBQSxNQUFBLElBQUEsRUFBTSxJQUFJLENBQUMsT0FBTCxDQUFBLENBQU47S0FERCxDQUFBOztBQUdhLElBQUEsZUFBQyxVQUFELEdBQUE7QUFBZSxNQUFkLElBQUMsQ0FBQSxhQUFELFVBQWMsQ0FBZjtJQUFBLENBSGI7O2lCQUFBOztNQUhELENBQUE7QUFBQSIsImZpbGUiOiJhc2QuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhdHRyID0gRWxlZ2FuY2UuYXR0cmlidXRlc1xyXG5cclxuY2xhc3MgRWxlZ2FuY2UuTW9kZWxcclxuXHRhdHRyaWJ1dGVzOiBcclxuXHRcdCdpZCc6IGF0dHIuaW50ZWdlcigpXHJcblxyXG5cdGNvbnN0cnVjdG9yOiAoQGF0dHJpYnV0ZXMpIC0+XHJcblx0XHQiXX0=