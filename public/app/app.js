angular.module('personalSite', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'app/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .when('/about', {
            templateUrl: 'app/about/aboutTmpl.html'
        })
        .when('/projects', {
            templateUrl: 'app/projects/projectsTmpl.html'
        })
        .otherwise('/home');
}]);
