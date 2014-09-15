'use strict';

angular.module('google-maps', ['tripPlannerApp'])
	.controller('PlanTripCtrl', function($scope) {
		$scope.map = {
			center: {
				latitude: 45,
				longitude: -73
			},
			zoom: 8
		};
	});