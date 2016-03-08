(function (angular) {
  'use strict';

  angular.module('angularWebApp')
    .controller('SiteCtrl', ['$scope', 'siteFactory', 'pageFactory',
  function ($scope, siteFactory, pageFactory) {
    $scope.isCollapsed = true;
    $scope.$on('$routeChangeSuccess', function () {
      $scope.isCollapsed = true;
    });

    siteFactory.get(function (response) {
      $scope.site = response;
    });

    pageFactory.get(function (response) {
      $scope.page = {};
      $scope.page.posts = response.posts;
      $scope.page.maxSize = 5;
    })
  }]);
}(angular));