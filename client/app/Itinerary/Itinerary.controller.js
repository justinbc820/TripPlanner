'use strict';

angular.module('tripPlannerApp')
  .controller('ItineraryCtrl', function ($scope, ToggleView) {
  	$scope.message = "Itinerary";
  	$scope.showItinerary = ToggleView.showItinerary;
  });
