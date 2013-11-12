'use strict';

describe('Service: websocketEvent', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var websocketEvent;
  beforeEach(inject(function (_websocketEvent_) {
    websocketEvent = _websocketEvent_;
  }));

  it('should do something', function () {
    expect(!!websocketEvent).toBe(true);
  });

});
