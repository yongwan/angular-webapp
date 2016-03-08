(function (angular) {
  'use strict';

  angular.module('angularWebApp')
    .factory('pageFactory', ['$http', '$routeParams', '$filter', function ($http, $routeParams, $filter) {
      var postsUrl = '/posts/pages.json';
      return {
        get: function (callback) {
          return $http.get(postsUrl).success(function (data) {
            callback(data);
          });
        }
      };
    }]);
}(angular));