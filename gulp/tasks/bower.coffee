#--------------------------------------------------------
# Requirements
#--------------------------------------------------------

gulp           = require 'gulp'
mainBowerFiles = require 'main-bower-files'
plugins        = require('gulp-load-plugins')()
config         = require "../config.coffee"


#--------------------------------------------------------
# Concatenate Bower libraries
#--------------------------------------------------------

gulp.task "bower", ->
  gulp.src mainBowerFiles('**/*.js')
    .pipe plugins.concat("vendor.js")
    .pipe gulp.dest "#{config.outputPath}/#{config.jsDirectory}"

  gulp.src mainBowerFiles('**/*.css')
    .pipe plugins.concat("vendor.css")
    .pipe gulp.dest "#{config.outputPath}/#{config.cssDirectory}"

  gulp.src "#{config.vendorPath}/**/*"
    .pipe gulp.dest "#{config.outputPath}/vendor/"
