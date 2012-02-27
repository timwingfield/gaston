/* DO NOT MODIFY. This file was compiled Mon, 27 Feb 2012 04:41:57 GMT from
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

    TitleView.prototype.template = function() {
      return _.template($("#title-template").html());
    };

    TitleView.prototype.render = function() {
      $(this.el).html(this.template());
      return this;
    };

    return TitleView;

  })(Backbone.View);

}).call(this);
