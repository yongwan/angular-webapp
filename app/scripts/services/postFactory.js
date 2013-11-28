'use strict';

angular.module('angularWebApp')
    .factory('postFactory', ['$resource', '$routeParams' , function ($resource, $routeParams) {
        return $resource('/posts/:year-:month-:day-:title.md', {
            year: $routeParams.year,
            month: $routeParams.month,
            day: $routeParams.day,
            title: $routeParams.title,
        });
    }]);
