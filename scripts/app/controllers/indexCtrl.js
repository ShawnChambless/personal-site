var app = angular.module('personalSite');

app.controller('indexCtrl', function($scope, $location) {
    $scope.page = $location.path().toUpperCase();
})
