(function() {
  Elegance.Store = (function() {
    Store.prototype.app = null;

    Store.prototype.records = {};

    Store.prototype.driver = null;

    function Store(app) {
      this.app = app;
    }

    Store.prototype.setDriver = function(driver) {
      this.driver = driver;
    };

    Store.prototype.getType = function(model) {
      return model.replace(/Controller$/, '').toLowerCase();
    };

    Store.prototype.modelize = function(type, record) {
      var clazz;
      clazz = type.charAt(0).toUpperCase() + type.substr(1) + 'Model';
      if (window[clazz]) {
        return new window[clazz](record);
      } else {
        throw new Error("Cannot find Model class '" + clazz + "' for " + type + " type.");
      }
    };

    Store.prototype.find = function(type, id, callback) {
      var i, len, record, ref;
      if ((this.records[type] != null) === false) {
        this.records[type] = [];
      }
      ref = this.records[type];
      for (i = 0, len = ref.length; i < len; i++) {
        record = ref[i];
        if (record.attributes.id === id) {
          callback(record);
          return true;
        }
      }
      return this.driver.find(type, id, (function(_this) {
        return function(record) {
          var model;
          if (record != null) {
            model = _this.modelize(type, record);
            _this.records[type].push(model);
            return callback(model);
          }
        };
      })(this));
    };

    Store.prototype.get = function(type) {
      if (this.records[type] != null) {
        return this.records[type];
      }
    };

    Store.prototype.count = function(type, callback) {
      return this.driver.count(type, callback);
    };

    Store.prototype.fetch = function(type, page, callback) {
      return this.driver.fetch(type, page, (function(_this) {
        return function(records) {
          var i, j, len, len1, model, record, ref, result;
          if ((_this.records[type] != null) === false) {
            _this.records[type] = [];
          }
          result = [];
          for (i = 0, len = records.length; i < len; i++) {
            record = records[i];
            ref = _this.records[type];
            for (j = 0, len1 = ref.length; j < len1; j++) {
              model = ref[j];
              if (parseInt(model.attributes.id === parseInt(record.id))) {
                model.attributes = record;
                result.push(model);
                continue;
              }
            }
            model = _this.modelize(type, record);
            result.push(model);
            _this.records[type].push(model);
          }
          return callback(new Elegance.Collection(result));
        };
      })(this));
    };

    Store.prototype.save = function(model) {
      return this.driver.save(this.getType(model), model);
    };

    return Store;

  })();

  Elegance.registerModule('store', Elegance.Store);

}).call(this);

