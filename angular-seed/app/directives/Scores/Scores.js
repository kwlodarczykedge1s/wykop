/**
 * Created by Kacper Włodarczyk on 2016-07-08.
 */
(function (window) {
    'use strict';

    window.myApp.directive('scoresUpdate', function () {
        return{
            templateUrl: 'directives/Scores/ScoresUpdate.html',
            controller: 'ScoresUpdate',
            controllerAs: 'vm'
        };
    })

})(window);