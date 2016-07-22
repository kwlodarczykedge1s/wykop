/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */

(function (window) {

    window.myApp.controller('MainController', ['$scope', 'restService', '$location', function ($scope, restService, $location) {

        var vm = this;
        restService.get('wykopy')
            .then(function (resp) {
                vm.collection = resp.data;
                resp.data.reverse();

                vm.wykopCount = resp.data.length;
                console.log(vm.wykopCount);

            })
            .catch(function () {
                vm.collection = [];
            });

        vm.addPoint = function (id) {
            console.log(id);

            restService.put('wykopy', id);
        };

        vm.ddd = function (id) {
            // debugger
            // console.log(id);
            //
            // restService.put('wykopy', id);
            $location.url('comments/'+id)
        };

        $scope.removeData = function (wykopy) {
            restService.remove('wykopy', wykopy.id)
                .then(function () {
                    vm.data = resp.data;
                    console.log(vm.data);
                })
        }
    }])
})(window);