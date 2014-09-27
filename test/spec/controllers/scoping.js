'use strict';

describe('Controller: ScopingCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSandboxApp'));

  var ScopingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScopingCtrl = $controller('ScopingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
