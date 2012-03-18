class window.Router extends Backbone.Router
  routes:
    '': 'title'

  title: ->
    @main = new Backbone.LayoutManager
      template: "#main-layout"

      views:
        "#here" : new window.TitleView
        "#below" : new window.AddNameView

    @main.render (el) ->
      $("#wrap").html el
