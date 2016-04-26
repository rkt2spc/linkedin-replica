//Initialize

var linkedInApp = angular.module('linkedInApp', [
  'ngRoute',
  'appControllers'
]);

linkedInApp.config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'partials/main.html',
                controller: 'mainController'
            })
            // .when('/main/:someId', {
            //     templateUrl: 'partials/detail.html',
            //     controller: 'detailController'
            // })
            .otherwise({
                redirectTo: '/main'
            });
}]);