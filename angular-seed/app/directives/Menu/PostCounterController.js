/**
 * Created by Kacper Włodarczyk on 2016-07-21.
 */
(function (window) {
    'use strict';

    window.myApp.controller('PostCounterController', ['$scope', 'restService', '$interval', function ($scope, restService, $interval) {

        var vm = this;
        $interval(function () {
            restService.get('wykopy')
                .then(function (resp) {
                    vm.wykopLenght = resp.data.length;
                });
            restService.get('mikroblog')
                .then(function (resp) {
                    vm.microblogLenght = resp.data.length;
                });
        }, 1000);
    }]);

})(window);
