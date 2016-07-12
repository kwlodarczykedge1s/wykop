/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */
(function (window) {

    window.myApp.controller('ArticlesController', ['$scope','restService', function ($scope, restService) {

        $scope.author = 'Kacper';
        $scope.score = 0;


        // restService.post('wykopy', {
        //     "id" : "",
        //     "title": vm.title,
        //     "subtitle": vm.subtitle,
        //     "score": vm.score,
        //     "image": vm.url",
        //     "author": vm.author
        // })

        $scope.addData = function () {
            restService.post('Wykopy', {
                'title': $scope.title,
                'subtitle': $scope.subtitle,
                'image': $scope.url,
                'content' : $scope.content,
                'author': $scope.author,
                'score' : $scope.score
            })
                .then(function () {
                    
                })
                
        }
    }])

})(window);