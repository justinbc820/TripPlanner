'use strict';

angular.module('tripPlannerApp')
  .controller('SearchCtrl', function ($scope, ToggleView) {
  	$scope.message = "Search";
  	$scope.showSearch = ToggleView.showSearch;
  });
