(function () {
    'use strict';
    angular.module('app.e-siat')
    .controller('footerCtrl', function(){
    	var self = this;
    	self.direcciones = direcciones;
    });
    var direcciones = [
            {
                tipo: 'direccion',
                icono: 'zmdi zmdi-eye',
                valor: ' Av. Ricardo Rojas 6739 Of 1 | Bº Arguello Córdoba - Argentina',
                href: 'http://maps.google.com/?q=Ricardo Rojas 6739 Córdoba'
            },
            {
                tipo: 'telefono',
                icono: 'zmdi zmdi-phone',
                valor: '+54-351-639-9189',
                href: 'tel:3516399189'
            },
            {
                tipo: 'celular',
                icono: 'zmdi zmdi-smartphone',
                valor: '+54-351-2098200',
                href: 'tel:3512098200'
            },
            {
                tipo: 'email',
                icono: 'zmdi zmdi-email',
                valor: 'info@e-siat.net',
                href: 'mailto:info@e-siat.net'
            }


        ];
})();