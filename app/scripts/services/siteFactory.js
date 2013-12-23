(function (angular) {
  'use strict';

  angular.module('angularWebApp')
    .factory('siteFactory', ['$http', function ($http) {
      var configUrl = '/_config.yml';
      return {
        get: function (callback) {
          return $http.get(configUrl).success(function (data) {
            var result = jsyaml.load(data);
            callback(result);
          });
        }
      };
    }]);
}(angular));