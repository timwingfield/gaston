class Gaston.Views.TitleView extends Backbone.View
  template: "title"
  
  render: ->
    $(@el).html(@template())
    @
