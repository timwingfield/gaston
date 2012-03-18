describe "window.Router", ->
  Given -> @subject = new window.Router
  Then -> expect(@subject.routes).toEqual
    '': 'title'

