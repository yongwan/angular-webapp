(function (angular) {
  'use strict';

  angular.module('angularWebApp')
    .controller('ArchiveCtrl', ['$scope',
      function ($scope) {
        $scope.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];
      }]);
}(angular));