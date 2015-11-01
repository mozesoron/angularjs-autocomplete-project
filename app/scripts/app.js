'use strict';

/**
 * @ngdoc overview
 * @name angularjsAutocompleteProjectApp
 * @description
 * # angularjsAutocompleteProjectApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsAutocompleteProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
