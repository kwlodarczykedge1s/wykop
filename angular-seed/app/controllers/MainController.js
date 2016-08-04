/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */

(function (window) {

    window.myApp.controller('MainController', ['$scope', 'restService', '$location', '$route', '$interval', function ($scope, restService, $location, $route) {

        var vm = this;
        vm.score = 0;

        vm.getData = getData;
        vm.addPoint = addPoint;
        vm.comments = comments;
        vm.removeData = removeData;
        vm.updateData = updateData;
        vm.showWykop = showWykop;
        vm.incrementScore = incrementScore;
        vm.decrementScore = decrementScore;
        vm.userProfile = userProfile;

        function getData () {
            restService.get('wykopy')
                .then(function (resp) {
                    vm.collection = resp.data;
                    resp.data.reverse();
                    vm.wykopCount = resp.data.length;
                })
                .catch(function () {
                    vm.collection = [];
                });
        }

        vm.getData();

        function addPoint (id) {
            console.log(id);
            restService.put('wykopy', id);
        }

        function comments (id) {
            $location.url('comments/' + id)
        };

        function removeData (wykopy) {
            restService.remove('wykopy', wykopy.id);
            $route.reload();

        }

        function updateData (id) {
            $location.url('comments/' + id)
        }

        function showWykop (id) {
            $location.url('wykopy/' + id)
        }

        function incrementScore (id, obj) {
            obj.score += 1;
            restService.put('wykopy/' + id, obj).then(function () {
                vm.getData();
            })
        }
        
        function decrementScore (id, obj) {
            obj.score -= 1;
            restService.put('wykopy/' + id, obj).then(function () {
                vm.getData();
            });
        }

        function userProfile () {
            $location.url('/userProfile');
        }
    }])
})(window);