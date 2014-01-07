(function (angular) {
  'use strict';

  angular.module('angularWebApp')
    .controller('PostCtrl', ['$scope', 'postFactory',
      function ($scope, postFactory) {
        postFactory.get(function (response) {
          $scope.page = response;
        });
      }]);
}(angular));
