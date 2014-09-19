'use strict';

describe('Filter: OpeningHours', function () {

  // load the filter's module
  beforeEach(module('tripPlannerApp'));

  // initialize a new instance of the filter before each test
  var OpeningHours;
  beforeEach(inject(function ($filter) {
    OpeningHours = $filter('OpeningHours');
  }));

  it('should return the input prefixed with "OpeningHours filter:"', function () {
    var text = 'angularjs';
    expect(OpeningHours(text)).toBe('OpeningHours filter: ' + text);
  });

});
