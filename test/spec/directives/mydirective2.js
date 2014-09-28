'use strict';

describe('Directive: myDirective2', function () {

  // load the directive's module
  beforeEach(module('angularSandboxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-directive2></my-directive2>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myDirective2 directive');
  }));
});
