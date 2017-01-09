(function () {
    'use strict';
    angular.module('app.e-siat')
    .controller('serviciosCtrl', function($mdDialog){
        var self = this;

        self.servicios = [
                {
                    nombre: 'servicio1',
                    icono: 'zmdi zmdi-eye',
                    descripcion: {
                        breve: '00000Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    }
                },
                {
                    nombre: 'servicio2',
                    icono: 'zmdi zmdi-fire',
                    descripcion: {
                        breve: '11111Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    }
                },
                {
                    nombre: 'servicio3',
                    icono: 'zmdi zmdi-card',
                    descripcion: {
                        breve: '22222Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    }
                },
                {
                    nombre: 'servicio4',
                    icono: 'zmdi zmdi-audio',
                    descripcion: {
                        breve: '33333Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    }
                }
            ];

        self.showAdvanced = function(index) {
            $mdDialog.show({
              templateUrl: 'app/layout/modal.html',
              parent: angular.element(document.body),
              //targetEvent: ev,
              clickOutsideToClose:true,
              fullscreen: self.customFullscreen, // Only for -xs, -sm breakpoints.
              locals: {
                descripcion: self.servicios[index].descripcion.breve,
                nombre: self.servicios[index].nombre
              },
              controller: 'modalCtrl as modal'
            });
        };
    });

})();