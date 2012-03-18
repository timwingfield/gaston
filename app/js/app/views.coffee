class window.TitleView extends Backbone.View
  template: "#title-template"

class window.AddNameView extends Backbone.View
  template: "#add-name"

  events:
    'click #add-trip-name': 'addTripName'

  addTripName: ->
    alert @$("#trip-name").val()
