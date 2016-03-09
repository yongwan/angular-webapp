(function (angular) {
  'use strict';

  angular.module('angularWebApp', [
    'ngRoute',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ui.bootstrap',
    'angular.filter',
    'hc.marked'
    //'mgcrea.ngStrap'
  ]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'SiteCtrl'
      })
      .when('/archive/:year?', {
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
  }]).config(['markedProvider', function (markedProvider) {
    markedProvider.setOptions({
      gfm: true,
      tables: true,
      highlight: function (code, lang) {
        if (lang) {
          return hljs.highlight(lang, code, true).value;
        } else {
          return hljs.highlightAuto(code).value;
        }
      }
    });
  }]);;
}(angular));