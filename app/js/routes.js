;(function(){
	var routes = angular.module('routes',[]);
	routes.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){


//-------------模板
		
		 $stateProvider.state('nav',{
		 	url:'/nav',
		 	templateUrl:'../app/html/heziyang/test.html'
		 }).state('search',{
		 	url:'/search',
		 	templateUrl:'../app/html/heziyang/search.html'
		 })
		

// ----------------
		

//		$stateProvider.state('index',{
//			url:'/detail',
//			templateUrl: '../app/html/wuqian/detail.html'
//		});

		$urlRouterProvider.when("","/index");
	}]);
})();