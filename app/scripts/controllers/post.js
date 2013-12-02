(function (angular) {
    'use strict';

    angular.module('angularWebApp')
        .controller('PostCtrl',
            ['$scope', 'postFactory',
            function ($scope, postFactory) {
                postFactory.get(function (response) {
                    $scope.page.title = response.title;
                    $scope.page.tagline = response.tagline;
                    $scope.page.content = response.content;
                    $scope.page.tags = response.tags;
                    $scope.page.categories = response.categories;
                });
            }]);
}(angular));
