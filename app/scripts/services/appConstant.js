(function (angular) {
    'use strict';

    angular.module('angularWebApp')
        .constant('appConstant', {
            site: {
                title: '/* LIFE RUNS ON CODE */',
                author: {
                    name: 'YongWan Jo',
                    github: 'yongwan',
                    twitter: 'yongwany',
                    facebook: 'yongwan.jo'
                }
            },
            navs: [
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
            ]
        });
}(angular));