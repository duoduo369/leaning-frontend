/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { throw err; };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var Config;

	Config = function() {
	  return this.host = "http://192.168.9.191:12345";
	};

	module.exports = new Config();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Course, CourseListController, config,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	config = __webpack_require__(0);

	Course = __webpack_require__(3);

	CourseListController = (function(superClass) {
	  extend(CourseListController, superClass);

	  CourseListController.prototype.url = config.host + "/api/v2/courses";

	  CourseListController.prototype.className = 'courses';

	  function CourseListController() {
	    this.render = bind(this.render, this);
	    CourseListController.__super__.constructor.apply(this, arguments);
	    console.log('sssssssbeferosssssss');
	    Course.bind("refresh change", this.render);
	    Course.fetch();
	  }

	  CourseListController.prototype.template = function(items) {
	    console.log('template');
	    console.log(items);
	    return __webpack_require__(4)(items);
	  };

	  CourseListController.prototype.render = function() {
	    return this.html(this.template(Course.all()));
	  };

	  return CourseListController;

	})(Spine.Controller);

	module.exports = CourseListController;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var App, CourseListController, config,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	config = __webpack_require__(0);

	Spine.Model.host = config.host;

	console.log('0000000000000');

	CourseListController = __webpack_require__(1);

	console.log('111111111111111');

	App = (function(superClass) {
	  extend(App, superClass);

	  App.prototype.el = 'body';

	  App.prototype.className = 'app';

	  function App() {
	    App.__super__.constructor.apply(this, arguments);
	    this.courseListController = new CourseListController();
	    this.append(this.courseListController.render());
	    Spine.Route.setup();
	  }

	  return App;

	})(Spine.Controller);

	console.log('2xxxxxxxxxxxx');

	$(function() {
	  return new App();
	});


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ },
/* 4 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);