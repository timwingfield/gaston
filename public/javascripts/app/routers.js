/* DO NOT MODIFY. This file was compiled Sat, 17 Mar 2012 15:10:19 GMT from
 * /Users/Timbo/Code/backbone/gaston/app/coffeescripts/app/routers.coffee
 */

(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      '': 'title'
    };

    Router.prototype.title = function() {
      this.main = new Backbone.LayoutManager({
        template: "#main-layout",
        views: {
          "#here": new window.TitleView,
          "#below": new window.SamplePView
        }
      });
      return this.main.render(function(el) {
        return $("#wrap").html(el);
      });
    };

    return Router;

  })(Backbone.Router);

}).call(this);
