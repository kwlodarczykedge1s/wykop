(function (window) {

    'use strict';

// Declare app level module which depends on views, and commons
    window.myApp = angular.module('myApp', [
        'ngRoute', 'validation', 'validation.rule','ngMaterial','ngAnimate','ngAria'
    ]);
})(window);
