'use strict';

angular.module('tripPlannerApp')
  .controller('SearchCtrl', function ($scope, ToggleViewFactory, ngGPlacesAPI) {
  	$scope.showSearch = ToggleViewFactory.showSearch;
  	$scope.toggleView = ToggleViewFactory.toggleView;

    $scope.details = ToggleViewFactory.details;

    $scope.gMapsSearch = ToggleViewFactory.gMapsSearch;

    $scope.placeDetails = ToggleViewFactory.placeDetails;
    $scope.returnedPlaces = ToggleViewFactory.returnedPlaces;

  });
