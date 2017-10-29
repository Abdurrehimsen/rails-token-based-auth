(function() {
  'use strict';


  angular
    .module('angularrails')
    .controller('UserpageController', ['$scope', 'users',

    function($scope, users){
      $scope.posts = [];
      $scope.showItems = function(){
        users.getItems().then(function(data) {
              console.log(window.localStorage.token);
              console.log(data.data)
              angular.copy(data.data, $scope.posts);
              console.log($scope.posts)
          }).then(function(error){
              //failed.
          });

      };
    }
  ]);
})
();
