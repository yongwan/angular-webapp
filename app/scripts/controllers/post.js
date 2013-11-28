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

                $scope.awesomeThings = [
                    'POST 1',
                    'POST 2',
                    'POST 3'
                ];

                postFactory.get({responseType: 'text'}, function (response) {
                    $scope.awesomeThings.push(response);
                }, function (error) {
                    // $scope.awesomeThings.push(error);
                });
            }]);
}(angular));
