(function (angular) {
  'use strict';

  angular.module('angularWebApp')
    .directive('footer', function () {
      return {
        templateUrl: 'views/footer.html',
        restrict: 'A'
      };
    });
}(angular));