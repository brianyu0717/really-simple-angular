(function(){
	var app = angular.module('headerModule', ['ngRoute']);
	
	app.directive('pageHeader', function(){
		return {
			restrict: 'E',
			templateUrl: 'fragments/header.html',
			controller: function(){
				this.tab = 0;
				
				this.setTab = function(tab){
					console.log('tab is set to: ' + tab);
					this.tab = tab;
				}
				
				this.isTab = function(tab){
					console.log(this.tab === tab);
					return this.tab === tab;
				}
			},
			controllerAs: "tab"		
		};
	});
})();