class Course extends Spine.Model
  @configure "Course", "name"
  @extend Spine.Model.Ajax
  @url: "/api/v2/courses"

  @beforeFromJSON: (data) ->
    console.log 'beforeFromJSON'
    console.log data['courses']
    data['courses']

module.exports = Course
