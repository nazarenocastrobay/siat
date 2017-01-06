 (function () {
    'use strict';
    angular.module('app.e-siat')
    .controller('modalesCtrl', function($mdDialog){
        var self = this;
        self.showAdvanced = function(ev) {
        $mdDialog.show({
          templateUrl: 'app/layout/modales.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: self.customFullscreen // Only for -xs, -sm breakpoints.
        })
        .then(function(answer) {
          self.status = 'You said the information was "' + answer + '".';
        }, function() {
          self.status = 'You cancelled the dialog.';
        });
      };
  });
})();



