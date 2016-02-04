config = require "./config.coffee"
Spine.Model.host = config.host

#Courses = require './controllers/main'
CourseListController = require './controllers/courses'

class App extends Spine.Controller
  el: 'body'
  className: 'app'
  constructor: ->
    super
    @courseListController = new CourseListController()
    Spine.Route.setup()

$ ->
  new App()
