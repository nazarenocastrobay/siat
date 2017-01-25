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
                            razon: 'AUTO EVALUACIÓN DE ADHERENCIA TERAPÉUTICA',
                            icono: 'zmdi zmdi-account-add',
                            descripcion: 'Acceso a métricas de consumo de dosis a través de la plataforma web'
                    },
                    {
                            razon: 'MAYOR CONTENCIÓN, SEGUIMIENTO Y APEGO AL TRATAMIENTO',
                            icono: 'zmdi zmdi-accounts-alt',
                            descripcion: 'Call center de acompañamiento y contención en el tratamiento y las gestiones relacionadas con este'
                    }
                    ,{
                            razon: 'APPS MÓVILES DE AUTOGESTIÓN',
                            icono: 'zmdi zmdi-smartphone-android',
                            descripcion: 'Pastillero electrónico, avisos de accidentes, Registro de dosis a demanda y articulaciones afectadas, aviso de de recepción de dosis.'
                    }]
            },
            {
                para: 'medico',
                razones: [{
                            razon: 'MAYOR COMUNICACIÓN CON EL PACIENTE',
                            icono: 'zmdi zmdi-account-box-phone',
                            descripcion: 'Chat directo desde la web o app, apartado e-learning para gestión de contenidos informativos.'
                    },
                    {
                            razon: 'ALERTAS DE RETRASO',
                            icono: 'zmdi zmdi-alert-circle',
                            descripcion: 'Alerta de retraso de toma de dosis, dosis a demanda y accidentes'
                    }
                    ,{
                            razon: 'SEGUIMIENTO EN TIEMPO REAL DEL TRATAMIENTO',
                            icono: 'zmdi zmdi-alarm-check',
                            descripcion: 'Desde la plataforma puede observar el estado del tratamiento en tiempo real, sin tener que esperar a la próxima consulta.'
                    }]  
            },
            {
                para: 'sistema de salud',
                razones: [{
                            razon: 'AUDITORÍA Y HERRAMIENTAS DE ADMINISTRACIÓN',
                            icono: 'zmdi zmdi-border-color',
                            descripcion: 'Gestión de archivos de reintegro y generación de foja de aplicación'
                    },
                    {
                            razon: 'MEJORA DE LOS ESTÁNDARES DE SERVICIO HACIA LOS AFILIADOS',
                            icono: 'zmdi zmdi-plus-square',
                            descripcion: 'Atención telefónica específica de la patología, evacuación de primeras consultas y gestion de tramites.'
                    }
                    ,{
                            razon: 'GESTIÓN DIGITAL DE DOCUMENTOS',
                            icono: 'zmdi zmdi-file',
                            descripcion: 'Reportes, informes, pedidos, recetas, etc.'
                    }]  
            },
            {
                para: 'laboratorio',
                razones: [{
                            razon: 'INNOVACIÓN TECNOLÓGICA',
                            icono: 'zmdi zmdi-devices',
                            descripcion: 'Estadísticas de comportamiento para el rediseño de dosis o sistemas de aplicación'
                    },
                    {
                            razon: 'ANÁLISIS ESTADÍSTICO DE DATOS',
                            icono: 'zmdi zmdi-chart',
                            descripcion: 'Estadísticas de consumo'
                    }
                    ,{
                            razon: 'CONFIRMACIÓN DE ADMINISTRACIÓN DE DOSIS',
                            icono: 'zmdi zmdi-check-all',
                            descripcion: 'Trazabilidad del medicamento por lote hasta su aplicación'
                    }]  
            }

        ];
})();
