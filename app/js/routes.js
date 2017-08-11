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
		
//-------------我的 路由
		$stateProvider.state('mine',{
			url:'/mine',
			templateUrl:'../app/html/John/template/mine.html'
		})
		.state('mine.collect',{
			url:'/collect',
			templateUrl:'../app/html/John/template/collect.html'
		})
		.state('mine.state',{
			url:'/state',
			templateUrl:'../app/html/John/template/state.html'
		})
		.state('mine.msg',{
			url:'/msg',
			templateUrl:'../app/html/John/template/msg.html'
		})

//----------------
		 $stateProvider.state('nav',{
		 	url:'/nav',
		 	templateUrl:'../app/html/heziyang/test.html'
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
		


		$stateProvider.state('detail',{
			url:'/detail',
			templateUrl: '../app/html/wuqian/detail.html'
		});


//-----------------首页路由
		$stateProvider.state('home',{
			url:'/home',
			templateUrl:"../app/html/ma/template/home.html"
		})


		$urlRouterProvider.when("","/home");
	}]);
})();