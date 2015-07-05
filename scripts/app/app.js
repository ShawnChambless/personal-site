var app = angular.module('personalSite', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when('/home', {
            templateUrl: 'scripts/app/views/homeTmpl.html',
            controller: 'mainCtrl'
        })
        .otherwise('/home')
});
