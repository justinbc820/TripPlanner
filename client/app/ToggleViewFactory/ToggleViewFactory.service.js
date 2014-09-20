'use strict';

angular.module('tripPlannerApp')
  .factory('ToggleViewFactory', function (ngGPlacesAPI) {
 
    /////////////////////////////////////////////////////////////////
    // This is the section to toggle between itinerary and search views
    /////////////////////////////////////////////////////////////////

    var showItinerary = {
      value: false 
    };
    var showSearch = {
      value: true
    };

    var toggleView = function(button) {
        if(button === 'itinerary') {
            showItinerary.value = true;
            showSearch.value = false;
        }
        else {
            showItinerary.value = false;
            showSearch.value = true;
        }
    };

    ////////////////////////////////////////////////////////////////////
    // This is the section to conduct a gMapsTextSearch and return results to rootScope
    ////////////////////////////////////////////////////////////////////

    var places = [],
        returnedPlaces = [];

    var gMapsSearch = function(autocomplete) {
      ngGPlacesAPI.textSearch({'query':autocomplete})
          .then(function(data){
              places = data;
          })
          .then(function() {
            //  refresh array with each new search
            returnedPlaces.length = 0;
            //  loop through places, get lat/lng and assign an id. 
            //  Push to $scope.returnedPlaces
            for(var i=0, n=places.length; i<n; i++) {
              var newMarker = {
                    id: i,
                    coords: {
                      latitude: places[i].geometry.location.k,
                      longitude: places[i].geometry.location.B
                    },
                    name: places[i].name,
                    rating: places[i].rating,
                    options: {
                      'title': places[i].name
                    },
                    placeId: places[i].place_id
                  };
              returnedPlaces.push(newMarker);
            };
          })
    };

    /////////////////////////////////////////////////////////////////////
    //  This is the section to request more details from GooglePlaces API
    /////////////////////////////////////////////////////////////////////

    // Call Google Places API, pass it the place_id, push details into places Array
    var placeDetails = function(place) {
      var placeObj = {
        placeId: place.placeId
      };
      ngGPlacesAPI.placeDetails(placeObj).then(
          function(data){
            place.details = data;
          });
    };

    //////////////////////////////////////////////////////////////////////
    // This is the section to add a place to the itinerary
    //////////////////////////////////////////////////////////////////////
    var itinerary = {};

    var addToItinerary = function(place) {
      itinerary[place.placeId] = place;
    }

    // Public API here
    return {
      // Variables for Toggle View
      showSearch: showSearch,
      showItinerary: showItinerary,
      toggleView: toggleView,

      // Variables for placeDetails
      placeDetails: placeDetails,

      // Variables for gMapsSearch
      gMapsSearch: gMapsSearch,
      returnedPlaces: returnedPlaces,

      // Variable for addToItinerary
      itinerary: itinerary,
      addToItinerary: addToItinerary
    };
  });
