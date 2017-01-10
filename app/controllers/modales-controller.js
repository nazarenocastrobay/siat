 (function () {
    'use strict';
    angular.module('app.e-siat')
    .controller('modalCtrl', function(descripcion, nombre, titulo, $mdDialog){
        var self = this;

        self.descripcion = descripcion;
        self.nombre = nombre;
        self.titulo = titulo;
        self.cancel = function() {
          $mdDialog.cancel();
        };

    });
})();




