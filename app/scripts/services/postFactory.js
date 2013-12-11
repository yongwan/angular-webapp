'use strict';

angular.module('angularWebApp')
    .factory('postFactory', ['$http', '$routeParams', '$filter', function ($http, $routeParams, $filter) {
        return {
            get: function (callback) {
                var date = $routeParams.year + '-' + $routeParams.month + '-' + $routeParams.day;

                return $http.get('/posts/' + date + '-' + $routeParams.title + '.md').success(function (data) {
                    var markdown = /---([\s\S]*)---([\s\S]*)/.exec(data);
                    var result = jsyaml.load(markdown[1]);
                    result.postDate = $filter('date')(date, 'longDate');
                    marked(markdown[2], function (err, content) {
                        result.content = content;
                    });

                    callback(result);
                });
            }
        };
    }]);
