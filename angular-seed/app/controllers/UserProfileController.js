/**
 * Created by Kacper Włodarczyk on 2016-07-28.
 */
(function (window) {
    'use strict';

    window.myApp.controller('UserProfileController', ['$scope', function ($scope) {
        var vm = this;

        vm.user = {
            firstName : 'Kacper',
            lastName : 'Włodarczyk',
            nick : 'Madafakerski Madafaker',
            age : 22,
            gender : 'Mężczyzna',
            email : 'kacper.wlodarczyk@edge1s.com',
            rank : 'Weteran',
            country: 'Polska',
            city : 'Lublin'
        }
        
        console.log(vm.user);
    }]);
})(window);