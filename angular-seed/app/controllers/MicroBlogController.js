/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */
/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */
(function (window) {

    window.myApp.controller('MicroblogController', ['$scope', 'restService', '$route', '$location', function ($scope, restService, $route, $location) {

        var vm = this;
        
        vm.incrementScore = incrementScore;
        vm.decrementScore = decrementScore;
        vm.removeData = removeData;
        vm.userProfile = userProfile;

        restService.get('mikroblog')
            .then(function (resp) {
                vm.collection = resp.data;
                resp.data.reverse();
            })
            .catch(function () {
                vm.collection = [];
            });

        function removeData(mikroblog) {
            restService.remove('mikroblog', mikroblog.id);
            $route.reload();
        }

        function userProfile () {
            $location.url('/userProfile');
        }

        function incrementScore(id, obj) {
            obj.score += 1;
            restService.put('mikroblog/' + id, obj).then(function () {
            })
        }

        function decrementScore(id, obj) {
            obj.score -= 1;
            restService.put('mikroblog/' + id, obj).then(function () {
            });
        }
    }])
})(window);