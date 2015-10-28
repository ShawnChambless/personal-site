angular.module("personalSite")
.controller("homeCtrl",["$scope","$location",function($scope, $location){
$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
  $('.nav-link').on('click', function() {
      $('#js-centered-navigation-menu').slideUp('fast');
  });

});

}]);
