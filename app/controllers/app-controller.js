(function () {
    'use strict';
    angular.module('app.e-siat').controller('appCtrl', appCtrl).value('duScrollOffset', 55);
    function appCtrl ($location, $timeout, linkFactory, $scope, $log, $mdSidenav, $document ){
    	
    	var self = this;

    	//HEADER Inicializa header title
    	self.header = {};
    	self.header.title = "E-Siat Sistema de Adherencia Terapeutica";
        self.header.logo = "assets/img/siat_logo.png";

		//Funcion general de navegacion entre views
		self.goTo = function (data) {
			$location.path('/'+data);
		} 

        //Side Nav Button
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
    //**********SCROLLING***********************//
      //Animar el scroll entre secciones (scrollspy)
      self.scrollTo = function(section){
              var self = this;
              var seccion = angular.element(document.getElementById(section));
                $document.scrollToElementAnimated(seccion);
            };
      self.scrollToSidenav = function(section){
              var self = this;
              var seccion = angular.element(document.getElementById(section));
                $document.scrollToElementAnimated(seccion);
                //Cerrar sidenav cuando se elige la seccion en celulares
                $mdSidenav('left').toggle()
            };
      //Animar el ScrollTop
      self.scrollTop = function (){
              var top = 0;
              var duration = 1500;
              $document.scrollTopAnimated(top, duration);
      };


    $location.path('/');
      }


    
    
})();