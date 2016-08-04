/**
 * Created by Kacper Włodarczyk on 2016-07-27.
 */
(function (window) {
    'use strict';

    window.myApp.controller('ShowWykopController', ['$scope', 'restService', '$log', '$routeParams', '$location', '$route', function ($scope, restService, $log, $routeParams, $location, $route) {
        var vm = this;
        var id = $routeParams.id;

        vm.getData = getData;
        vm.removeData = removeData;
        vm.updateData = updateData;
        vm.userProfile = userProfile;

        getData();

        function getData() {
            restService.get('wykopy/' + id)
                .then(function (resp) {
                    vm.collection = resp.data;
                    vm.title = vm.collection.title;
                    vm.subtitle = vm.collection.subtitle;
                    vm.content = vm.collection.content;
                    vm.date = vm.collection.date;
                    vm.image = vm.collection.image;
                })
        }

        function removeData() {
            restService.remove('wykopy', id);
            $location.url('/');
            $route.reload();
        }

        function updateData() {
            $location.url('comments/' + id)
        }


        function userProfile() {
            $location.url('/userProfile');
        }
    }])
})(window);