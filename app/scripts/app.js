(function (angular) {
    'use strict';

    angular.module('angularWebApp', [
        'ngRoute',
        'ngCookies',
        'ngResource',
        'ngSanitize'
    ]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/posts/:year/:month/:day/:title', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
}(angular));