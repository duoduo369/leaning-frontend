gulp = require 'gulp'
requireDir = require 'require-dir'
runSequence = require 'run-sequence'

# Require individual tasks
requireDir './gulp/tasks', { recurse: true }

gulp.task "default", ["dev"]

gulp.task "dev", ->
  runSequence "set-development", [
    "bower"
    "webpack"
  ], "server", "watch"

gulp.task "build", ->
  runSequence [
    "bower"
    "webpack"
  ], "minify"
