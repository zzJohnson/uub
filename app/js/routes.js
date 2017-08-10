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
		 }).state('search',{
		 	url:'/search',
		 	templateUrl:'../app/html/heziyang/search.html'
		 })
		

// ----------------
		


		$stateProvider.state('index',{
			url:'/detail',
			templateUrl: '../app/html/wuqian/detail.html'
		})
		.state('clist',{
			url:'/clist',
		 	templateUrl:'../app/html/cxg/product/clist.html'
		}).state('cperson',{
			url:'/cperson',
		 	templateUrl:'../app/html/cxg/person/cperson.html'
		}).state('cword',{
			url:'/cword',
		 	templateUrl:'../app/html/cxg/cword/ccword.html'
		});
		




		$urlRouterProvider.when("","/index");
	}]);
})();