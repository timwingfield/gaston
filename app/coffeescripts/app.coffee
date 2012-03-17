$ ->
  window.router = new window.Router
  Backbone.history.start({pushstate:true})
  #$('#wrap').html(new window.TitleView().render().el)
