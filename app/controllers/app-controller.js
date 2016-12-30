(function () {
    'use strict';
    angular.module('app.e-siat').controller('appCtrl', appCtrl);
    function appCtrl ($location, $timeout, linkFactory, $scope, $log ){
    	
    	var self = this;

    	//HEADER Inicializa header title
    	self.header = {};
    	self.header.title = "E-Siat";

		//Funcion general de navegacion entre views
		self.goTo = function (data) {
			$location.path('/'+data);
		}
    $location.path('/');
    }
})();