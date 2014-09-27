'use strict';

/**
 * @ngdoc overview
 * @name angularSandboxApp
 * @description
 * # angularSandboxApp
 *
 * Main module of the application.
 */
angular
  .module('angularSandboxApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/scoping', {
        templateUrl: 'views/scoping.html',
        controller: 'ScopingCtrl'
      })
      .when('/directives', {
        templateUrl: 'views/directives.html',
        controller: 'DirectivesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      //$locationProvider.html5Mode(true);
  });
