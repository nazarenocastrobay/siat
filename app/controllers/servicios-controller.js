(function () {
    'use strict';
    angular.module('app.e-siat')
    .controller('serviciosCtrl', function($mdDialog, $document){
        var self = this;

        self.servicios = [
                {
                    nombre: 'paciente',
                    icono: 'zmdi zmdi-male-alt',
                    titulo: 'titulo1',
                    descripcion: {
                        breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        larga: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique pretium sapien eget egestas. Quisque egestas nibh eget nunc commodo, non fermentum elit tristique. Vestibulum ut turpis id nunc ornare lobortis. Mauris imperdiet eros elementum lectus dapibus, vitae eleifend enim commodo. Donec malesuada nisl arcu, vel sagittis urna ultricies eget.'
                    },
                    id: 'paciente'
                },
                {
                    nombre: 'medico',
                    icono: 'zmdi zmdi-account-box-o',
                    titulo: 'titulo2',
                    descripcion: {
                        breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        larga: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique pretium sapien eget egestas. Quisque egestas nibh eget nunc commodo, non fermentum elit tristique. Vestibulum ut turpis id nunc ornare lobortis. Mauris imperdiet eros elementum lectus dapibus, vitae eleifend enim commodo. Donec malesuada nisl arcu, vel sagittis urna ultricies eget.'
                    },
                    id: 'medico'
                },
                {
                    nombre: 'sistema de salud',
                    icono: 'zmdi zmdi-hospital',
                    titulo: 'titulo3',
                    descripcion: {
                        breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        larga: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique pretium sapien eget egestas. Quisque egestas nibh eget nunc commodo, non fermentum elit tristique. Vestibulum ut turpis id nunc ornare lobortis. Mauris imperdiet eros elementum lectus dapibus, vitae eleifend enim commodo. Donec malesuada nisl arcu, vel sagittis urna ultricies eget.'
                    },
                    id: 'sistema'
                },
                {
                    nombre: 'laboratorio',
                    icono: 'zmdi zmdi-lamp',
                    titulo: 'titulo4',
                    descripcion: {
                        breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        larga: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique pretium sapien eget egestas. Quisque egestas nibh eget nunc commodo, non fermentum elit tristique. Vestibulum ut turpis id nunc ornare lobortis. Mauris imperdiet eros elementum lectus dapibus, vitae eleifend enim commodo. Donec malesuada nisl arcu, vel sagittis urna ultricies eget.'
                    },
                    id: 'laboratorio'
                }
            ];
            self.serviciosRow1 = [
                {
                    nombre: 'paciente',
                    icono: 'zmdi zmdi-male-alt',
                    titulo: 'titulo1',
                    descripcion: {
                        breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        larga: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique pretium sapien eget egestas. Quisque egestas nibh eget nunc commodo, non fermentum elit tristique. Vestibulum ut turpis id nunc ornare lobortis. Mauris imperdiet eros elementum lectus dapibus, vitae eleifend enim commodo. Donec malesuada nisl arcu, vel sagittis urna ultricies eget.'
                    },
                    id: 'paciente'
                },
                {
                    nombre: 'medico',
                    icono: 'zmdi zmdi-account-box-o',
                    titulo: 'titulo2',
                    descripcion: {
                        breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        larga: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique pretium sapien eget egestas. Quisque egestas nibh eget nunc commodo, non fermentum elit tristique. Vestibulum ut turpis id nunc ornare lobortis. Mauris imperdiet eros elementum lectus dapibus, vitae eleifend enim commodo. Donec malesuada nisl arcu, vel sagittis urna ultricies eget.'
                    },
                    id: 'medico'
                }
            ];
            self.serviciosRow2 = [
                {
                    nombre: 'sistema de salud',
                    icono: 'zmdi zmdi-hospital',
                    titulo: 'titulo3',
                    descripcion: {
                        breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        larga: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique pretium sapien eget egestas. Quisque egestas nibh eget nunc commodo, non fermentum elit tristique. Vestibulum ut turpis id nunc ornare lobortis. Mauris imperdiet eros elementum lectus dapibus, vitae eleifend enim commodo. Donec malesuada nisl arcu, vel sagittis urna ultricies eget.'
                    },
                    id: 'sistema'
                },
                {
                    nombre: 'laboratorio',
                    icono: 'zmdi zmdi-lamp',
                    titulo: 'titulo4',
                    descripcion: {
                        breve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        larga: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique pretium sapien eget egestas. Quisque egestas nibh eget nunc commodo, non fermentum elit tristique. Vestibulum ut turpis id nunc ornare lobortis. Mauris imperdiet eros elementum lectus dapibus, vitae eleifend enim commodo. Donec malesuada nisl arcu, vel sagittis urna ultricies eget.'
                    },
                    id: 'laboratorio'
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
        //Animar el scroll entre secciones (scrollspy)
        self.scrollTo = function(index){
              var self = this;
              var seccion = angular.element(document.getElementById(self.servicios[index].id));
                $document.scrollToElementAnimated(seccion);
                console.log(self.serviciosRow1[index].id);
            };
            //Animar el scroll entre secciones (scrollspy, cuando estan en cuadricula)
        self.scrollToRow1 = function(index){
              var self = this;
              var seccion = angular.element(document.getElementById(self.serviciosRow1[index].id));
                $document.scrollToElementAnimated(seccion);
                console.log(self.servicios[index].id);
            };
        self.scrollToRow2 = function(index){
              var self = this;
              var seccion = angular.element(document.getElementById(self.serviciosRow2[index].id));
                $document.scrollToElementAnimated(seccion);
                console.log(self.serviciosRow2[index].id);
            };
    });

})();