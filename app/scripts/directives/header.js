(function (angular) {
  'use strict';

  angular.module('angularWebApp')
    .directive('header', function () {
      return {
        templateUrl: 'views/header.html',
        restrict: 'A'
      };
    });
}(angular));