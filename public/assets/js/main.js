(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Course, CourseListController,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Course = require('../models/courses');

CourseListController = (function(superClass) {
  extend(CourseListController, superClass);

  function CourseListController() {
    CourseListController.__super__.constructor.apply(this, arguments);
    this.data = Course.fetch();
  }

  return CourseListController;

})(Spine.Controller);

module.exports = CourseListController;


},{"../models/courses":3}],2:[function(require,module,exports){
var Course, CourseListController, controller;

CourseListController = require('./controllers/courses');

Course = require('./models/courses');

controller = CourseListController();

$('#div1').append(controller.data);


},{"./controllers/courses":1,"./models/courses":3}],3:[function(require,module,exports){
var Course,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Spine.Model.host = "http://www.xuetangx.com";

Course = (function(superClass) {
  extend(Course, superClass);

  function Course() {
    return Course.__super__.constructor.apply(this, arguments);
  }

  Course.configure("Course", "name");

  Course.extend(Spine.Model.Ajax);

  Course.url = "/api/v2/courses";

  return Course;

})(Spine.Model);

module.exports = Course;


},{}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3Byb2plY3RzL2xlYW5pbmctZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL3Jvb3QvcHJvamVjdHMvbGVhbmluZy1mcm9udGVuZC9zb3VyY2UvanMvY29udHJvbGxlcnMvY291cnNlcy5jb2ZmZWUiLCIvcm9vdC9wcm9qZWN0cy9sZWFuaW5nLWZyb250ZW5kL3NvdXJjZS9qcy9tYWluLmNvZmZlZSIsIi9yb290L3Byb2plY3RzL2xlYW5pbmctZnJvbnRlbmQvc291cmNlL2pzL21vZGVscy9jb3Vyc2VzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBDb3Vyc2UsIENvdXJzZUxpc3RDb250cm9sbGVyLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ291cnNlID0gcmVxdWlyZSgnLi4vbW9kZWxzL2NvdXJzZXMnKTtcblxuQ291cnNlTGlzdENvbnRyb2xsZXIgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoQ291cnNlTGlzdENvbnRyb2xsZXIsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIENvdXJzZUxpc3RDb250cm9sbGVyKCkge1xuICAgIENvdXJzZUxpc3RDb250cm9sbGVyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuZGF0YSA9IENvdXJzZS5mZXRjaCgpO1xuICB9XG5cbiAgcmV0dXJuIENvdXJzZUxpc3RDb250cm9sbGVyO1xuXG59KShTcGluZS5Db250cm9sbGVyKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb3Vyc2VMaXN0Q29udHJvbGxlcjtcblxuIiwidmFyIENvdXJzZSwgQ291cnNlTGlzdENvbnRyb2xsZXIsIGNvbnRyb2xsZXI7XG5cbkNvdXJzZUxpc3RDb250cm9sbGVyID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9jb3Vyc2VzJyk7XG5cbkNvdXJzZSA9IHJlcXVpcmUoJy4vbW9kZWxzL2NvdXJzZXMnKTtcblxuY29udHJvbGxlciA9IENvdXJzZUxpc3RDb250cm9sbGVyKCk7XG5cbiQoJyNkaXYxJykuYXBwZW5kKGNvbnRyb2xsZXIuZGF0YSk7XG5cbiIsInZhciBDb3Vyc2UsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5TcGluZS5Nb2RlbC5ob3N0ID0gXCJodHRwOi8vd3d3Lnh1ZXRhbmd4LmNvbVwiO1xuXG5Db3Vyc2UgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoQ291cnNlLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBDb3Vyc2UoKSB7XG4gICAgcmV0dXJuIENvdXJzZS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIENvdXJzZS5jb25maWd1cmUoXCJDb3Vyc2VcIiwgXCJuYW1lXCIpO1xuXG4gIENvdXJzZS5leHRlbmQoU3BpbmUuTW9kZWwuQWpheCk7XG5cbiAgQ291cnNlLnVybCA9IFwiL2FwaS92Mi9jb3Vyc2VzXCI7XG5cbiAgcmV0dXJuIENvdXJzZTtcblxufSkoU3BpbmUuTW9kZWwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvdXJzZTtcblxuIl19
