'use strict';

angular.module('angularWebApp')
    .factory('postFactory', ['$http', '$routeParams', function ($http, $routeParams) {
        return {
            get: function (callback) {
                return $http.get('/posts/' + $routeParams.year + '-' + $routeParams.month + '-' + $routeParams.day + '-' + $routeParams.title + '.md').success(function (data) {
                    var markdown = /---([\s\S]*)---([\s\S]*)/.exec(data);
                    
                    marked(markdown[2], function (err, content) {
                        callback(content);
                    });
                });
            }
        };
    }]);
