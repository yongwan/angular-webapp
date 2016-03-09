(function (angular) {
  'use strict';

  angular.module('angularWebApp')
    .controller('ArchiveCtrl', ['$scope', '$filter', 'pageFactory',
      function ($scope, $filter, pageFactory) {
        pageFactory.get(function (response) {
          var posts = response.posts.map(function (post) {
            post.year = $filter('date')(post.date, 'yyyy');
            post.month = $filter('date')(post.date, 'MMMM');
            return post;
          });

          $scope.posts = posts;
        })
      }]);
}(angular));