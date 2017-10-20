var nextGenApp = angular.module('nextGenApp', ['ngResource', 'ui.router', 'ngStorage']);

nextGenApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    // Main Index
    .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeController'
    });

});



