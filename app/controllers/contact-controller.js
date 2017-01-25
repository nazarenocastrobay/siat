(function () {
    'use strict';
    angular.module('app.e-siat')

	.controller('contactCtrl', function($http, $window, $scope) {
	  var self = this;

	  // create a blank object to hold our form information
        // $scope will allow this to pass between controller and view
        $scope.formData = {};

        // process the form
        $scope.processForm = function () {
        	console.log($scope.formData);
            $http({
                method: 'POST',
                url: 'api/send-email.php',
                data: $.param($scope.formData),  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)  
            })
                .success(function (data) {
                    console.log(data);
                    $scope.message = data.message;
                });

		};
	});
})();