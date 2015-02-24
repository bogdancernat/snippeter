'use strict';

/**
 * @ngdoc function
 * @name emApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emApp
 */
angular.module('emApp')
  .controller('MainCtrl', function ($scope, $firebase, $location) {
    var ref = new window.Firebase('https://glaring-inferno-5798.firebaseio.com/');
    var sync = $firebase(ref);
    $scope.snippets = sync.$asArray();

    $scope.removeSnippet = function (snippet) {
      $scope.snippets.$remove(snippet);
    };

    $scope.editSnippet = function (snippet) {
      $location.path('/snippet/'+snippet.$id);
    };

  });
