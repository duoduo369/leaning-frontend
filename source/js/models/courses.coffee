Spine.Model.host = "http://www.xuetangx.com"

class Course extends Spine.Model
  @configure "Course", "name"
  @extend Spine.Model.Ajax
  #@Model.host: "http://www.xuetangx.com"
  @url: "/api/v2/courses"


module.exports = Course
