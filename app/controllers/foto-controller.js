 (function () {
    'use strict';
    angular.module('app.e-siat')
    .controller('fotoCtrl', function(imagen, titulo, $mdDialog){
        var self = this;

        self.imagen = imagen;
        self.titulo = titulo;
        self.cancel = function() {
          $mdDialog.cancel();
        };

    });
})();