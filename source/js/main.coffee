CourseListController = require('./controllers/courses')
Course = require './models/courses'

controller = CourseListController()
$('#div1').append(controller.data)
