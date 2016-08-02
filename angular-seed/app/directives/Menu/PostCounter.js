/**
 * Created by Kacper Włodarczyk on 2016-07-21.
 */
(function (window) {
    'use strict';

    window.myApp.directive('postCounter', function () {
        return {
            templateUrl: 'directives/Menu/menu.html',
            controller: 'PostCounterController',
            controllerAs: 'vm'
        };
    })

})(window);