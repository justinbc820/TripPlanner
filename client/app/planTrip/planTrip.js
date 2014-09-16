'use strict';

angular.module('tripPlannerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/planTrip', {
        templateUrl: 'app/planTrip/planTrip.html',
        controller: 'PlanTripCtrl'
      });
  });
