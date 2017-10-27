(function() {
  'use strict';

  angular
    .module('angularrails')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
