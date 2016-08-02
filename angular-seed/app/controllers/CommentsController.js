/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */

(function (window) {
    'use strict';

    window.myApp.controller('CommentsController', ['$scope', 'restService', '$routeParams', '$timeout', '$location', function ($scope, restService, $routeParams, $timeout, $location) {

        var vm = this;

        vm.id = $routeParams.id;
        vm.dangerAlert = false;
        vm.successAlert = false;

        vm.getData = function () {
            restService.get('wykopy/' + vm.id)
                .then(function (resp) {
                    vm.collection = resp.data;
                    vm.dataJson = {
                        title: vm.collection.title,
                        subtitle: vm.collection.subtitle,
                        content: vm.collection.content,
                        image: vm.collection.image,
                        author: vm.collection.author,
                        date: vm.collection.date,
                        score: vm.collection.score
                    };

                })
        };

        vm.updateData = function () {
            restService.put('wykopy/' + vm.id, {
                    id: vm.id,
                    title: vm.dataJson.title,
                    subtitle: vm.dataJson.subtitle,
                    content: vm.dataJson.content,
                    image: vm.dataJson.image,
                    author: vm.dataJson.author,
                    date: vm.dataJson.date,
                    score: vm.dataJson.score
                })
                .then(function () {
                    vm.successAlert = true;

                    var timeout = $timeout(function () {
                        vm.successAlert = false;
                    }, 3000);

                    var goToLocation = $timeout(function () {
                        $location.url('/');
                    }, 4000);
                })
                .catch(function () {
                    vm.dangerAlert = true;
                    var timeout = $timeout(function () {
                        vm.dangerAlert = false;
                    }, 3000);
                });
        };

        console.log(vm.id);
        vm.getData();

    }])
})(window);
/**
 * Created by Kacper Włodarczyk on 2016-07-22.
 */
