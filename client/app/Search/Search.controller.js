'use strict';

angular.module('tripPlannerApp')
  .controller('SearchCtrl', function ($scope, ToggleViewFactory, ngGPlacesAPI) {
  	$scope.toggleView = ToggleViewFactory.toggleView;

    $scope.returnedPlaces = ToggleViewFactory.returnedPlaces;
    $scope.details = ToggleViewFactory.details;

    $scope.infoButtons = {};
    $scope.showInfo = {};

    $scope.datePickers = {};
    $scope.dateToAddTo = {
      date: undefined
    };
    $scope.currentEventIndex = {
      index: undefined
    };

    $scope.gMapsSearch = function(autocomplete) {
      ToggleViewFactory.gMapsSearch(autocomplete);
      // Generate default info button text
      for(var i=0; i<20; i++) {
        $scope.infoButtons[i] = "More Info";
        $scope.showInfo[i] = false;
        $scope.datePickers[i] = false;
      };
    };

    $scope.placeDetails = function(place, index) {
      //  If a call to Google's API hasn't already been made for details, then make the call
      if(!ToggleViewFactory.returnedPlaces[index].details) {
        ToggleViewFactory.placeDetails(place);
      }
      if($scope.infoButtons[index] === "Less Info") {
        $scope.infoButtons[index] = "More Info";
        $scope.showInfo[index] = !$scope.showInfo[index];
      }
      else {
        $scope.infoButtons[index] = "Less Info";
        $scope.showInfo[index] = !$scope.showInfo[index];
      }
    };

    $scope.toggleDatePicker = function(place, index) {
      $scope.currentEventIndex.index = index;
      //  If a call to Google's API hasn't already been made for details, then make the call
      if(!ToggleViewFactory.returnedPlaces[index].details) {
        ToggleViewFactory.placeDetails(place);
      }
      
      if($scope.datePickers[index] === false) {
        $scope.datePickers[index] = true;
      }
      else {
        $scope.datePickers[index] = false;
      }
    };

    $scope.addEvent = ToggleViewFactory.addEvent; 

    $scope.$watch('dateToAddTo.date', function(newVal, oldVal) {
      if(newVal && $scope.dateToAddTo.date !== undefined) {
        var event = $scope.returnedPlaces[$scope.currentEventIndex.index];
        var date = $scope.dateToAddTo.date;
        if(event) {
          ToggleViewFactory.addEvent(event,date);
        };
        $scope.dateToAddTo.date = undefined;
        $scope.datePickers[$scope.currentEventIndex.index] = false;
      }
    });
  });
