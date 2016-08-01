/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */

(function (window) {

    window.myApp.controller('MainController', ['$scope', 'restService', '$location', '$route', '$interval', function ($scope, restService, $location, $route, $interval) {

        var vm = this;
        vm.score = 0;


        vm.getData = function () {
            restService.get('wykopy')
                .then(function (resp) {
                    vm.collection = resp.data;
                    resp.data.reverse();

                    vm.wykopCount = resp.data.length;

                })
                .catch(function () {
                    vm.collection = [];
                });
        };

        vm.getData();

        vm.addPoint = function (id) {
            console.log(id);
            restService.put('wykopy', id);
        };

        vm.comments = function (id) {
            $location.url('comments/' + id)
        };

        $scope.removeData = function (wykopy) {
            restService.remove('wykopy', wykopy.id)
            $route.reload();

        };

        vm.showWykop = function (id) {
            $location.url('wykopy/' + id)
        };

        vm.incrementScore = function (id, obj) {
            obj.score += 1;

            restService.put('wykopy/' + id, obj).then(function () {
                vm.getData();
            })
        };

        vm.decrementScore = function (id, obj) {
            obj.score -= 1;

            restService.put('wykopy/' + id, obj).then(function () {
                vm.getData();
            });
        };
    }])
})(window);