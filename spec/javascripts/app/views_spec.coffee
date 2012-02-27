describe "window.TitleView", ->
  Given -> @subject = new window.TitleView
  Then -> expect(@subject).toBeDefined()
  Then -> expect(@subject.template).toBeDefined()

  describe "#render", ->
    Given -> spyOn(@subject, "template").andReturn '<div>title</div>'
    When -> @result = @subject.render()
    Then -> @result == @subject
    #Not sure here...think matcher is missing  Then -> expect($(@subject.el)).toHaveHtml '<div>title</div>'
