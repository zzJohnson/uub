;(function(){
	var routes = angular.module('routes',[]);
	routes.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
		$stateProvider.state('index',{
			url:'/detail',
			templateUrl: '../app/html/wuqian/detail.html'
		});
		$urlRouterProvider.when("","/index");
	}]);
})();