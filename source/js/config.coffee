try
  local_config = require './local_config'
catch
  local_config = null

Config = ->
  @debug = local_config?.debug or true
  @host = local_config?.host or "http://192.168.9.191:12345"
  @debug_host = local_config?.debug_host or "http://192.168.9.191:12345"

module.exports = new Config()
