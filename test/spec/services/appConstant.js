'use strict';

describe('Service: appConstant', function () {

    // load the service's module
    beforeEach(module('angularWebApp'));

    // instantiate service
    var appConstant;
    beforeEach(inject(function (_appConstant_) {
        appConstant = _appConstant_;
    }));

    it('should do something', function () {
        expect(!!appConstant).toBe(true);
    });

});
