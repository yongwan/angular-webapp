(function (angular) {
  'use strict';

  angular.module('angularWebApp')
    .factory('pageFactory', ['$http', function ($http) {
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