'use strict';

describe('Service: Pagefactory', function () {

  // load the service's module
  beforeEach(module('angularWebApp'));

  // instantiate service
  var Pagefactory;
  beforeEach(inject(function (_Pagefactory_) {
    Pagefactory = _Pagefactory_;
  }));

  it('should do something', function () {
    expect(!!Pagefactory).toBe(true);
  });

});
