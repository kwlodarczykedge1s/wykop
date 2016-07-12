/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */
(function (window) {

    'use strict';

    window.myApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/', {
                templateUrl: '/views/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .when('/articles', {
                templateUrl: 'views/articles.html',
                controller: 'ArticlesController',
                controllerAs: 'vm'
            })
            .when('/microblog', {
                templateUrl: '/views/microblog.html',
                controller: 'MicroblogController',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'});
    }]);
})(window);