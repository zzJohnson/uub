;(function(){
	var routes = angular.module('routes',[]);
	routes.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

//-------------模板
		
		 $stateProvider.state('index',{
		 	url:'/index',
		 	templateUrl:'../app/html/heziyang/test.html'
		 })
		 console.log(333)

//----------------
		
		$urlRouterProvider.when("","/index");
	}])

})();