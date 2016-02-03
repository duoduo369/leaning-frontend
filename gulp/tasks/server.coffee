#--------------------------------------------------------
# Requirements
#--------------------------------------------------------

gulp    = require 'gulp'
plugins = require('gulp-load-plugins')()
config  = require "../config.coffee"

# --------------------------------------------------------
# Run server
# --------------------------------------------------------

gulp.task "server", ->
   gulp.src config.publicPath
    .pipe plugins.webserver
      host: '0.0.0.0'
      port: 3000
      livereload: 22345
