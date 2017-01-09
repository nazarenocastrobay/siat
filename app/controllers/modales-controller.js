 (function () {
    'use strict';
    angular.module('app.e-siat')
    .controller('modalCtrl', function(descripcion, nombre){
        var self = this;

        self.descripcion = descripcion;
        self.nombre = nombre;

    });
})();




