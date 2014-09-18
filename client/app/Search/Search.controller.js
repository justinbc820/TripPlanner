'use strict';

angular.module('tripPlannerApp')
  .controller('SearchCtrl', function ($scope, ToggleView, ngGPlacesAPI, $http) {
  	$scope.showSearch = ToggleView.showSearch;
  	$scope.toggleView = ToggleView.toggleView;

  	$scope.details;
  	$scope.places;
    $scope.returnedPlaces = [];

    $scope.gMapsSearch = function(autocomplete) {
      // ngGPlacesAPI.setDefaults({types:['lodging']});
      // ngGPlacesAPI.nearbySearch({latitude:-33.8665433, longitude:151.1956316}).then(
      //     function(data){
      //       $scope.places = data;
      //     });
      ngGPlacesAPI.textSearch({'query':autocomplete}).then(
          function(data){
            $scope.places = data;
          });

    }; 

    $scope.placeDetails = function(place) {
      var placeObj = {
        placeId: place.place_id
      };
      ngGPlacesAPI.placeDetails(placeObj).then(
          function(data){
            $scope.details = data;
          });
    } 
  });
