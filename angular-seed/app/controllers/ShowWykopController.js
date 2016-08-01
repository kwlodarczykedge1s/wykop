/**
 * Created by Kacper Włodarczyk on 2016-07-27.
 */
(function (window) {
    'use strict';

    window.myApp.controller('ShowWykopController', ['$scope', 'restService', '$log', '$routeParams', function ($scope, restService, $log, $routeParams ){
        var vm = this;
        vm.id = $routeParams.id;
        
        console.log(vm.id);

        vm.getE = function () {
            restService.get('wykopy/'+vm.id)
                .then(function (resp) {
                    vm.collection = resp.data;
                    vm.title = vm.collection.title;
                    vm.subtitle = vm.collection.subtitle;
                    vm.content = vm.collection.content;
                    vm.date = vm.collection.date;
                    vm.image = vm.collection.image;
                    vm.score = vm.collection.score;
                    console.log(vm.collection);
                })
        }

        vm.getE();
    }])
})(window);