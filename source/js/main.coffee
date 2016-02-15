config = require "./config.coffee"
utils = require './utils.coffee'
console.log utils

utils.set_model_host()

#Courses = require './controllers/main'
CourseListController = require './controllers/courses'
FragmentListController = require './controllers/fragments'

class App extends Spine.Controller
  el: 'body'
  className: 'app'
  constructor: ->
    super
    @courseListController = new CourseListController()
    @fragmentListController = new FragmentListController()
    Spine.Route.setup()

$ ->
  new App()
