CourseListController = require './courses'

class Main extends Spine.Stack
  className: 'main stack'

  controllers:
    show: CourseListController

module.exports = Main
