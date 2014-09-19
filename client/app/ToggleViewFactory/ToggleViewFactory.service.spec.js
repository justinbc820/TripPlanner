'use strict';

describe('Service: ToggleViewFactory', function () {

  // load the service's module
  beforeEach(module('tripPlannerApp'));

  // instantiate service
  var ToggleView;
  beforeEach(inject(function (_ToggleView_) {
    ToggleView = _ToggleView_;
  }));

  it('should do something', function () {
    expect(!!ToggleView).toBe(true);
  });

});
