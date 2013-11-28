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
                templateUrl: 'views/post.html',
                controller: 'PostCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
}(angular));