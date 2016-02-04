Course = require '../models/courses'
Main = require './courses.main'

class Courses extends Spine.Controller
  className: 'courses'

  constructor: ->
    super

    @main = new Main()

    @append @main

    Course.fetch()

module.exports = Courses
