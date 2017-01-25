(function () {
    'use strict';
    angular.module('app.e-siat')
    .controller('porqueCtrl', function(){
    	var self = this;
    	self.porque = porque;
    });
    var porque = [
            {
                para: 'paciente',
                razones: [{
                            razon: 'autoevaluacion de adherencia terapeutica',
                            icono: 'zmdi zmdi-account-add'
                    },
                    {
                            razon: 'mayor contencion, seguimiento y apego al seguimiento',
                            icono: 'zmdi zmdi-accounts-alt'
                    }
                    ,{
                            razon: 'apps moviles de autogestion',
                            icono: 'zmdi zmdi-smartphone-android'
                    }]
            },
            {
                para: 'medico',
                razones: [{
                            razon: 'mayor comunicacion con el paciente',
                            icono: 'zmdi zmdi-account-box-phone'
                    },
                    {
                            razon: 'alertas de retraso',
                            icono: 'zmdi zmdi-alert-circle'
                    }
                    ,{
                            razon: 'seguimiento en tiempo real del tratamiento',
                            icono: 'zmdi zmdi-alarm-check'
                    }]  
            },
            {
                para: 'sistema de salud',
                razones: [{
                            razon: 'auditoria y herramientas de administracion',
                            icono: 'zmdi zmdi-border-color'
                    },
                    {
                            razon: 'mejora de los standares de servicio hacia los afiliados',
                            icono: 'zmdi zmdi-plus-square'
                    }
                    ,{
                            razon: 'gestion digital de documentos',
                            icono: 'zmdi zmdi-file'
                    }]  
            },
            {
                para: 'laboratorio',
                razones: [{
                            razon: 'Innovacion tecnologica',
                            icono: 'zmdi zmdi-devices'
                    },
                    {
                            razon: 'analisis estadistico de datos',
                            icono: 'zmdi zmdi-chart'
                    }
                    ,{
                            razon: 'confirmacion de administracion de dosis',
                            icono: 'zmdi zmdi-check-all'
                    }]  
            }

        ];
})();
