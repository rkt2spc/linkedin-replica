/**
 * Created by nmtuan on 28-Apr-16.
 */
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
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'loginController'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }]);