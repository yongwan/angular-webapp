(function (angular) {
  'use strict';

  angular.module('angularWebApp')
    .controller('PostCtrl', ['$scope', '$location', 'filterFilter', 'postFactory', 'pageFactory',
  function ($scope, $location, filterFilter, postFactory, pageFactory) {
    postFactory.get(function (response) {
      $scope.post = response;
    });

    pageFactory.get(function (response) {
      $scope.page = {};
      $scope.page.posts = response.posts;
      $scope.page.itemsPerPage = 1;
      $scope.page.currentPage = $scope.page.posts.indexOf(filterFilter($scope.page.posts, $location.path())[0]) + 1;
      $scope.page.maxSize = 5;
    })

    $scope.pageChanged = function () {
      $location.path($scope.page.posts[$scope.page.currentPage - 1].url);
    };
  }]);
}(angular));
