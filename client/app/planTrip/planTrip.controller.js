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
    // $scope.events = ToggleViewFactory.events;

    // $rootScope.$on('newMarker', function() {
    //     $scope.returnedPlaces = ToggleViewFactory.returnedPlaces; 
    //     // console.log($scope.returnedPlaces); 
    // });

    $rootScope.$on('newEvent', function() {
        $scope.events = ToggleViewFactory.events;
        console.log($scope.events);  
    });

    $scope.mainView = ToggleViewFactory.mainView;
});
