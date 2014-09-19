'use strict';

angular.module('tripPlannerApp')
  .controller('ItineraryCtrl', function ($scope, ToggleViewFactory) {
  	$scope.message = 'Itinerary';
  	$scope.showItinerary = ToggleViewFactory.showItinerary;
  });
