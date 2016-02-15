class FragmentTag extends Spine.Model
  @configure "Tag", "id", "key"
  @extend Spine.Model.Ajax
  @url: "/api/v2/fragment/tags"

  @beforeFromJSON: (data) ->
    console.log 'FragmentTag beforeFromJSON'
    console.log data['tags']
    data['tags']

module.exports = FragmentTag
