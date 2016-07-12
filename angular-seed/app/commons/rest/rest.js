/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */
(function (window) {

    window.myApp.factory('restService', ['$http','$log', function ($http, $log) {
        var baseUri = 'http://localhost:3000/';

        return {
            get: get,
            post: post,
            remove: remove,
            put: put
        };

        function get(endpoint) {
            var uri = prepareUri(endpoint);
            return $http.get(uri)
                .catch(function (resp) {
                    $log.error('Error Response: ' +resp.data);
                })
        }
        function post(endpoint, data) {
            var uri = prepareUri(endpoint);
            return $http.post(uri, data)
                .catch(function (resp) {
                    $log.error('Error Response: ' + resp.data)
                });
        }
        function remove(endpoint, id) {
            var uri = prepareUri(endpoint);

            $http.delete(uri+'/'+id)
                .catch(function () {

            });
        }
        function put(enpoint, data) {
            var uri = prepareUri(endpoint);
            $http.put(uri, data);

        }

        function prepareUri(endpoint) {
            return baseUri + endpoint;
        }


    }]);

})(window);