//# sourceMappingURL=data:application/json;base64,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QUFELEdBQUE7YUFDTCxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFDLENBQUEsT0FBRCxDQUFTLEtBQVQsQ0FBYixFQUE4QixLQUE5QixFQURLO0lBQUEsQ0FoRU4sQ0FBQTs7aUJBQUE7O01BREQsQ0FBQTs7QUFBQSxFQXNFQSxRQUFRLENBQUMsY0FBVCxDQUF3QixPQUF4QixFQUFpQyxRQUFRLENBQUMsS0FBMUMsQ0F0RUEsQ0FBQTtBQUFBIiwiZmlsZSI6IlN0b3JlL1N0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRWxlZ2FuY2UuU3RvcmVcclxuXHRhcHA6IG51bGxcclxuXHRyZWNvcmRzOiB7fVxyXG5cdGRyaXZlcjogbnVsbFxyXG5cclxuXHRjb25zdHJ1Y3RvcjogKEBhcHApIC0+XHJcblxyXG5cdHNldERyaXZlcjogKEBkcml2ZXIpIC0+XHJcblxyXG5cdGdldFR5cGU6IChtb2RlbCkgLT4gbW9kZWwucmVwbGFjZSgvQ29udHJvbGxlciQvLCAnJykudG9Mb3dlckNhc2UoKVxyXG5cclxuXHRtb2RlbGl6ZTogKHR5cGUsIHJlY29yZCkgLT4gXHJcblx0XHRjbGF6eiA9IHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnN1YnN0cigxKSArICdNb2RlbCdcclxuXHJcblx0XHRpZiB3aW5kb3dbY2xhenpdXHJcblx0XHRcdHJldHVybiBuZXcgd2luZG93W2NsYXp6XSByZWNvcmRcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yIFwiQ2Fubm90IGZpbmQgTW9kZWwgY2xhc3MgJyN7Y2xhenp9JyBmb3IgI3t0eXBlfSB0eXBlLlwiXHJcblxyXG5cdGZpbmQ6ICh0eXBlLCBpZCwgY2FsbGJhY2spIC0+XHJcblxyXG5cdFx0aWYgQHJlY29yZHNbdHlwZV0/ID09IGZhbHNlXHJcblx0XHRcdEByZWNvcmRzW3R5cGVdID0gW11cclxuXHJcblx0XHRmb3IgcmVjb3JkIGluIEByZWNvcmRzW3R5cGVdXHJcblx0XHRcdGlmIHJlY29yZC5hdHRyaWJ1dGVzLmlkID09IGlkXHJcblx0XHRcdFx0Y2FsbGJhY2sgcmVjb3JkXHJcblx0XHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdFxyXG5cdFx0QGRyaXZlci5maW5kIHR5cGUsIGlkLCAocmVjb3JkKSA9PlxyXG5cdFx0XHRpZiByZWNvcmQ/XHJcblx0XHRcdFx0bW9kZWwgPSBAbW9kZWxpemUgdHlwZSwgcmVjb3JkXHJcblx0XHRcdFx0QHJlY29yZHNbdHlwZV0ucHVzaCBtb2RlbFxyXG5cdFx0XHRcdGNhbGxiYWNrIG1vZGVsXHJcblxyXG5cdGdldDogKHR5cGUpIC0+XHJcblx0XHRpZiBAcmVjb3Jkc1t0eXBlXT9cclxuXHRcdFx0cmV0dXJuIEByZWNvcmRzW3R5cGVdXHJcblxyXG5cdGNvdW50OiAodHlwZSwgY2FsbGJhY2spIC0+XHJcblx0XHRAZHJpdmVyLmNvdW50IHR5cGUsIGNhbGxiYWNrXHJcblxyXG5cdGZldGNoOiAodHlwZSwgcGFnZSwgY2FsbGJhY2spIC0+XHJcblx0XHRAZHJpdmVyLmZldGNoIHR5cGUsIHBhZ2UsIChyZWNvcmRzKSA9PiBcclxuXHRcdFx0aWYgQHJlY29yZHNbdHlwZV0/ID09IGZhbHNlXHJcblx0XHRcdFx0QHJlY29yZHNbdHlwZV0gPSBbXVxyXG5cclxuXHRcdFx0cmVzdWx0ID0gW11cclxuXHRcdFx0Zm9yIHJlY29yZCBpbiByZWNvcmRzXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIG1vZGVsIGluIEByZWNvcmRzW3R5cGVdXHJcblx0XHRcdFx0XHRpZiBwYXJzZUludCBtb2RlbC5hdHRyaWJ1dGVzLmlkID09IHBhcnNlSW50IHJlY29yZC5pZFxyXG5cdFx0XHRcdFx0XHRtb2RlbC5hdHRyaWJ1dGVzID0gcmVjb3JkXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoIG1vZGVsXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlXHJcblxyXG5cdFx0XHRcdCMgbW9kZWxpemUgYW5kIGFkZFxyXG5cdFx0XHRcdG1vZGVsID0gQG1vZGVsaXplIHR5cGUsIHJlY29yZFxyXG5cdFx0XHRcdHJlc3VsdC5wdXNoIG1vZGVsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0QHJlY29yZHNbdHlwZV0ucHVzaCBtb2RlbFxyXG5cclxuXHJcblx0XHRcdGNhbGxiYWNrIG5ldyBFbGVnYW5jZS5Db2xsZWN0aW9uIHJlc3VsdFxyXG5cclxuXHRzYXZlOiAobW9kZWwpIC0+XHJcblx0XHRAZHJpdmVyLnNhdmUgQGdldFR5cGUobW9kZWwpLCBtb2RlbFxyXG5cclxuXHJcblxyXG5FbGVnYW5jZS5yZWdpc3Rlck1vZHVsZSAnc3RvcmUnLCBFbGVnYW5jZS5TdG9yZSJdfQ==