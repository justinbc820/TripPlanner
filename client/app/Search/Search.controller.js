'use strict';

angular.module('tripPlannerApp')
  .controller('SearchCtrl', function ($scope, $rootScope, ToggleViewFactory, ngGPlacesAPI) {
  	$scope.showSearch = ToggleViewFactory.showSearch;
  	$scope.toggleView = ToggleViewFactory.toggleView;

  	$scope.details = [];
  	$scope.places = [];
    $scope.returnedPlaces = [];

    $scope.gMapsSearch = function(autocomplete) {
      ngGPlacesAPI.textSearch({'query':autocomplete})
          .then(function(data){
              $scope.places = data;
          })
          .then(function() {
            //  refresh array with each new search
            $scope.returnedPlaces = [];
            //  loop through places, get lat/lng and assign an id. 
            //  Push to $scope.returnedPlaces
            for(var i=0, n=$scope.places.length; i<n; i++) {
              var newMarker = {
                    id: i,
                    coords: {
                      latitude: $scope.places[i].geometry.location.k,
                      longitude: $scope.places[i].geometry.location.B
                    },
                    name: $scope.places[i].name,
                    rating: $scope.places[i].rating,
                    options: {
                      'title': $scope.places[i].name
                    }
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
