'use strict';

angular.module('tripPlannerApp')
  .controller('PlanTripCtrl', function ($scope, $rootScope, ngGPlacesAPI, ToggleViewFactory) {
    $scope.map = {
        center: {
            latitude: 15,
            longitude: -15
        },
        zoom: 3
    };

    $scope.toggleView = ToggleViewFactory.toggleView;
    $scope.returnedPlaces = ToggleViewFactory.returnedPlaces;
    $scope.getDetails = ToggleViewFactory.getDetails;
    $scope.events = ToggleViewFactory.events;

    // The polyline HAS TO be initialized on load or else it won't show up dynamically
    // It is overwritten the first time that someone adds something to their itinerary in the $rootScope.$on function
    $scope.polyline = {
        path:[
            {
                latitude:37.772323, 
                longitude: -122.214897
            },
            {
                latitude: 21.291982, 
                longitude: -157.821856
            }
        ],
        visible: false
    };

    $rootScope.$on('newEvent', function() {  
        $scope.events = ToggleViewFactory.events;
        $scope.polyline = ToggleViewFactory.polyline;
    });



    $scope.mainView = ToggleViewFactory.mainView;
});
