#--------------------------------------------------------
# Requirements
#--------------------------------------------------------

webpack   = require 'webpack'
gulp      = require 'gulp'
plugins   = require('gulp-load-plugins')()
config    = require "../config.coffee"


#--------------------------------------------------------
# Compile JavaScripts with Webpack
#--------------------------------------------------------

gulp.task 'webpack', ->
  production = if config.production then '.production' else ''
  webpack require("../webpack.config#{production}"), (err, stats) ->
    throw new plugins.util.PluginError 'webpack', err if err
    plugins.util.log "[webpack]", stats.toString()
