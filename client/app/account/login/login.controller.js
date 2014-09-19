'use strict';

angular.module('tripPlannerApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window) {
    //for rapid testing, remove this line when deploying
    $scope.user = { email: 'test@test.com', password: 'test' };
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to planTrip
          $location.path('/planTrip');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
