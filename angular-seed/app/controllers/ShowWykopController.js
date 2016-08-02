/**
 * Created by Kacper Włodarczyk on 2016-07-27.
 */
(function (window) {
    'use strict';

    window.myApp.controller('ShowWykopController', ['$scope', 'restService', '$log', '$routeParams', '$location', '$route', function ($scope, restService, $log, $routeParams, $location, $route) {
        var vm = this;
        vm.id = $routeParams.id;

        vm.getData = getData;
        vm.removeData = removeData;
        vm.updateData = updateData;

        function getData () {
            restService.get('wykopy/' + vm.id)
                .then(function (resp) {
                    vm.collection = resp.data;
                    vm.title = vm.collection.title;
                    vm.subtitle = vm.collection.subtitle;
                    vm.content = vm.collection.content;
                    vm.date = vm.collection.date;
                    vm.image = vm.collection.image;
                })
        }

        function removeData (wykopy, id) {
            restService.remove('wykopy', vm.id);
            $location.url('/');

            $route.reload();
        }

        function updateData () {
            $location.url('comments/' + vm.id)
        }
        
        vm.getData();
    }])
})(window);