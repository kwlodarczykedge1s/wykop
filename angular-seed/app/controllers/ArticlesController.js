/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */
(function (window) {

    'use strict';
    window.myApp.controller('ArticlesController', ['$scope', 'restService', '$log', function ($scope, restService, $log) {

        var time = moment();

        $scope.author = 'Kacper';
        $scope.score = 0;
        $scope.button = document.querySelector('#sendButton');
        $scope.showDate = time.format('LL');
        $scope.showAlert = false;


        // funkcja która dodaje dane do serwera

        $scope.addData = function () {
            $scope.optionsRadios1 = document.querySelector('#optionsRadios1');
            $scope.optionsRadios2 = document.querySelector('#optionsRadios2');

            if ($scope.optionsRadios1.checked == true) {
                restService.post('wykopy', {
                        'title': $scope.title,
                        'subtitle': $scope.subtitle,
                        'image': $scope.url,
                        'content': $scope.content,
                        'author': $scope.author,
                        'date': $scope.showDate,
                        'score': $scope.score
                    })
                    .then(function () {

                        $scope.showAlert = true;
                    })
                    .catch(function () {
                        $log.error('form has not been sent');
                    })
            }
            else if ($scope.optionsRadios2.checked == true) {
                restService.post('mikroblog', {
                        'title': $scope.title,
                        'subtitle': $scope.subtitle,
                        'image': $scope.url,
                        'content': $scope.content,
                        'author': $scope.author,
                        'score': $scope.score
                    })
                    .then(function () {

                        $scope.showAlert = true;
                    })
                    .catch(function () {
                        $log.error('form has not been sent');
                    })
            }
            else {
                console.log('ERROR');
            }
        }


    }
    ])

})(window);