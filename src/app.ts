import { RouterConfiguration, Router } from 'aurelia-router';
import * as moment from "moment";

export class App {

  router = <any>Router;
  
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';
    config.options.pushState = true;
    config.options.hashChange = false;
    config.map([
      { route: ['', 'main'], name: 'main', moduleId: 'components/main/main', nav: true, title: 'Main' },
      { route: 'weather', name: 'weather', moduleId: 'components/weather/weather', nav: true, title: 'Weather' },
    ]);
  }
  message = 'Hello World!';
}




