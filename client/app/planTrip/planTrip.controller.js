'use strict';

angular.module('tripPlannerApp')
  .controller('PlanTripCtrl', function ($scope, ngGPlacesAPI, ToggleView) {
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };

    $scope.details;
    $scope.places;

    $scope.toggleView = ToggleView.toggleView;
});
