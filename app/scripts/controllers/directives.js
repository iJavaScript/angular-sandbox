'use strict';

/**
 * @ngdoc function
 * @name angularSandboxApp.controller:DirectivesCtrl
 * @description
 * # DirectivesCtrl
 * Controller of the angularSandboxApp
 */
angular.module('angularSandboxApp')
  .controller('DirectivesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
