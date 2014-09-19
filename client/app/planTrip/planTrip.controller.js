'use strict';

angular.module('tripPlannerApp')
  .controller('PlanTripCtrl', function ($scope, ngGPlacesAPI, ToggleViewFactory) {
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 2
    };

    $scope.toggleView = ToggleViewFactory.toggleView;
    $scope.returnedPlaces = ToggleViewFactory.returnedPlaces;
    $scope.getDetails = ToggleViewFactory.getDetails;
});
