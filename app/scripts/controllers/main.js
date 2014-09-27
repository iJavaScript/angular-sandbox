'use strict';

/**
 * @ngdoc function
 * @name angularSandboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSandboxApp
 */
angular.module('angularSandboxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
