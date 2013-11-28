(function (angular) {
    'use strict';

    angular.module('angularWebApp')
        .controller('PostCtrl',
            ['$scope',
            function ($scope) {
                $scope.page = {
                    title: 'Post Title',
                    tagline: 'Post TagLine'
                };

                $scope.awesomeThings = [
                    'POST 1',
                    'POST 2',
                    'POST 3'
                ];
            }]);
}(angular));
