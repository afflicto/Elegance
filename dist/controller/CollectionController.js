(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Elegance.CollectionController = (function(superClass) {
    extend(CollectionController, superClass);

    CollectionController.prototype.container = null;

    CollectionController.prototype.template = null;

    CollectionController.prototype.instances = [];

    CollectionController.prototype.listeners = [];

    CollectionController.prototype.childEvents = {};

    CollectionController.prototype.page = 1;

    CollectionController.prototype.count = 0;

    CollectionController.prototype.pages = 1;

    CollectionController.prototype.perPage = 5;

    function CollectionController(app, route) {
      var event, method, ref, selector, self;
      this.app = app;
      this.route = route;
      this.onModelRemoved = bind(this.onModelRemoved, this);
      this.onModelAdded = bind(this.onModelAdded, this);
      this.onModelChanged = bind(this.onModelChanged, this);
      CollectionController.__super__.constructor.apply(this, arguments);
      this.template = $(this.container).find('[data-template-name]').first();
      ref = this.childEvents;
      for (event in ref) {
        if (!hasProp.call(ref, event)) continue;
        method = ref[event];
        event = event.split(' ');
        selector = event.pop();
        event = event[0];
        self = this;
        this.bindEvent($(this.container), event, selector, function(input) {
          var id;
          id = $(this).parents('[data-template-instance]').first().attr('data-model-id');
          return self[method](self.data.find(id, input));
        });
      }
    }

    CollectionController.prototype.fetchCount = function(cb) {
      return this.app.store.count(this.type, (function(_this) {
        return function(count) {
          _this.count = count;
          _this.pages = Math.ceil(_this.count / _this.perPage);
          return cb(count);
        };
      })(this));
    };

    CollectionController.prototype.fetch = function() {
      return this.app.store.fetch(this.type, this.page, (function(_this) {
        return function(collection) {
          return _this.setData(collection);
        };
      })(this));
    };

    CollectionController.prototype.init = function(page) {
      if (page == null) {
        page = 1;
      }
      CollectionController.__super__.init.apply(this, arguments);
      this.page = page;
      return this.fetchCount((function(_this) {
        return function(count) {
          return _this.fetch();
        };
      })(this));
    };

    CollectionController.prototype.setData = function(data) {
      if (this.data) {
        this.data.off('change,add,remove,destroy', this.listeners);
        this.listeners = [];
      }
      this.data = data;
      if (this.data != null) {
        this.listeners.push(this.data.on('change', this.onModelChanged));
        this.listeners.push(this.data.on('add', this.onModelAdded));
        this.listeners.push(this.data.on('remove,destroy', this.onModelRemoved));
      }
      if (this.isShown()) {
        return this.render();
      } else {
        return this.dirty = true;
      }
    };


    /**
    	 * NOT called when we change the entire collection/data object. Only the setData method will do a full re-render.
    	 * This is different than the base Elegance.Controller class.
    	 *
    	 * This method simply updates the changed models representations in the template.
    	 * @return {[type]} [description]
     */

    CollectionController.prototype.onModelChanged = function(model) {
      var container, instance;
      container = $(this.container);
      instance = container.find('[data-model-id="' + model.get('id') + '"]');
      return this.app.render(instance, model);
    };

    CollectionController.prototype.onModelAdded = function(model) {
      var clone, container;
      container = $(this.container);
      clone = this.template.clone();
      clone.removeAttr('data-template-name');
      clone.attr('data-template-instance', 'true');
      container.append(clone);
      this.app.render(clone, model);
      return clone.show();
    };

    CollectionController.prototype.onModelRemoved = function(model) {
      var container;
      container = $(this.container);
      return container.find('[data-model-id="' + model.get('id') + '"]').remove();
    };

    CollectionController.prototype.show = function(page) {
      if (page == null) {
        page = 1;
      }
      if (page !== this.page) {
        this.page = page;
        this.fetch();
      }
      return CollectionController.__super__.show.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXIvQ29sbGVjdGlvbkNvbnRyb2xsZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7K0JBQUE7O0FBQUEsRUFBTSxRQUFRLENBQUM7QUFDZCw0Q0FBQSxDQUFBOztBQUFBLG1DQUFBLFNBQUEsR0FBVyxJQUFYLENBQUE7O0FBQUEsbUNBQ0EsUUFBQSxHQUFVLElBRFYsQ0FBQTs7QUFBQSxtQ0FFQSxTQUFBLEdBQVcsRUFGWCxDQUFBOztBQUFBLG1DQUdBLFNBQUEsR0FBVyxFQUhYLENBQUE7O0FBQUEsbUNBSUEsV0FBQSxHQUFhLEVBSmIsQ0FBQTs7QUFBQSxtQ0FLQSxJQUFBLEdBQU0sQ0FMTixDQUFBOztBQUFBLG1DQU1BLEtBQUEsR0FBTyxDQU5QLENBQUE7O0FBQUEsbUNBT0EsS0FBQSxHQUFPLENBUFAsQ0FBQTs7QUFBQSxtQ0FRQSxPQUFBLEdBQVMsQ0FSVCxDQUFBOztBQVVhLElBQUEsOEJBQUMsR0FBRCxFQUFPLEtBQVAsR0FBQTtBQUNaLFVBQUEsa0NBQUE7QUFBQSxNQURhLElBQUMsQ0FBQSxNQUFELEdBQ2IsQ0FBQTtBQUFBLE1BRG1CLElBQUMsQ0FBQSxRQUFELEtBQ25CLENBQUE7QUFBQSwyREFBQSxDQUFBO0FBQUEsdURBQUEsQ0FBQTtBQUFBLDJEQUFBLENBQUE7QUFBQSxNQUFBLHVEQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsUUFBRCxHQUFZLENBQUEsQ0FBRSxJQUFDLENBQUEsU0FBSCxDQUFhLENBQUMsSUFBZCxDQUFtQixzQkFBbkIsQ0FBMEMsQ0FBQyxLQUEzQyxDQUFBLENBRFosQ0FBQTtBQUlBO0FBQUEsV0FBQSxZQUFBOzs0QkFBQTtBQUNDLFFBQUEsS0FBQSxHQUFRLEtBQUssQ0FBQyxLQUFOLENBQVksR0FBWixDQUFSLENBQUE7QUFBQSxRQUNBLFFBQUEsR0FBVyxLQUFLLENBQUMsR0FBTixDQUFBLENBRFgsQ0FBQTtBQUFBLFFBRUEsS0FB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QUFLLENBQUMsSUFBTixDQUFXLHdCQUFYLEVBQXFDLE1BQXJDLENBRkEsQ0FBQTtBQUFBLFFBR0EsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsS0FBakIsQ0FIQSxDQUFBO0FBQUEsUUFLQSxJQUFDLENBQUEsR0FBRyxDQUFDLE1BQUwsQ0FBWSxLQUFaLEVBQW1CLEtBQW5CLENBTEEsQ0FBQTtBQUFBLHFCQU1BLEtBQUssQ0FBQyxJQUFOLENBQUEsRUFOQSxDQUREO0FBQUE7cUJBUk87SUFBQSxDQWxHUixDQUFBOztnQ0FBQTs7S0FEMkMsUUFBUSxDQUFDLFdBQXJELENBQUE7QUFBQSIsImZpbGUiOiJDb250cm9sbGVyL0NvbGxlY3Rpb25Db250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRWxlZ2FuY2UuQ29sbGVjdGlvbkNvbnRyb2xsZXIgZXh0ZW5kcyBFbGVnYW5jZS5Db250cm9sbGVyXHJcblx0Y29udGFpbmVyOiBudWxsXHJcblx0dGVtcGxhdGU6IG51bGxcclxuXHRpbnN0YW5jZXM6IFtdXHJcblx0bGlzdGVuZXJzOiBbXVxyXG5cdGNoaWxkRXZlbnRzOiB7fVxyXG5cdHBhZ2U6IDFcclxuXHRjb3VudDogMFxyXG5cdHBhZ2VzOiAxXHJcblx0cGVyUGFnZTogNVxyXG5cclxuXHRjb25zdHJ1Y3RvcjogKEBhcHAsIEByb3V0ZSkgLT5cclxuXHRcdHN1cGVyXHJcblx0XHRAdGVtcGxhdGUgPSAkKEBjb250YWluZXIpLmZpbmQoJ1tkYXRhLXRlbXBsYXRlLW5hbWVdJykuZmlyc3QoKVxyXG5cclxuXHRcdCMgc2V0dXAgZXZlbnRzIG9uIGVhY2ggY2hpbGRcclxuXHRcdGZvciBvd24gZXZlbnQsIG1ldGhvZCBvZiBAY2hpbGRFdmVudHNcclxuXHRcdFx0ZXZlbnQgPSBldmVudC5zcGxpdCAnICdcclxuXHRcdFx0c2VsZWN0b3IgPSBldmVudC5wb3AoKVxyXG5cdFx0XHRldmVudCA9IGV2ZW50WzBdXHJcblxyXG5cdFx0XHRzZWxmID0gdGhpc1xyXG5cdFx0XHRAYmluZEV2ZW50KCQoQGNvbnRhaW5lciksIGV2ZW50LCBzZWxlY3RvciwgKGlucHV0KSAtPlxyXG5cdFx0XHRcdGlkID0gJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS10ZW1wbGF0ZS1pbnN0YW5jZV0nKS5maXJzdCgpLmF0dHIoJ2RhdGEtbW9kZWwtaWQnKVxyXG5cdFx0XHRcdHNlbGZbbWV0aG9kXShzZWxmLmRhdGEuZmluZCBpZCwgaW5wdXQpXHJcblx0XHRcdClcclxuXHJcblx0ZmV0Y2hDb3VudDogKGNiKSAtPlxyXG5cdFx0QGFwcC5zdG9yZS5jb3VudCBAdHlwZSwgKGNvdW50KSA9PlxyXG5cdFx0XHRAY291bnQgPSBjb3VudFxyXG5cdFx0XHRAcGFnZXMgPSBNYXRoLmNlaWwoQGNvdW50IC8gQHBlclBhZ2UpXHJcblx0XHRcdGNiKGNvdW50KVxyXG5cclxuXHRmZXRjaDogKCkgLT5cclxuXHRcdEBhcHAuc3RvcmUuZmV0Y2ggQHR5cGUsIEBwYWdlLCAoY29sbGVjdGlvbikgPT5cclxuXHRcdFx0QHNldERhdGEgY29sbGVjdGlvblxyXG5cclxuXHRpbml0OiAocGFnZSA9IDEpIC0+XHJcblx0XHRzdXBlclxyXG5cdFx0QHBhZ2UgPSBwYWdlXHJcblx0XHRAZmV0Y2hDb3VudCAoY291bnQpID0+XHJcblx0XHRcdEBmZXRjaCgpXHJcblxyXG5cdHNldERhdGE6IChkYXRhKSAtPlxyXG5cdFx0aWYgQGRhdGFcclxuXHRcdFx0QGRhdGEub2ZmICdjaGFuZ2UsYWRkLHJlbW92ZSxkZXN0cm95JywgQGxpc3RlbmVyc1xyXG5cdFx0XHRAbGlzdGVuZXJzID0gW11cclxuXHRcdEBkYXRhID0gZGF0YVxyXG5cclxuXHRcdGlmIEBkYXRhP1xyXG5cdFx0XHRAbGlzdGVuZXJzLnB1c2ggQGRhdGEub24gJ2NoYW5nZScsIEBvbk1vZGVsQ2hhbmdlZFxyXG5cdFx0XHRAbGlzdGVuZXJzLnB1c2ggQGRhdGEub24gJ2FkZCcsIEBvbk1vZGVsQWRkZWRcclxuXHRcdFx0QGxpc3RlbmVycy5wdXNoIEBkYXRhLm9uICdyZW1vdmUsZGVzdHJveScsIEBvbk1vZGVsUmVtb3ZlZFxyXG5cclxuXHRcdCMgaWYgdGhpcyBjb250cm9sbGVyIGlzIHNob3duLCBsZXQncyByZS1yZW5kZXIgaXQgYXNhcC5cclxuXHRcdGlmIEBpc1Nob3duKClcclxuXHRcdFx0QHJlbmRlcigpXHJcblx0XHRlbHNlXHJcblx0XHRcdCMgb3RoZXJ3aXNlLCByZS1yZW5kZXIgd2hlbiB3ZSBuZWVkIHRvXHJcblx0XHRcdEBkaXJ0eSA9IHRydWVcclxuXHJcblxyXG5cdCMjIypcclxuXHQgKiBOT1QgY2FsbGVkIHdoZW4gd2UgY2hhbmdlIHRoZSBlbnRpcmUgY29sbGVjdGlvbi9kYXRhIG9iamVjdC4gT25seSB0aGUgc2V0RGF0YSBtZXRob2Qgd2lsbCBkbyBhIGZ1bGwgcmUtcmVuZGVyLlxyXG5cdCAqIFRoaXMgaXMgZGlmZmVyZW50IHRoYW4gdGhlIGJhc2UgRWxlZ2FuY2UuQ29udHJvbGxlciBjbGFzcy5cclxuXHQgKlxyXG5cdCAqIFRoaXMgbWV0aG9kIHNpbXBseSB1cGRhdGVzIHRoZSBjaGFuZ2VkIG1vZGVscyByZXByZXNlbnRhdGlvbnMgaW4gdGhlIHRlbXBsYXRlLlxyXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxyXG5cdCMjI1xyXG5cdG9uTW9kZWxDaGFuZ2VkOiAobW9kZWwpID0+XHJcblx0XHRjb250YWluZXIgPSAkKEBjb250YWluZXIpXHJcblx0XHRpbnN0YW5jZSA9IGNvbnRhaW5lci5maW5kKCdbZGF0YS1tb2RlbC1pZD1cIicgKyBtb2RlbC5nZXQoJ2lkJykgKyAnXCJdJylcclxuXHJcblx0XHRAYXBwLnJlbmRlciBpbnN0YW5jZSwgbW9kZWxcclxuXHJcblx0b25Nb2RlbEFkZGVkOiAobW9kZWwpID0+XHJcblx0XHRjb250YWluZXIgPSAkKEBjb250YWluZXIpXHJcblxyXG5cdFx0Y2xvbmUgPSBAdGVtcGxhdGUuY2xvbmUoKVxyXG5cdFx0Y2xvbmUucmVtb3ZlQXR0ciAnZGF0YS10ZW1wbGF0ZS1uYW1lJ1xyXG5cdFx0Y2xvbmUuYXR0ciAnZGF0YS10ZW1wbGF0ZS1pbnN0YW5jZScsICd0cnVlJ1xyXG5cclxuXHRcdGNvbnRhaW5lci5hcHBlbmQgY2xvbmVcclxuXHJcblx0XHRAYXBwLnJlbmRlciBjbG9uZSwgbW9kZWxcclxuXHJcblx0XHRjbG9uZS5zaG93KClcclxuXHJcblx0b25Nb2RlbFJlbW92ZWQ6IChtb2RlbCkgPT5cclxuXHRcdGNvbnRhaW5lciA9ICQoQGNvbnRhaW5lcilcclxuXHRcdGNvbnRhaW5lci5maW5kKCdbZGF0YS1tb2RlbC1pZD1cIicgKyBtb2RlbC5nZXQoJ2lkJykgKyAnXCJdJykucmVtb3ZlKClcclxuXHJcblx0c2hvdzogKHBhZ2UgPSAxKSAtPlxyXG5cdFx0dW5sZXNzIHBhZ2UgPT0gQHBhZ2VcclxuXHRcdFx0QHBhZ2UgPSBwYWdlXHJcblx0XHRcdEBmZXRjaCgpXHJcblx0XHRcclxuXHRcdHN1cGVyXHJcblxyXG5cdHJlbmRlcjogKCkgLT5cclxuXHRcdCMgZ2V0IHRoZSBjb250YWluZXIgZWxlbWVudCBmb3IgdGhlIGNvbGxlY3Rpb25cclxuXHRcdGNvbnRhaW5lciA9ICQoQGNvbnRhaW5lcilcclxuXHRcdFxyXG5cdFx0IyByZW1vdmUgYWxsIHRoZSB0ZW1wbGF0ZSBpbnN0YW5jZXNcclxuXHRcdGNvbnRhaW5lci5maW5kKCdbZGF0YS10ZW1wbGF0ZS1pbnN0YW5jZV0nKS5yZW1vdmUoKVxyXG5cclxuXHRcdCMgcmVuZGVyIFxyXG5cdFx0Zm9yIG1vZGVsIGluIEBkYXRhXHJcblx0XHRcdGNsb25lID0gQHRlbXBsYXRlLmNsb25lKClcclxuXHRcdFx0Y2xvbmUucmVtb3ZlQXR0ciAnZGF0YS10ZW1wbGF0ZS1uYW1lJ1xyXG5cdFx0XHRjbG9uZS5hdHRyICdkYXRhLXRlbXBsYXRlLWluc3RhbmNlJywgJ3RydWUnXHJcblx0XHRcdGNvbnRhaW5lci5hcHBlbmQgY2xvbmVcclxuXHJcblx0XHRcdEBhcHAucmVuZGVyIGNsb25lLCBtb2RlbFxyXG5cdFx0XHRjbG9uZS5zaG93KCkiXX0=