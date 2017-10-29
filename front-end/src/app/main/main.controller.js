(function() {
  'use strict';


  angular
    .module('angularrails')
    .controller('MainController', ['$scope', 'users',

    /** @ngInject */
    // function MainController($timeout, webDevTec, toastr) {
    //   var vm = this;

    //   vm.awesomeThings = [];
    //   vm.classAnimation = '';
    //   vm.creationDate = 1509105930241;
    //   vm.showToastr = showToastr;

    //   activate();

    //   function activate() {
    //     getWebDevTec();
    //     $timeout(function() {
    //       vm.classAnimation = 'rubberBand';
    //     }, 4000);
    //   }

    //   function showToastr() {
    //     toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //     vm.classAnimation = '';
    //   }

    //   function getWebDevTec() {
    //     vm.awesomeThings = webDevTec.getTec();

    //     angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //       awesomeThing.rank = Math.random();
    //     });
    //   }
    // }
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
