config = require "./config.coffee"

Utils = ->
  set_model_host: () ->
    if config.debug
      Spine.Model.host = config.debug_host
    else
      Spine.Model.host = config.host
    Spine.Model.host

module.exports = new Utils()
