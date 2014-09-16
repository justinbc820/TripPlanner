'use strict';

describe('Controller: PlantripCtrl', function () {

  // load the controller's module
  beforeEach(module('tripPlannerApp'));

  var PlantripCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlantripCtrl = $controller('PlantripCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
