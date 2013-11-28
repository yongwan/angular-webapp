'use strict';

describe('Service: Postfactory', function () {

  // load the service's module
    beforeEach(module('angularWebApp'));

  // instantiate service
  var Postfactory;
  beforeEach(inject(function (_Postfactory_) {
    Postfactory = _Postfactory_;
  }));

  it('should do something', function () {
    expect(!!Postfactory).toBe(true);
  });

});
