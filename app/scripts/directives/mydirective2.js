'use strict';

/**
 * @ngdoc directive
 * @name angularSandboxApp.directive:myDirective2
 * @description
 * # myDirective2
 */
angular.module('angularSandboxApp')
  .directive('myDirective2', function () {
    return {
        template: '<p>Inside myDirective 2 - {{myProperty}}</p>',
        restrict: 'A',
        scope: {
            myProperty: '@'
        }
    };
  });
