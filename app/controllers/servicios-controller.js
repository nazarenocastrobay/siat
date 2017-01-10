(function () {
    'use strict';
    angular.module('app.e-siat')
    .controller('serviciosCtrl', function($mdDialog){
        var self = this;

        self.servicios = [
                {
                    nombre: 'servicio1',
                    icono: 'zmdi zmdi-eye',
                    titulo: 'titulo1',
                    descripcion: {
                        breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        larga: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique pretium sapien eget egestas. Quisque egestas nibh eget nunc commodo, non fermentum elit tristique. Vestibulum ut turpis id nunc ornare lobortis. Mauris imperdiet eros elementum lectus dapibus, vitae eleifend enim commodo. Donec malesuada nisl arcu, vel sagittis urna ultricies eget.'
                    }
                },
                {
                    nombre: 'servicio2',
                    icono: 'zmdi zmdi-fire',
                    titulo: 'titulo2',
                    descripcion: {
                        breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        larga: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique pretium sapien eget egestas. Quisque egestas nibh eget nunc commodo, non fermentum elit tristique. Vestibulum ut turpis id nunc ornare lobortis. Mauris imperdiet eros elementum lectus dapibus, vitae eleifend enim commodo. Donec malesuada nisl arcu, vel sagittis urna ultricies eget.'
                    }
                },
                {
                    nombre: 'servicio3',
                    icono: 'zmdi zmdi-card',
                    titulo: 'titulo3',
                    descripcion: {
                        breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        larga: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique pretium sapien eget egestas. Quisque egestas nibh eget nunc commodo, non fermentum elit tristique. Vestibulum ut turpis id nunc ornare lobortis. Mauris imperdiet eros elementum lectus dapibus, vitae eleifend enim commodo. Donec malesuada nisl arcu, vel sagittis urna ultricies eget.'
                    }
                },
                {
                    nombre: 'servicio4',
                    icono: 'zmdi zmdi-audio',
                    titulo: 'titulo4',
                    descripcion: {
                        breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        larga: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique pretium sapien eget egestas. Quisque egestas nibh eget nunc commodo, non fermentum elit tristique. Vestibulum ut turpis id nunc ornare lobortis. Mauris imperdiet eros elementum lectus dapibus, vitae eleifend enim commodo. Donec malesuada nisl arcu, vel sagittis urna ultricies eget.'
                    }
                }
            ];

        self.showAdvanced = function(index) {
            $mdDialog.show({
              templateUrl: 'app/layout/modales.html',
              parent: angular.element(document.body),
              //targetEvent: ev,
              clickOutsideToClose:true,
              fullscreen: self.customFullscreen, // Only for -xs, -sm breakpoints.
              locals: {
                descripcion: self.servicios[index].descripcion.larga,
                nombre: self.servicios[index].nombre,
                titulo: self.servicios[index].titulo
              },
              controller: 'modalCtrl as modal'
            });
            console.log(self.servicios[index].titulo)
        };
    });

})();