;(function(){
	var routes = angular.module('routes',[]);
	routes.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){


//-------------模板
		
		// $stateProvider.state('index',{
		// 	url:'/index',
		// 	// templateUrl:''
		// 	template:`
		// 		<div>123</div>
		// 	`
		// })

// ----------------
		

		$stateProvider.state('index',{
			url:'/detail',
			templateUrl: '../app/html/wuqian/detail.html'
		});

		$urlRouterProvider.when("","/index");
	}]);
})();