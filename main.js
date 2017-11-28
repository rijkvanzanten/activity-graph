define(['app', 'core/extensions', 'backbone', './lib/chart'], function (app, Extension, Backbone, ChartJS) {
  var Model = Backbone.Model.extend({
    url: '/api/extensions/activity-graph/stats'
  });

  var View = Extension.View.extend({
    template: 'activity-graph/template',
    initialize: function () {
      this.listenTo(this.model, 'sync', this.render);
      this.model.fetch();
    },
    serialize: function () {
      return {
        message: this.model.get('message')
      };
    },
    afterRender: function () {
      var canvasElement = this.el.querySelector('canvas');
      var data = this.model.get('results');
      if (data) {
        this.chart = new ChartJS(canvasElement, {
          type: 'bar',
          data: {
            labels: Object.keys(data),
            datasets: [{
              label: 'Posts per user',
              data: Object.keys(data).map(function (key) {
                return data[key];
              })
            }]
          }
        });
      };
    }
  });

  var PageView = Extension.BasePageView.extend({
    headerOptions: {
      route: {
        title: 'Activity Graph'
      }
    },
    initialize: function () {
      this.setView('#page-content', new View({model: new Model()}));
    }
  });

  var Router = Extension.Router.extend({
    routes: {
      '(/)': function () {
        app.router.v.main.setView('#content', new PageView());
        app.router.v.main.render();
      }
    }
  });

  return {
    id: 'activity-graph',
    title: 'Activity Graph',
    Router: Router
  }
});
