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
            .when('/comments/:id', {
                templateUrl: '/views/comments.html',
                controller: 'CommentsController',
                controllerAs: 'vm'
            })
            .when('/wykopy/:id', {
                templateUrl: '/views/showWykop.html',
                controller: 'ShowWykopController',
                controllerAs: 'vm'
            })
            .when('/userProfile', {
                templateUrl: '/views/userProfile.html',
                controller: 'UserProfileController',
                controllerAs: 'vm'
            })
            .when('/newMicroblog', {
                templateUrl: '/views/newMicroblog.html',
                controller: 'NewMicroblogController',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'});
    }]);
})(window);