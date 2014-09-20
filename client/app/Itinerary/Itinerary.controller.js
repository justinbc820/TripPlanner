'use strict';

angular.module('tripPlannerApp')
  .controller('ItineraryCtrl', function ($scope, ToggleViewFactory) {
  	$scope.showItinerary = ToggleViewFactory.showItinerary;
  	$scope.itinerary = ToggleViewFactory.itinerary;
  });
