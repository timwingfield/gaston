describe "window.TitleView", ->
  Given -> @subject = new window.TitleView
  Then -> expect(@subject).toBeDefined()
  Then -> expect(@subject.template).toBeDefined()
  Then -> @subject.template == "#title-template"

  describe "#render", ->
    Given -> spyOn(@subject, "template").andReturn '<div>title</div>'
    When -> @result = @subject.render()
    Then -> @result == @subject
    #Not sure here...think matcher is missing  Then -> expect($(@subject.el)).toHaveHtml '<div>title</div>'

describe "window.AddNameView", ->
  Given -> @subject = new window.AddNameView
  Then -> expect(@subject).toBeDefined()
  Then -> expect(@subject.template).toBeDefined()
  Then -> @subject.template == "#add-name"
  Then -> expect(@subject.events).toEqual
    'click #add-trip-name': 'addTripName'
    
    describe "#addTripName", ->
      #need to spy on the template form field?
      #When -> @result = @subject.addTripName()
      #Then -> expect(@result).toBeDefined()
