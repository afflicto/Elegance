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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRhdGEvTW9kZWwuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQSxJQUFBOztBQUFBLEVBQUEsSUFBQSxHQUFPLFFBQVEsQ0FBQyxVQUFoQixDQUFBOztBQUFBLEVBRU0sUUFBUSxDQUFDO0FBQ2Qsb0JBQUEsVUFBQSxHQUNDO0FBQUEsTUFBQSxJQUFBLEVBQU0sSUFBSSxDQUFDLE9BQUwsQ0FBQSxDQUFOO0tBREQsQ0FBQTs7QUFHYSxJQUFBLGVBQUMsVUFBRCxHQUFBO0FBQWUsTUFBZCxJQUFDLENBQUEsYUFBRCxVQUFjLENBQWY7SUFBQSxDQUhiOztpQkFBQTs7TUFIRCxDQUFBO0FBQUEiLCJmaWxlIjoiRGF0YS9Nb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImF0dHIgPSBFbGVnYW5jZS5hdHRyaWJ1dGVzXHJcblxyXG5jbGFzcyBFbGVnYW5jZS5Nb2RlbFxyXG5cdGF0dHJpYnV0ZXM6IFxyXG5cdFx0J2lkJzogYXR0ci5pbnRlZ2VyKClcclxuXHJcblx0Y29uc3RydWN0b3I6IChAYXR0cmlidXRlcykgLT5cclxuIl19