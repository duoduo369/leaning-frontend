config = require '../config'
FragmentTag = require '../models/fragment_tags'
Fragment = require '../models/fragment'
freewall = require 'freewall'
sliphover = require 'sliphover'

class FragmentItem extends Spine.Controller
  el: '#fragment-items'

  constructor: ->
    super
    throw "@item required" unless @item
    @item.bind("refresh change", @render)
    $.get @item.url(), (items) =>
      @render(Fragment.fromJSON(items))

  template: (items) ->
    require('../views/fragment-item')(items)

  render: (items) =>
    @item = items if items
    @append(@template(@item)) if @item
    @

class FragmentListController extends Spine.Controller
  el: '#fragment-list'
  className: 'fragments'

  constructor: ->
    super
    # 注释掉下面这行放到render最后做，因为FragmentItemController
    # 需要FragmentListController先render一次才行，因为item中的el
    # 是由ListControlller动态生成的
    #FragmentTag.bind("refresh", @add_fragments)
    FragmentTag.bind("refresh", @render)
    FragmentTag.fetch()

  add_fragments: =>
    tags = FragmentTag.all()
    fragments = (new FragmentItem(item: new Fragment(tag_id: tag.id)) for tag in tags)
    @add_fragment fragment for fragment in fragments

  add_fragment: (item) =>
    @append(item.render())

  init_freewall: =>
    wall = new freewall.Freewall("#fragment-items")
    wall.reset
      selector: '.fragment-box'
      duration: 100
      animate: true
      reverse: true
      cellW: 300
      cellH: 300
      onResize: ->
        wall.refresh()

    wall.fitWidth()
    $(window).trigger("resize")
    @el.sliphover
      caption: 'data-caption'
      withLink: true

  template: (items) ->
    require('../views/fragments')(items)

  render: =>
    items = FragmentTag.all()
    @html(@template(items))
    @add_fragments()
    @init_freewall()

module.exports = FragmentListController
