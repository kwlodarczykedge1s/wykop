/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */
/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */
(function (window) {

    window.myApp.controller('MicroblogController', ['$scope', 'restService', function ($scope, restService) {

        // var vm = this;

        var vm = this;
        restService.get('mikroblog')
            .then(function (resp) {
                vm.collection = resp.data;
                resp.data.reverse();
            })
            .catch(function () {
                vm.collection = [];
            });
        
    }])
})(window);