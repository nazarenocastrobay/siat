(function () {
    'use strict';
    angular.module('app.e-siat')
    .controller('serviciosCtrl', function(){
    	var self = this;
    	self.servicios = servicios;
    });
    var servicios = [
            {
                nombre: 'servicio1',
                icono: 'zmdi zmdi-eye',
                descipcion: {
                    breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            },
            {
                nombre: 'servicio2',
                icono: 'zmdi zmdi-fire',
                descipcion: {
                    breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            },
            {
                nombre: 'servicio3',
                icono: 'zmdi zmdi-card',
                descipcion: {
                    breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            },
            {
                nombre: 'servicio4',
                icono: 'zmdi zmdi-audio',
                descipcion: {
                    breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            }

        ];
})();