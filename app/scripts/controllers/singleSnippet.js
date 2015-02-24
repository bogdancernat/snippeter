'use strict';

/**
 * @ngdoc function
 * @name emApp.controller:SingleSnippetCtrl
 * @description
 * # SingleSnippetCtrl
 * Controller of the emApp
 */
angular.module('emApp')
  .controller('SingleSnippetCtrl', function ($scope, $firebase, $routeParams, $location) {
    var ref  = new window.Firebase('https://glaring-inferno-5798.firebaseio.com/');
    var sync = $firebase(ref);

    $scope.snippets = sync.$asArray();
    var snippetId   = $routeParams.snippetId;
    // this is so weird, it won't return the object, altough it exists;
    console.log(snippetId);
    console.log($scope.snippets);
    console.log($scope.snippets.$getRecord('-JiuqJR4oULHsCaiFcnh'));
    $scope.snippet  = $scope.snippets.$getRecord(snippetId);

    // if(!$scope.snippet){
    //   $location.path('/');
    // }

    $scope.removeSnippet = function (snippet) {
      $scope.snippets.$remove(snippet);
    };

    $scope.saveSnippet = function () {
      $scope.snippets.$save($scope.snippet);
    };
  });
