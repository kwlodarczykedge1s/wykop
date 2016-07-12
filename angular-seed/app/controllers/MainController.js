/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */

(function (window) {

    window.myApp.controller('MainController', ['$scope', 'restService', function ($scope, restService) {

        var vm = this;
        restService.get('wykopy')
            .then(function (resp) {
                vm.collection = resp.data;
                resp.data.reverse();
            })
            .catch(function () {
                vm.collection = [];
            });


        //
        $scope.removeData = function(wykopy){
            restService.remove('wykopy', wykopy.id)
                .then(function () {

                });
        };
    }])
})(window);