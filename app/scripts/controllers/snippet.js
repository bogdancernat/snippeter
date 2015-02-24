'use strict';

/**
 * @ngdoc function
 * @name emApp.controller:SnippetCtrl
 * @description
 * # SnippetCtrl
 * Controller of the emApp
 */
angular.module('emApp')
  .controller('SnippetCtrl', function ($scope, $firebase, $location) {
    
    var ref  = new window.Firebase('https://glaring-inferno-5798.firebaseio.com/');
    var sync = $firebase(ref);

    $scope.snippets = sync.$asArray();


    $scope.addSnippet = function (isValid) {
      var snippet;
      if(isValid) {
        snippet = new Snippet(this.author, this.description, this.code);
        $scope.snippets.$add(snippet).then(function (newSnippet) {
          $location.path('/snippet/'+newSnippet.key());
        });
      }
    };

    function Snippet(author, description, snippet) {
      var o = {};

      o.author      = author;
      o.description = description;
      o.snippet     = snippet;
      o.type        = 'snippet'; // don't think i'll need it
      o.createdOn   = (function (){
        return new Date().toString();
      })();
      o.updatedOn   = o.createdOn;

      return o;
    
    }
  });
