(function (angular) {
  'use strict';

  angular.module('angularWebApp')
    .factory('postFactory', ['$http', '$routeParams', '$filter', function ($http, $routeParams, $filter) {
      return {
        get: function (callback) {
          var year = $routeParams.year;
          var date = year + '-' + $routeParams.month + '-' + $routeParams.day;
          var post = date + '-' + $routeParams.title + '.md'

          return $http.get('/posts/' + year + '/' + post).success(function (data) {
            var markdown = /---([\s\S]*)---([\s\S]*)/.exec(data);

            // Read yaml using jsyaml
            var result = jsyaml.load(markdown[1]);
            result.date = date;
            result.content = markdown[2];

            callback(result);
          });
        }
      };
    }]);
}(angular));