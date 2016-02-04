config = require '../config'
Course = require '../models/courses'

class CourseListController extends Spine.Controller
  url: "#{config.host}/api/v2/courses"
  el: '#course-list'
  className: 'courses'

  constructor: ->
    super
    Course.bind("refresh change", @render)
    #Course.bind("ajaxSuccess", @ajaxSuccess);
    Course.fetch()

  template: (items) ->
    require('../views/course')(items)

  render: =>
    @html(@template(Course.all()))

module.exports = CourseListController
