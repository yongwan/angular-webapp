(function (angular) {
    'use strict';

    angular.module('angularWebApp')
        .controller('MainCtrl',
            ['$scope', 'appConstant',
            function ($scope, appConstant) {
                $scope.site = appConstant.site;

                $scope.navs = appConstant.navs;

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