'use strict';

angular.module('tripPlannerApp')
  .controller('PlanTripCtrl', function ($scope, ngGPlacesAPI, ToggleViewFactory) {
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
});
