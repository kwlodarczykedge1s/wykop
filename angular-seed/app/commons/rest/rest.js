/**
 * Created by Kacper Włodarczyk on 2016-07-07.
 */
(function (window) {

    window.myApp.factory('restService', ['$http', function ($http) {
        var baseUri = 'http://localhost:3000/';

        return {
            get: get,
            post: post,
            remove: remove,
            put: put
        };

        function get(endpoint) {
            var uri = prepareUri(endpoint);
            return $http.get(uri);
        }

        function post(endpoint, data) {
            var uri = prepareUri(endpoint);
            return $http.post(uri, data);
        }

        function remove(endpoint, id) {
            var uri = prepareUri(endpoint);
            return $http.delete(uri + '/' + id);

        }

        function put(enpoint, data) {
            var uri = prepareUri(enpoint);
            return $http.put(uri, data);

        }

        function prepareUri(endpoint) {
            return baseUri + endpoint;
        }
    }]);

})(window);