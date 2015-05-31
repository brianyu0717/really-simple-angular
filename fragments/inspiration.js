(function(){
	var app = angular.module("inspirationPageModule", ['ngRoute']);
	
	app.directive("inspirationPage", function(){
		return {
			restrict: 'E',
			templateUrl: 'fragments/inspiration.html'
		};
	});
	
	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/inspiration', {
			templateUrl: 'fragments/inspiration.html',
			controller: 'InspirationCtrl'
		});
	}]);
	
	app.controller('InspirationCtrl', [function() {
		console.log('InspirationCtrl');
	}]);
})();