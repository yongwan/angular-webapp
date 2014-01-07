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
        controller: 'SiteCtrl'
      })
      .when('/archive', {
        templateUrl: 'views/archive.html',
        controller: 'ArchiveCtrl'
      })
      //.when('/categories', {
      //  templateUrl: 'views/categories.html',
      //  controller: 'MainCtrl'
      //})
      //.when('/tags', {
      //  templateUrl: 'views/tags.html',
      //  controller: 'MainCtrl'
      //})
      //.when('/about', {
      //  templateUrl: 'views/about.html',
      //  controller: 'MainCtrl'
      //})
      .when('/posts/:year/:month/:day/:title', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
}(angular));