(function (angular) {
    'use strict';

    angular.module('angularWebApp')
      .controller('MainCtrl', function ($scope) {
          $scope.site = {
              title: '/* LIFE RUNS ON CODE */',
              author: {
                  name: 'YongWan Jo',
                  github: 'yongwan',
                  twitter: 'yongwany',
                  facebook: 'yongwan.jo'
              }
          };

          $scope.navs = [
              {
                  url: '/archive',
                  title: 'Archive'
              },
              {
                  url: '/categories',
                  title: 'Categories'
              },
              {
                  url: '/tags',
                  title: 'Tags'
              }
          ];

          $scope.page = {
              title: 'Page Title',
              tagline: 'Page Tagline'
          };


          $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
          ];
      });
}(angular));