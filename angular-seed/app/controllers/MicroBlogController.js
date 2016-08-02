/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */
/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */
(function (window) {

    window.myApp.controller('MicroblogController', ['$scope', 'restService', '$route', function ($scope, restService, $route) {

        // var vm = this;

        var vm = this;

        vm.removeData = removeData;

        restService.get('mikroblog')
            .then(function (resp) {
                vm.collection = resp.data;
                resp.data.reverse();
            })
            .catch(function () {
                vm.collection = [];
            });

        function removeData (mikroblog) {
            restService.remove('mikroblog', mikroblog.id);
            $route.reload();

        }
    }])
})(window);