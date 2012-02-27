/* DO NOT MODIFY. This file was compiled Mon, 27 Feb 2012 02:07:17 GMT from
 * /Users/Timbo/Code/backbone/gaston/app/coffeescripts/app/views/title_view.coffee
 */

(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Gaston.Views.TitleView = (function(_super) {

    __extends(TitleView, _super);

    function TitleView() {
      TitleView.__super__.constructor.apply(this, arguments);
    }

    TitleView.prototype.template = "title";

    TitleView.prototype.render = function() {
      $(this.el).html(this.template());
      return this;
    };

    return TitleView;

  })(Backbone.View);

}).call(this);
