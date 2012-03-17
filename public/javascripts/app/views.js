/* DO NOT MODIFY. This file was compiled Sat, 17 Mar 2012 15:10:19 GMT from
 * /Users/Timbo/Code/backbone/gaston/app/coffeescripts/app/views.coffee
 */

(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.TitleView = (function(_super) {

    __extends(TitleView, _super);

    function TitleView() {
      TitleView.__super__.constructor.apply(this, arguments);
    }

    TitleView.prototype.template = "#title-template";

    return TitleView;

  })(Backbone.View);

  window.SamplePView = (function(_super) {

    __extends(SamplePView, _super);

    function SamplePView() {
      SamplePView.__super__.constructor.apply(this, arguments);
    }

    SamplePView.prototype.template = "#sample-p";

    return SamplePView;

  })(Backbone.View);

}).call(this);
