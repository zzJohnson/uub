;(function(){
	var routes = angular.module('routes',[]);
	routes.config(function($stateProvider,$urlRouterProvider){
		$stateProvider.state('index',{
			url:'/index',
//			templateUrl:''
		})
		$urlRouterProvider.otherwise('/index/home')
	})
})();