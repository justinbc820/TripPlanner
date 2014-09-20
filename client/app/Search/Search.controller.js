'use strict';

angular.module('tripPlannerApp')
  .controller('SearchCtrl', function ($scope, ToggleViewFactory, ngGPlacesAPI) {
  	$scope.showSearch = ToggleViewFactory.showSearch;
  	$scope.toggleView = ToggleViewFactory.toggleView;

    $scope.returnedPlaces = ToggleViewFactory.returnedPlaces;
    $scope.details = ToggleViewFactory.details;

    $scope.infoButtons = {};
    $scope.showInfo = {};

    $scope.gMapsSearch = function(autocomplete) {
      ToggleViewFactory.gMapsSearch(autocomplete);
      // Generate default info button text
      for(var i=0; i<20; i++) {
        $scope.infoButtons[i] = "More Info";
        $scope.showInfo[i] = false;
      };
    };

    $scope.placeDetails = function(place, index) {
      ToggleViewFactory.placeDetails(place);
      if($scope.infoButtons[index] === "More Info") {
        $scope.infoButtons[index] = "Less Info";
        $scope.showInfo[index] = !$scope.showInfo[index];
      }
      else {
        $scope.infoButtons[index] = "More Info";
        $scope.showInfo[index] = !$scope.showInfo[index];
      }
    };

    $scope.addEvent = function(event) {
      ToggleViewFactory.addEvent(event)
    };
  });
