;(function(){
	var routes = angular.module('routes',[]);
	routes.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){


//-------------登陆注册的路由
		
		$stateProvider.state('logreg',{
			url:'/logreg',
			templateUrl:'../app/html/John/template/logreg.html'
		})
		.state('logreg.login',{
			url:'/login',
			templateUrl:'../app/html/John/template/login.html'
		})
		.state('logreg.reg',{
			url:'/reg',
			templateUrl:'../app/html/John/template/reg.html'
		})
		
//----------------
		 $stateProvider.state('nav',{
		 	url:'/nav',
		 	templateUrl:'../app/html/heziyang/test.html'
		 })
		 // console.log(333)

// ----------------
		

		$stateProvider.state('index',{
			url:'/detail',
			templateUrl: '../app/html/wuqian/detail.html'
		});

		$urlRouterProvider.when("","/index");
	}]);
})();