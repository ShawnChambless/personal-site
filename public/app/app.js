var app = angular.module('personalSite', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when('/home', {
            templateUrl: 'public/app/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .otherwise('/home')
});
