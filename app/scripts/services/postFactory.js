'use strict';

angular.module('angularWebApp')
    .factory('postFactory', ['$resource', function ($resource) {
        // Service logic
        // ...

        var meaningOfLife = 42;

        // Public API here
        return {
            someMethod: function () {
                return meaningOfLife;
            }
        };
    }]);
