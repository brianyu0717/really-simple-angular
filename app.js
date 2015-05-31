(function(){
	var app = angular.module('cake', ['headerModule', 'homePageModule', 'inspirationPageModule', 'ngRoute']);
	
	console.log('main app');
	
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.otherwise({
			redirectTo: '/index.html'
		});
	}]);
})();