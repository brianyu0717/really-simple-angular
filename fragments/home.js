(function () {
	var app = angular.module("homePageModule", ['ngRoute']);

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'fragments/home.html',
			controller: 'HomeCtrl'
		});
	}]);
	
	app.controller('HomeCtrl', [function() {
		console.log('HomeCtrl');
	}]);
})();