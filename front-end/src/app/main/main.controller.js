(function() {
  'use strict';


  angular
    .module('angularrails')
    .controller('MainController', ['$scope', 'users',

    function($scope, users){
      
      $scope.addPost = function(){
        //if(!$scope.title || $scope.title === '') { return; }
        console.log('addPost')
          users.auth($scope.username, $scope.password);      
          $scope.title = '';
          $scope.link = '';
      };
    }
  ]);
})
();
