(function () {
    'use strict';
    angular.module('app.e-siat')
    .config(['$routeProvider',function($routeProvider) {
		$routeProvider
			.when('/404',{ templateUrl: 'app/views/404.html', controller: 'notFoundCtrl'})
			.when('/',{ templateUrl: 'app/views/landing.html'})
			.otherwise({ redirectTo: '/404'});
	}]);
})();