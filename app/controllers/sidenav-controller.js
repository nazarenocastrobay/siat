(function () {
    'use strict';
    angular.module('app.e-siat')
    .controller('sidenavCtrl', function ($timeout, $mdSidenav) {
    var self = this;
    self.toggleLeft = buildToggler('left');
    self.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle()
        .then(function(){
            $log.debug('toggled');
        });
      }
    }
  });
})();