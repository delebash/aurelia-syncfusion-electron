export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      //Add the router configuration for Grid sample here
      { route: 'grid',          name: 'grid',         moduleId: 'samples/grid/grid', nav: true, title: 'Grid' }
    ]);

    this.router = router;
  }
}
