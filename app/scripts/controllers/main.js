(function (angular) {
    'use strict';

    angular.module('angularWebApp').controller('MainCtrl',
        ['$scope', 'appConstants',
        function ($scope, appConstants) {
            $scope.site = appConstants.site;

            $scope.navs = appConstants.navs;

            $scope.page = {
                title: 'Page Title',
                tagline: 'Page Tagline'
            };

            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }]);
}(angular));