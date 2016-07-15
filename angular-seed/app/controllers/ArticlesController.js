/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */
(function (window) {

    window.myApp.controller('ArticlesController', ['$scope','restService','$log', function ($scope, restService, $log) {

        $scope.author = 'Kacper';
        $scope.score = 0;
        $scope.button = document.querySelector('#sendButton');
        $scope.showAlert = false;


        // funkcja która dodaje dane do serwera

        $scope.addData = function () {
            restService.post('wykopy', {
                'title': $scope.title,
                'subtitle': $scope.subtitle,
                'image': $scope.url,
                'content' : $scope.content,
                'author': $scope.author,
                'score' : $scope.score
            })
                .then(function () {

                    $scope.showAlert = true;
                })
                .catch(function () {
                    $log.error('form has not been sent');
                })
                
        }
    }])

})(window);