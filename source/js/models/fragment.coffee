class Fragment extends Spine.Model
  @configure "Fragment", "tag_id"
  @extend Spine.Model.Ajax

  url: () =>
    "#{Spine.Model.host}/api/v2/fragment/tag/#{@tag_id}/"

  @beforeFromJSON: (data) ->
    data['fragments']

module.exports = Fragment
