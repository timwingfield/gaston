describe "Gaston.Views.TitleView", ->
  Given -> @subject = new Gaston.Views.TitleView
  Then -> expect(@subject).toBeDefined()
  Then -> @subject.template == "title"

  describe "#render", ->
    Given -> spyOn(@subject, "template").andReturn '<div>title</div>'
    When -> @result = @subject.render()
    Then -> @result == @subject
    #Not sure here... Then -> expect($(@subject.el)).toHaveHtml '<div>title</div>'
