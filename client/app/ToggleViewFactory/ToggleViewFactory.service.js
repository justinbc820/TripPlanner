'use strict';

angular.module('tripPlannerApp')
  .factory('ToggleViewFactory', function () {
    
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

    // Public API here
    return {
      showSearch: showSearch,
      showItinerary: showItinerary,
      toggleView: toggleView
    };
  });
