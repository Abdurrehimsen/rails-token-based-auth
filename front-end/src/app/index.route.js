(function() {
  'use strict';

  angular
    .module('angularrails')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('userpage', {
        url: '/userpage',
        templateUrl: 'app/userpage/userpage.html',
        controller: 'UserpageController',
        controllerAs: 'uspg'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
