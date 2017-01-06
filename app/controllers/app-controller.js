(function () {
    'use strict';
    angular.module('app.e-siat').controller('appCtrl', appCtrl);
    function appCtrl ($location, $timeout, linkFactory, $scope, $log, $mdSidenav ){
    	
    	var self = this;

    	//HEADER Inicializa header title
    	self.header = {};
    	self.header.title = "E-Siat Sistema de Adherencia Terapeutica";
        self.header.logo = "assets/img/siat_logo.png";

		//Funcion general de navegacion entre views
		self.goTo = function (data) {
			$location.path('/'+data);
		} 
        self.toggleLeft = buildToggler('left');
        self.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
          return function() {
            $mdSidenav(componentId).toggle()
            .then(function(){
                $log.debug('toggled');
            });
          }
        }

    //Animar el scroll entre secciones
    self.scrollTo = function(section){
            $('html, body').animate({scrollTop:$(section).position().top}, 1000);
            console.log(section);

      };

    $location.path('/');
    }
})();