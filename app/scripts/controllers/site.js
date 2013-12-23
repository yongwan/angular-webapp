(function (angular) {
  'use strict';

  angular.module('angularWebApp')
    .controller('SiteCtrl',
      ['$scope', 'siteFactory',
      function ($scope, siteFactory) {
        siteFactory.get(function (response) {
          $scope.site = response;
        });
      }]);
}(angular));