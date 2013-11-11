'use strict';

describe('Service: serverEvents', function () {

  // load the service's module
  beforeEach(module('todoApp'));

  // instantiate service
  var serverEvents;
  beforeEach(inject(function (_serverEvents_) {
    serverEvents = _serverEvents_;
  }));

  it('should do something', function () {
    expect(!!serverEvents).toBe(true);
  });

});
