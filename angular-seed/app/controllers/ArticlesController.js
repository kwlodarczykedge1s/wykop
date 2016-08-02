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
        vm.button = document.querySelector('#sendButton');
        vm.showDate = time.format('LL');
        vm.dangerAlert = false;
        vm.successAlert = false;

        vm.addData = function () {
            vm.optionsRadios1 = document.querySelector('#optionsRadios1');
            vm.optionsRadios2 = document.querySelector('#optionsRadios2');
            vm.showDate = time.format('LL');
            var endUrl = '';
            if (vm.optionsRadios1.checked == true) {
                endUrl = 'wykopy';
            }
            else if (vm.optionsRadios2.checked == true) {
                endUrl = 'mikroblog';
            }
            else {
                console.log('ERROR');
            }

            restService.post(endUrl, {
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

                    var timeout = $timeout(function () {
                        vm.successAlert = false;
                    }, 3000);

                    var goToLocation = $timeout(function () {
                        if(vm.optionsRadios1 == true){
                            $location.url('/main');
                        }
                        else  {
                            $location.url('/microblog');
                        }
                    },5000);
                })
                .catch(function () {
                    $log.error('form has not been sent');

                    vm.dangerAlert = true;
                    var timeout = $timeout(function () {
                        vm.dangerAlert = false;
                    }, 3000);

                });


        }

    }
    ])

})(window);