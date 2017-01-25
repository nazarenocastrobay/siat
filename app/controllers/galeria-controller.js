(function () {
    'use strict';
    angular.module('app.e-siat')
    .controller('galeriaCtrl', function($mdDialog){
        var self = this;

        self.galeria = [
                {
                    titulo: 'imagen1',
                    imagen: 'bg-background.png',
                    mdRow: '2',
                    top: '60%'
                },
                {
                    titulo: 'imagen2',
                    imagen: 'bg-background.png',
                    mdRow: '1',
                    top: '75%'
 
                },
                {
                    titulo: 'imagen3',
                    imagen: 'bg-background.png',
                    mdRow: '2',
                    top: '60%'

                },
                {
                    titulo: 'imagen4',
                    imagen: 'bg-background.png',
                    mdRow: '2',
                    top: '60%'

                },
                {
                    titulo: 'imagen5',
                    imagen: 'bg-background.png',
                    mdRow: '2',
                    top: '60%'
                },
                {
                    titulo: 'imagen6',
                    imagen: 'bg-background.png',
                    mdRow: '1',
                    top: '75%'
                },
                {
                    titulo: 'imagen7',
                    imagen: 'bg-background.png',
                    mdRow: '1',
                    top: '75%'
                },
                {
                    titulo: 'imagen8',
                    imagen: 'bg-background.png',
                    mdRow: '1',
                    top: '75%'
                },

            ];
        //Pasar variables de Galeria a Foto Controller, Activar boton para mostrar modulo
        self.showAdvanced = function(index) {
            $mdDialog.show({
              templateUrl: 'app/layout/foto.html',
              parent: angular.element(document.body),
              //targetEvent: ev,
              clickOutsideToClose:true,
              fullscreen: self.customFullscreen, // Only for -xs, -sm breakpoints.
              locals: {
                imagen: self.galeria[index].imagen,
                titulo: self.galeria[index].titulo
              },
              controller: 'fotoCtrl as foto'
            });
            console.log(self.galeria[index].titulo)
        };
    });

})();