'use strict';

/**
 * @ngdoc function
 * @name angularSandboxApp.controller:ScopingCtrl
 * @description
 * # ScopingCtrl
 * Controller of the angularSandboxApp
 */
angular.module('angularSandboxApp')
  .controller('ScopingCtrl', function ($scope) {
      $scope.someBareValue = 'hello computer';
      $scope.another = { value: "parent VAL 1" };
      // set actions on $scope itself, this is okay
      $scope.someAction = function() {
          // sets {{ someBareValue }} inside SomeController and ChildController
          $scope.someBareValue = 'hello human, from parent';
          $scope.another.value = "parent VAL 2";
      };
  })
    .controller('ScopingChildCtrl', function ($scope) {
        $scope.childAction = function() {
            // sets {{ someBareValue }} inside ChildController
            $scope.someBareValue = 'hello human, from child';
            $scope.another.value = "child VAL 1";
        };
    });

;
