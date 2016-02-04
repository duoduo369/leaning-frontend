#--------------------------------------------------------
# Requirements
#--------------------------------------------------------

gulp      = require 'gulp'
plugins   = require('gulp-load-plugins')()
config    = require "../config.coffee"
coffeeify = require 'coffeeify'
handleify = require 'handleify'


#--------------------------------------------------------
# Compile JavaScripts 
#--------------------------------------------------------

gulp.task "javascripts", ->
  gulp.src "#{config.sourcePath}/#{config.jsDirectory}/#{config.jsMainFile}.coffee", read: false
    .pipe plugins.plumber()
    .pipe plugins.browserify
      transform:  ["handleify", "coffeeify", 'browserify-eco']
      extensions: [".coffee", ".js", ".eco"]
      debug: config.development
    .pipe plugins.rename "#{config.jsMainFile}.js"
    .pipe gulp.dest "#{config.outputPath}/#{config.jsDirectory}"
