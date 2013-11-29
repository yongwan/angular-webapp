(function (angular) {
    'use strict';

    angular.module('angularWebApp')
        .controller('PostCtrl',
            ['$scope', 'postFactory',
            function ($scope, postFactory) {
                $scope.page = {
                    title: 'Post Title',
                    tagline: 'Post TagLine'
                };
                
                postFactory.get(function (response) {
                    $scope.page.content = response;
                });
            }]);
}(angular));
