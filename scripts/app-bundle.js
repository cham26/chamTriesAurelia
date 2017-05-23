define('app',["require", "exports", "aurelia-router"], function (require, exports, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.router = aurelia_router_1.Router;
            this.message = 'Hello World!';
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Aurelia';
            config.options.pushState = true;
            config.options.hashChange = false;
            config.map([
                { route: ['', 'main'], name: 'main', moduleId: 'components/main/main', nav: true, title: 'Main' },
                { route: 'weather', name: 'weather', moduleId: 'components/weather/weather', nav: true, title: 'Weather' },
            ]);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUFBO1lBRUUsV0FBTSxHQUFRLHVCQUFNLENBQUM7WUFZckIsWUFBTyxHQUFHLGNBQWMsQ0FBQztRQUMzQixDQUFDO1FBWEMsNkJBQWUsR0FBZixVQUFnQixNQUEyQixFQUFFLE1BQWM7WUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUNsQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtnQkFDakcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTthQUMzRyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUgsVUFBQztJQUFELENBZkEsQUFlQyxJQUFBO0lBZlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyQ29uZmlndXJhdGlvbiwgUm91dGVyIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG5cbiAgcm91dGVyID0gPGFueT5Sb3V0ZXI7XG4gIFxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcik6IHZvaWQge1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcbiAgICBjb25maWcub3B0aW9ucy5wdXNoU3RhdGUgPSB0cnVlO1xuICAgIGNvbmZpZy5vcHRpb25zLmhhc2hDaGFuZ2UgPSBmYWxzZTtcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6IFsnJywgJ21haW4nXSwgbmFtZTogJ21haW4nLCBtb2R1bGVJZDogJ2NvbXBvbmVudHMvbWFpbi9tYWluJywgbmF2OiB0cnVlLCB0aXRsZTogJ01haW4nIH0sXG4gICAgICB7IHJvdXRlOiAnd2VhdGhlcicsIG5hbWU6ICd3ZWF0aGVyJywgbW9kdWxlSWQ6ICdjb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlcicsIG5hdjogdHJ1ZSwgdGl0bGU6ICdXZWF0aGVyJyB9LFxuICAgIF0pO1xuICB9XG4gIG1lc3NhZ2UgPSAnSGVsbG8gV29ybGQhJztcbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin('aurelia-validation')
            .plugin('aurelia-ux')
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsTUFBTSxDQUFDLG9CQUFvQixDQUFDO2FBQzVCLE1BQU0sQ0FBQyxZQUFZLENBQUM7YUFDcEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBaEJELDhCQWdCQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLnBsdWdpbignYXVyZWxpYS12YWxpZGF0aW9uJylcbiAgICAucGx1Z2luKCdhdXJlbGlhLXV4JylcbiAgICAuZmVhdHVyZSgncmVzb3VyY2VzJyk7XG5cbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIH1cblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('converters/date',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateFormatValueConverter = (function () {
        function DateFormatValueConverter() {
        }
        DateFormatValueConverter.prototype.toView = function (value) {
            var parsedDate = value.substring(0, 10).split('-');
            return parsedDate[1] + "/" + parsedDate[2] + "/" + parsedDate[0];
        };
        return DateFormatValueConverter;
    }());
    exports.DateFormatValueConverter = DateFormatValueConverter;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnRlcnMvZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBS0EsQ0FBQztRQUpFLHlDQUFNLEdBQU4sVUFBTyxLQUFhO1lBQ2pCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsRCxNQUFNLENBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBSSxVQUFVLENBQUMsQ0FBQyxDQUFHLENBQUE7UUFDOUQsQ0FBQztRQUNKLCtCQUFDO0lBQUQsQ0FMQSxBQUtDLElBQUE7SUFMWSw0REFBd0IiLCJmaWxlIjoiY29udmVydGVycy9kYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRWYWx1ZUNvbnZlcnRlciB7XG4gICB0b1ZpZXcodmFsdWU6IHN0cmluZykge1xuICAgICAgbGV0IHBhcnNlZERhdGUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgMTApLnNwbGl0KCctJylcbiAgICAgIHJldHVybiBgJHtwYXJzZWREYXRlWzFdfS8ke3BhcnNlZERhdGVbMl19LyR7cGFyc2VkRGF0ZVswXX1gXG4gICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('services/weather.resource',["require", "exports", "aurelia-fetch-client"], function (require, exports, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WeatherResource = (function () {
        function WeatherResource() {
            this.http = new aurelia_fetch_client_1.HttpClient().configure(function (x) {
                x.useStandardConfiguration();
            });
        }
        WeatherResource.prototype.getWeather = function (id) {
            var url = "http://www.json-generator.com/api/json/get/" + id + "?indent=2";
            return this.http.fetch(url)
                .then(function (data) { return data.json(); });
        };
        WeatherResource.prototype.example = function () {
            var a = 'hi';
            var b = parseInt(a);
            console.log('hi');
        };
        return WeatherResource;
    }());
    exports.WeatherResource = WeatherResource;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3dlYXRoZXIucmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFJRTtZQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQ0FBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLHdCQUF3QixFQUFFLENBQUE7WUFDOUIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBRUQsb0NBQVUsR0FBVixVQUFXLEVBQUU7WUFDVixJQUFJLEdBQUcsR0FBRyxnREFBOEMsRUFBRSxjQUFXLENBQUE7WUFDdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztpQkFDeEIsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFBO1FBQzlCLENBQUM7UUFFRCxpQ0FBTyxHQUFQO1lBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFBO1lBQ1osSUFBSSxDQUFDLEdBQVcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkIsQ0FBQztRQUNILHNCQUFDO0lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtJQXJCWSwwQ0FBZSIsImZpbGUiOiJzZXJ2aWNlcy93ZWF0aGVyLnJlc291cmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcblxuZXhwb3J0IGNsYXNzIFdlYXRoZXJSZXNvdXJjZSB7XG5cbiAgaHR0cDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5odHRwID0gbmV3IEh0dHBDbGllbnQoKS5jb25maWd1cmUoeCA9PiB7XG4gICAgICB4LnVzZVN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgfSlcbiAgfVxuXG4gIGdldFdlYXRoZXIoaWQpOiBQcm9taXNlPE9iamVjdFtdPiB7XG4gICAgIGxldCB1cmwgPSBgaHR0cDovL3d3dy5qc29uLWdlbmVyYXRvci5jb20vYXBpL2pzb24vZ2V0LyR7aWR9P2luZGVudD0yYFxuICAgIHJldHVybiB0aGlzLmh0dHAuZmV0Y2godXJsKVxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcbiAgfVxuXG4gIGV4YW1wbGUoKTogdm9pZCB7XG4gICAgbGV0IGEgPSAnaGknXG4gICAgbGV0IGI6IG51bWJlciA9IHBhcnNlSW50KGEpO1xuICAgIGNvbnNvbGUubG9nKCdoaScpXG4gIH1cbn0gXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('components/footer/footer',["require", "exports", "moment"], function (require, exports, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var footerCustomElement = (function () {
        function footerCustomElement() {
            this.today = moment().format('MM/DD/YYYY');
        }
        return footerCustomElement;
    }());
    exports.footerCustomElement = footerCustomElement;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUdJO1lBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNMLDBCQUFDO0lBQUQsQ0FOQSxBQU1DLElBQUE7SUFOWSxrREFBbUIiLCJmaWxlIjoiY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBmb290ZXJDdXN0b21FbGVtZW50IHtcclxuXHJcbiAgICB0b2RheTogc3RyaW5nXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdNTS9ERC9ZWVlZJyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('components/main/main',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Main = (function () {
        function Main() {
        }
        return Main;
    }());
    exports.Main = Main;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFFQSxDQUFDO1FBQUQsV0FBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksb0JBQUkiLCJmaWxlIjoiY29tcG9uZW50cy9tYWluL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWFpbiB7XG4gIFxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/weather/weather',["require", "exports", "../../services/weather.resource", "aurelia-framework"], function (require, exports, weather_resource_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Weather = (function () {
        function Weather(weatherResource) {
            this.weatherResource = weatherResource;
            this.callWeatherService('cdOhDWyEfC');
        }
        Weather.prototype.callWeatherService = function (buttonName) {
            var _this = this;
            this.gettingData = true;
            this.weatherResource.getWeather(buttonName)
                .then(function (response) {
                _this.weatherData = response;
                _this.gettingData = false;
            });
        };
        Weather.prototype.splittedPhoneNumber = function (phoneNumber) {
            return phoneNumber.substring(9);
        };
        Weather.prototype.roundedOffBalance = function (roundedBalance) {
            return roundedBalance.slice(0, -3);
        };
        Weather.prototype.mailToPerson = function (email) {
            return "mailto:" + email;
        };
        return Weather;
    }());
    Weather = __decorate([
        aurelia_framework_1.inject(weather_resource_1.WeatherResource),
        __metadata("design:paramtypes", [weather_resource_1.WeatherResource])
    ], Weather);
    exports.Weather = Weather;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBLElBQWEsT0FBTztRQUdsQixpQkFBb0IsZUFBZ0M7WUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsb0NBQWtCLEdBQWxCLFVBQW1CLFVBQVU7WUFBN0IsaUJBUUM7WUFQQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7aUJBQ3hDLElBQUksQ0FBQyxVQUFDLFFBQVE7Z0JBQ2IsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUE7Z0JBQzNCLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFBO1FBRU4sQ0FBQztRQUVELHFDQUFtQixHQUFuQixVQUFvQixXQUFXO1lBQzdCLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFRCxtQ0FBaUIsR0FBakIsVUFBa0IsY0FBYztZQUk5QixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUV0QyxDQUFDO1FBRUMsOEJBQVksR0FBWixVQUFhLEtBQUs7WUFDaEIsTUFBTSxDQUFDLFlBQVUsS0FBTyxDQUFBO1FBQzFCLENBQUM7UUFDSCxjQUFDO0lBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtJQWhDWSxPQUFPO1FBRG5CLDBCQUFNLENBQUMsa0NBQWUsQ0FBQzt5Q0FJZSxrQ0FBZTtPQUh6QyxPQUFPLENBZ0NuQjtJQWhDWSwwQkFBTyIsImZpbGUiOiJjb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYXRoZXJSZXNvdXJjZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dlYXRoZXIucmVzb3VyY2UnO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuQGluamVjdChXZWF0aGVyUmVzb3VyY2UpXG5leHBvcnQgY2xhc3MgV2VhdGhlciB7XG4gIHdlYXRoZXJEYXRhOiBPYmplY3RbXTtcbiAgZ2V0dGluZ0RhdGE6IEJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2VhdGhlclJlc291cmNlOiBXZWF0aGVyUmVzb3VyY2UpIHtcbiAgICB0aGlzLmNhbGxXZWF0aGVyU2VydmljZSgnY2RPaERXeUVmQycpO1xuICB9XG5cbiAgY2FsbFdlYXRoZXJTZXJ2aWNlKGJ1dHRvbk5hbWUpIHtcbiAgICB0aGlzLmdldHRpbmdEYXRhID0gdHJ1ZTtcbiAgICB0aGlzLndlYXRoZXJSZXNvdXJjZS5nZXRXZWF0aGVyKGJ1dHRvbk5hbWUpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy53ZWF0aGVyRGF0YSA9IHJlc3BvbnNlXG4gICAgICAgIHRoaXMuZ2V0dGluZ0RhdGEgPSBmYWxzZTtcbiAgICAgIH0pXG5cbiAgfVxuXG4gIHNwbGl0dGVkUGhvbmVOdW1iZXIocGhvbmVOdW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBwaG9uZU51bWJlci5zdWJzdHJpbmcoOSk7IC8vIHRvIHJlbW92ZSBjb2RlXG4gIH1cblxuICByb3VuZGVkT2ZmQmFsYW5jZShyb3VuZGVkQmFsYW5jZSk6IHN0cmluZyB7XG4gICAgLy8gbGV0IHRlc3QgID0gcm91bmRlZEJhbGFuY2Uuc3Vic3RyaW5nKDEsIHJvdW5kZWRCYWxhbmNlLmxlbmd0aCAtMylcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXN0LnNwbGl0KCcsJykuam9pbignJykpXG4gICAgLy8gcmV0dXJuIHJvdW5kZWRCYWxhbmNlLnN1YnN0cmluZygwLCByb3VuZGVkQmFsYW5jZS5sZW5ndGggLTMpOyAvLyBzdHJpbmcgbWV0aG9kIG9uZVxuICAgIHJldHVybiByb3VuZGVkQmFsYW5jZS5zbGljZSgwLCAtMykgLy8gc2xpY2Ugd29ya3Mgd2l0aCBtaW51cyBpbmRleCB2YWx1ZXNcbiAgICAvLyByZXR1cm4gIGAkICR7cm91bmRlZEJhbGFuY2Uuc3Vic3RyaW5nKDEsIHJvdW5kZWRCYWxhbmNlLmxlbmd0aCAtMykuc3BsaXQoJywnKS5qb2luKCcuJyl9YCAgLy8gc3R1cGlkIHdheSBkb250IGRvIGl0IGp1c3QgdG8gc2hvdyB3aGF0IGhhcHBlbnNcbn1cblxuICBtYWlsVG9QZXJzb24oZW1haWwpOiBzdHJpbmcge1xuICAgIHJldHVybiBgbWFpbHRvOiR7ZW1haWx9YFxuICB9XG59XG5cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"./components/navbar/navbar.html\"></require>\n  <require from=\"./components/footer/footer\"></require>\n\n  <i class=\"fa fa-car\"></i>\n<i class=\"fa fa-car\" style=\"font-size:48px;\"></i>\n<i class=\"fa fa-car\" style=\"font-size:60px;color:red;\"></i>\n  \n  <navbar navigation.bind=\"router.navigation\"  is-navigating.bind=\"router.isNavigating\"></navbar>\n  <router-view></router-view>\n  <footer></footer>\n</template>"; });
define('text!styles/styles.css', ['module'], function(module) { module.exports = ".footer1 {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  line-height: 60px;\n  /* Vertically center the text there */\n  background-color: #808080; }\n"; });
define('text!components/footer/footer.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"../../styles/styles.css\" as=\"scoped\"></require>\r\n    <div class=\"footer1\">\r\n        <div class=\"container\">\r\n            <p class=\"text-center\">${today}</p>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!components/main/main.html', ['module'], function(module) { module.exports = "<template>\n  <h1>Welcome to Home Page</h1>\n</template>"; });
define('text!components/navbar/navbar.html', ['module'], function(module) { module.exports = "<template bindable=\"navigation, isNavigating\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"/\">Welcome ${router}</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li  class.bind=\"row.isActive ? 'active' : ''\" repeat.for=\"row of navigation\">\n          <a href.bind= \"row.href\">${row.title}</a>\n        </li>\n      </ul>\n      <li class=\"loader\" if.bind=\"isNavigating\">\n           <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n         </li>\n         <!--<i class=\"fa fa-spinner fa-spin fa-2x\"></i>-->\n    </div>\n  </nav>\n</template>"; });
define('text!components/weather/weather.html', ['module'], function(module) { module.exports = "<template>\n  <require from = \"../../converters/date\"></require>\n  <button type=\"button\" class=\"btn btn-primary\" click.trigger=\"callWeatherService('clsYGkQcvC')\">Ivano-frankivsk</button>\n  <button type=\"button\" class=\"btn btn-primary\" click.trigger=\"callWeatherService('cdOhDWyEfC')\">Cebu City</button>\n  \n  <div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2\">\n            <div class=\"loader\" if.bind=\"gettingData\">\n           <i class=\"fa fa-spinner fa-spin fa-2x\" style=\"font-size:100px\"></i>\n         </div>\n <table class=\"table table-responsive\" if.bind = \"!gettingData\">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>COMPANY</th>\n        <th>EMAIL</th>\n        <th>ADDRESS</th>\n        <th>PHONE</th>\n        <th>REGISTERED DATE</th>\n        <th>BALANCE</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr repeat.for=\"data of weatherData\">\n        <td >${data.index}</td>\n        <td>${data.company}</td>\n        <td><a href.bind=\"mailToPerson(data.email)\">${data.email}</a></td>\n        <td>${data.address}</td>\n        <td>${splittedPhoneNumber(data.phone)}</td>\n        <td>${data.registered | dateFormat}</td>\n        <td>${roundedOffBalance(data.balance)}</td>\n      </tr>\n    </tbody>\n  </table>\n    </div>\n  </div>\n </template>"; });
//# sourceMappingURL=app-bundle.js.map