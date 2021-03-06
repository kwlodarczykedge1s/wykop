/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */
(function (window) {

    'use strict';
    window.myApp.controller('ArticlesController', ['$scope', 'restService', '$log', '$timeout', '$location', function ($scope, restService, $log, $timeout, $location) {
        var vm = this;
        var time = moment();

        vm.author = 'Kacper';
        vm.score = 0;
        vm.showDate = time.format('L');
        vm.dangerAlert = false;
        vm.successAlert = false;

        vm.addData = addData;
        
        function addData () {

            vm.showDate = time.format('L');

            restService.post('wykopy', {
                    'title': vm.title,
                    'subtitle': vm.subtitle,
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
                            $location.url('/main');
                    },3000);
                })
                .catch(function () {
                    $log.error('form has not been sent');

                    vm.dangerAlert = true;
                    $timeout(function () {
                        vm.dangerAlert = false;
                    }, 3000);
                });
        }

    }
    ])
})(window);