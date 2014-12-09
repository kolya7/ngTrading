'use strict';

/**
 * @ngdoc overview
 * @name ngTradingApp
 * @description
 * # ngTradingApp
 *
 * Main module of the application.
 */
angular
  .module('ngTradingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'pascalprecht.translate',
    'ngTouch'
  ])
  .config(function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Load locales
    $translateProvider.translations('en', {});
    $translateProvider.preferredLanguage('en');
  });
