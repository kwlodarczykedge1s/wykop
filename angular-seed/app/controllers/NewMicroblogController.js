(function (window) {
    'use strict';

    window.myApp.controller('NewMicroblogController', ['$http', '$timeout', '$log', '$location', 'restService', function ($http, $timeout, $log, $location, restService) {
        var vm = this;
        var time = moment();

        vm.author = 'Kacper';
        vm.score = 0;
        vm.showDate = time.format('L');
        vm.dangerAlert = false;
        vm.successAlert = false;

        vm.addNewMicroblog = addNewMicroblog;

        function addNewMicroblog() {

            vm.showDate = time.format('L');
            restService.post('mikroblog', {
                    'image': vm.url,
                    'content': vm.content,
                    'author': vm.author,
                    'date': vm.showDate,
                    'score': vm.score
                })
                .then(function () {

                    vm.successAlert = true;

                    $timeout(function () {
                        vm.successAlert = false;
                    }, 2000);
                    $timeout(function () {
                        $location.url('/microblog');
                    }, 3000);
                })
                .catch(function () {
                    $log.error('form has not been sent');
                    vm.dangerAlert = true;
                    $timeout(function () {
                        vm.dangerAlert = false;
                    }, 3000);
                });
        }

    }])
})(window);