'use strict';

/**
 * @ngdoc overview
 * @name emApp
 * @description
 * # emApp
 *
 * Main module of the application.
 */
angular
  .module('emApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularMoment',
    'ui.ace',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new', {
        templateUrl: 'views/new-snippet.html',
        controller: 'SnippetCtrl'
      })
      .when('/snippet/:snippetId', {
        templateUrl: 'views/snippet.html',
        controller: 'SingleSnippetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
