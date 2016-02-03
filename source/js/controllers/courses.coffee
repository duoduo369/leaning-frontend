Course = require '../models/courses'

class CourseListController extends Spine.Controller

  constructor: ->
    super
    @data = Course.fetch()

module.exports = CourseListController
