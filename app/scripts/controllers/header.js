'use strict';

/**
 * @ngdoc function
 * @name emApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the emApp
 */
angular.module('emApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
