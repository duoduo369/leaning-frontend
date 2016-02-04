(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Config;

Config = function() {
  return this.host = "http://192.168.9.191:12345";
};

module.exports = new Config();


},{}],2:[function(require,module,exports){
var Course, CourseListController, config,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

config = require('../config');

Course = require('../models/courses');

CourseListController = (function(superClass) {
  extend(CourseListController, superClass);

  CourseListController.prototype.url = config.host + "/api/v2/courses";

  CourseListController.prototype.el = '#course-list';

  CourseListController.prototype.className = 'courses';

  function CourseListController() {
    this.render = bind(this.render, this);
    CourseListController.__super__.constructor.apply(this, arguments);
    Course.bind("refresh change", this.render);
    Course.fetch();
  }

  CourseListController.prototype.template = function(items) {
    return require('../views/course')(items);
  };

  CourseListController.prototype.render = function() {
    return this.html(this.template(Course.all()));
  };

  return CourseListController;

})(Spine.Controller);

module.exports = CourseListController;


},{"../config":1,"../models/courses":4,"../views/course":5}],3:[function(require,module,exports){
var App, CourseListController, config,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

config = require("./config.coffee");

Spine.Model.host = config.host;

CourseListController = require('./controllers/courses');

App = (function(superClass) {
  extend(App, superClass);

  App.prototype.el = 'body';

  App.prototype.className = 'app';

  function App() {
    App.__super__.constructor.apply(this, arguments);
    this.courseListController = new CourseListController();
    Spine.Route.setup();
  }

  return App;

})(Spine.Controller);

$(function() {
  return new App();
});


},{"./config.coffee":1,"./controllers/courses":2}],4:[function(require,module,exports){
var Course,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Course = (function(superClass) {
  extend(Course, superClass);

  function Course() {
    return Course.__super__.constructor.apply(this, arguments);
  }

  Course.configure("Course", "name");

  Course.extend(Spine.Model.Ajax);

  Course.url = "/api/v2/courses";

  Course.beforeFromJSON = function(data) {
    console.log('beforeFromJSON');
    console.log(data['courses']);
    return data['courses'];
  };

  return Course;

})(Spine.Model);

module.exports = Course;


},{}],5:[function(require,module,exports){
module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      var course, i, len;
    
      __out.push('<header>\n  course list\n</header>\n\n<div class="course-list">\n  ');
    
      for (i = 0, len = this.length; i < len; i++) {
        course = this[i];
        __out.push('\n    <p>');
        __out.push(__sanitize(course.name));
        __out.push(' </p>\n  ');
      }
    
      __out.push('\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}
},{}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3Byb2plY3RzL2xlYW5pbmctZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL3Jvb3QvcHJvamVjdHMvbGVhbmluZy1mcm9udGVuZC9zb3VyY2UvanMvY29uZmlnLmNvZmZlZSIsIi9yb290L3Byb2plY3RzL2xlYW5pbmctZnJvbnRlbmQvc291cmNlL2pzL2NvbnRyb2xsZXJzL2NvdXJzZXMuY29mZmVlIiwiL3Jvb3QvcHJvamVjdHMvbGVhbmluZy1mcm9udGVuZC9zb3VyY2UvanMvbWFpbi5jb2ZmZWUiLCIvcm9vdC9wcm9qZWN0cy9sZWFuaW5nLWZyb250ZW5kL3NvdXJjZS9qcy9tb2RlbHMvY291cnNlcy5jb2ZmZWUiLCIvcm9vdC9wcm9qZWN0cy9sZWFuaW5nLWZyb250ZW5kL3NvdXJjZS9qcy92aWV3cy9jb3Vyc2UuZWNvIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBDb25maWc7XG5cbkNvbmZpZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5ob3N0ID0gXCJodHRwOi8vMTkyLjE2OC45LjE5MToxMjM0NVwiO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgQ29uZmlnKCk7XG5cbiIsInZhciBDb3Vyc2UsIENvdXJzZUxpc3RDb250cm9sbGVyLCBjb25maWcsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbkNvdXJzZSA9IHJlcXVpcmUoJy4uL21vZGVscy9jb3Vyc2VzJyk7XG5cbkNvdXJzZUxpc3RDb250cm9sbGVyID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKENvdXJzZUxpc3RDb250cm9sbGVyLCBzdXBlckNsYXNzKTtcblxuICBDb3Vyc2VMaXN0Q29udHJvbGxlci5wcm90b3R5cGUudXJsID0gY29uZmlnLmhvc3QgKyBcIi9hcGkvdjIvY291cnNlc1wiO1xuXG4gIENvdXJzZUxpc3RDb250cm9sbGVyLnByb3RvdHlwZS5lbCA9ICcjY291cnNlLWxpc3QnO1xuXG4gIENvdXJzZUxpc3RDb250cm9sbGVyLnByb3RvdHlwZS5jbGFzc05hbWUgPSAnY291cnNlcyc7XG5cbiAgZnVuY3Rpb24gQ291cnNlTGlzdENvbnRyb2xsZXIoKSB7XG4gICAgdGhpcy5yZW5kZXIgPSBiaW5kKHRoaXMucmVuZGVyLCB0aGlzKTtcbiAgICBDb3Vyc2VMaXN0Q29udHJvbGxlci5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBDb3Vyc2UuYmluZChcInJlZnJlc2ggY2hhbmdlXCIsIHRoaXMucmVuZGVyKTtcbiAgICBDb3Vyc2UuZmV0Y2goKTtcbiAgfVxuXG4gIENvdXJzZUxpc3RDb250cm9sbGVyLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoJy4uL3ZpZXdzL2NvdXJzZScpKGl0ZW1zKTtcbiAgfTtcblxuICBDb3Vyc2VMaXN0Q29udHJvbGxlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbCh0aGlzLnRlbXBsYXRlKENvdXJzZS5hbGwoKSkpO1xuICB9O1xuXG4gIHJldHVybiBDb3Vyc2VMaXN0Q29udHJvbGxlcjtcblxufSkoU3BpbmUuQ29udHJvbGxlcik7XG5cbm1vZHVsZS5leHBvcnRzID0gQ291cnNlTGlzdENvbnRyb2xsZXI7XG5cbiIsInZhciBBcHAsIENvdXJzZUxpc3RDb250cm9sbGVyLCBjb25maWcsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25maWcgPSByZXF1aXJlKFwiLi9jb25maWcuY29mZmVlXCIpO1xuXG5TcGluZS5Nb2RlbC5ob3N0ID0gY29uZmlnLmhvc3Q7XG5cbkNvdXJzZUxpc3RDb250cm9sbGVyID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9jb3Vyc2VzJyk7XG5cbkFwcCA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChBcHAsIHN1cGVyQ2xhc3MpO1xuXG4gIEFwcC5wcm90b3R5cGUuZWwgPSAnYm9keSc7XG5cbiAgQXBwLnByb3RvdHlwZS5jbGFzc05hbWUgPSAnYXBwJztcblxuICBmdW5jdGlvbiBBcHAoKSB7XG4gICAgQXBwLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuY291cnNlTGlzdENvbnRyb2xsZXIgPSBuZXcgQ291cnNlTGlzdENvbnRyb2xsZXIoKTtcbiAgICBTcGluZS5Sb3V0ZS5zZXR1cCgpO1xuICB9XG5cbiAgcmV0dXJuIEFwcDtcblxufSkoU3BpbmUuQ29udHJvbGxlcik7XG5cbiQoZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgQXBwKCk7XG59KTtcblxuIiwidmFyIENvdXJzZSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvdXJzZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChDb3Vyc2UsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIENvdXJzZSgpIHtcbiAgICByZXR1cm4gQ291cnNlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgQ291cnNlLmNvbmZpZ3VyZShcIkNvdXJzZVwiLCBcIm5hbWVcIik7XG5cbiAgQ291cnNlLmV4dGVuZChTcGluZS5Nb2RlbC5BamF4KTtcblxuICBDb3Vyc2UudXJsID0gXCIvYXBpL3YyL2NvdXJzZXNcIjtcblxuICBDb3Vyc2UuYmVmb3JlRnJvbUpTT04gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ2JlZm9yZUZyb21KU09OJyk7XG4gICAgY29uc29sZS5sb2coZGF0YVsnY291cnNlcyddKTtcbiAgICByZXR1cm4gZGF0YVsnY291cnNlcyddO1xuICB9O1xuXG4gIHJldHVybiBDb3Vyc2U7XG5cbn0pKFNwaW5lLk1vZGVsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb3Vyc2U7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oX19vYmopIHtcbiAgaWYgKCFfX29iaikgX19vYmogPSB7fTtcbiAgdmFyIF9fb3V0ID0gW10sIF9fY2FwdHVyZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgdmFyIG91dCA9IF9fb3V0LCByZXN1bHQ7XG4gICAgX19vdXQgPSBbXTtcbiAgICBjYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgIHJlc3VsdCA9IF9fb3V0LmpvaW4oJycpO1xuICAgIF9fb3V0ID0gb3V0O1xuICAgIHJldHVybiBfX3NhZmUocmVzdWx0KTtcbiAgfSwgX19zYW5pdGl6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmVjb1NhZmUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIF9fZXNjYXBlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSwgX19zYWZlLCBfX29ialNhZmUgPSBfX29iai5zYWZlLCBfX2VzY2FwZSA9IF9fb2JqLmVzY2FwZTtcbiAgX19zYWZlID0gX19vYmouc2FmZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmVjb1NhZmUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPSBudWxsKSkgdmFsdWUgPSAnJztcbiAgICAgIHZhciByZXN1bHQgPSBuZXcgU3RyaW5nKHZhbHVlKTtcbiAgICAgIHJlc3VsdC5lY29TYWZlID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9O1xuICBpZiAoIV9fZXNjYXBlKSB7XG4gICAgX19lc2NhcGUgPSBfX29iai5lc2NhcGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuICgnJyArIHZhbHVlKVxuICAgICAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICB9O1xuICB9XG4gIChmdW5jdGlvbigpIHtcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY291cnNlLCBpLCBsZW47XG4gICAgXG4gICAgICBfX291dC5wdXNoKCc8aGVhZGVyPlxcbiAgY291cnNlIGxpc3RcXG48L2hlYWRlcj5cXG5cXG48ZGl2IGNsYXNzPVwiY291cnNlLWxpc3RcIj5cXG4gICcpO1xuICAgIFxuICAgICAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb3Vyc2UgPSB0aGlzW2ldO1xuICAgICAgICBfX291dC5wdXNoKCdcXG4gICAgPHA+Jyk7XG4gICAgICAgIF9fb3V0LnB1c2goX19zYW5pdGl6ZShjb3Vyc2UubmFtZSkpO1xuICAgICAgICBfX291dC5wdXNoKCcgPC9wPlxcbiAgJyk7XG4gICAgICB9XG4gICAgXG4gICAgICBfX291dC5wdXNoKCdcXG48L2Rpdj5cXG4nKTtcbiAgICBcbiAgICB9KS5jYWxsKHRoaXMpO1xuICAgIFxuICB9KS5jYWxsKF9fb2JqKTtcbiAgX19vYmouc2FmZSA9IF9fb2JqU2FmZSwgX19vYmouZXNjYXBlID0gX19lc2NhcGU7XG4gIHJldHVybiBfX291dC5qb2luKCcnKTtcbn0iXX0=
