'use strict';

angular.module('tripPlannerApp')
  .controller('SearchCtrl', function ($scope, $rootScope, ToggleViewFactory, ngGPlacesAPI, $http) {
  	$scope.showSearch = ToggleViewFactory.showSearch;
  	$scope.toggleView = ToggleViewFactory.toggleView;

  	$scope.details;
  	$scope.places;
    $scope.returnedPlaces = [];

    $scope.gMapsSearch = function(autocomplete) {
      // ngGPlacesAPI.setDefaults({types:['lodging']});
      // ngGPlacesAPI.nearbySearch({latitude:-33.8665433, longitude:151.1956316}).then(
      //     function(data){
      //       $scope.places = data;
      //     });
      ngGPlacesAPI.textSearch({'query':autocomplete})
          .then(function(data){
              $scope.places = data;
          })
          .then(function() {
            for(var i=0, n=$scope.places.length; i<n; i++) {
              var id = i,
                  coords = {
                    latitude: $scope.places[i].geometry.location.k,
                    longitude: $scope.places[i].geometry.location.B
                  },
                  newMarker = {
                    id: id,
                    coords: coords
                  };

              $scope.returnedPlaces.push(newMarker);
            }
            $rootScope.returnedPlaces = $scope.returnedPlaces;
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
    };

  });
