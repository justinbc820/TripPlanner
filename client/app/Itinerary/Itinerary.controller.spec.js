'use strict';

describe('Controller: ItineraryCtrl', function () {

  // load the controller's module
  beforeEach(module('tripPlannerApp'));

  var ItineraryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItineraryCtrl = $controller('ItineraryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
