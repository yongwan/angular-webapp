'use strict';

angular.module('angularWebApp')
    .factory('postFactory', ['$http', '$routeParams', function ($http, $routeParams) {
        return {
            get: function (callback) {
                return $http.get('/posts/' + $routeParams.year + '-' + $routeParams.month + '-' + $routeParams.day + '-' + $routeParams.title + '.md').success(function (data) {
                    var markdown = /---([\s\S]*)---([\s\S]*)/.exec(data);

                    var result = jsyaml.load(markdown[1]);

                    marked(markdown[2], function (err, content) {
                        result.content = content;
                    });

                    callback(result);
                });
            }
        };
    }]);
