'use strict';

/**
 * @ngdoc directive
 * @name angularSandboxApp.directive:myDirective1
 * @description
 * # myDirective1
 */
angular.module('angularSandboxApp')
  .directive('myDirective1', function () {
    return {
        restrict: 'A',
        scope: true
    };
  });
