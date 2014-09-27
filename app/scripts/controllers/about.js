'use strict';

/**
 * @ngdoc function
 * @name angularSandboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSandboxApp
 */
angular.module('angularSandboxApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
