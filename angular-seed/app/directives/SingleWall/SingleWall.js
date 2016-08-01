/**
 * Created by Kacper Włodarczyk on 2016-07-21.
 */
(function (window) {
    'use strict';

    window.myApp.directive('singleWall', function () {
        return{
            templateUrl: 'directives/SingleWall/singleWall.html',
            controller: 'MainController',
            controllerAs: 'vm'
        };
    })

})(window);
