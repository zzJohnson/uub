;(function(){
	var directives = angular.module('directives',[]);

	/**********************头部导航栏start*******************************/

//----------登录注册的组件
	
	directives.directive('logheader',[function(){
		return {
			templateUrl:'../app/html/John/directive/logheader.html',
			link:function(scope,ele,attr){
				scope.abc = '123'
			}
		}
	}]);

	directives.directive('xlogin',[function(){
		return {
			templateUrl:'../app/html/John/directive/xlogin.html',
			link:function(scope,ele,attr){

			}
		}
	}]);

	directives.directive('xreg',[function(){
		return {
			templateUrl:'../app/html/John/directive/xreg.html',
			link:function(scope,ele,attr){
				
			}
		}
	}]);
//------------------

	directives.directive('topnav',function(){console.log(222)
		return {
			templateUrl:'../app/html/heziyang/topNav.html',
			link:function(scope,ele,attr){
				scope.bool = false;
				scope.show = function(){
					scope.bool = true;
				}
				scope.hide = function(){
					scope.bool = false;
				}
				scope.nav_content = [
					{id:1,title:'Html/Css'},
					{id:2,title:'JavaScript'},
					{id:3,title:'c#'},
					{id:4,title:'swift'},
					{id:5,title:'c++'},
					{id:6,title:'Java'},
					{id:7,title:'IOS'},
					{id:8,title:'Cordova'},
					{id:9,title:'nodejs'},
					{id:10,title:'PHP'},
					{id:11,title:'JavaEE'},
					{id:12,title:'Objective-C'},
					{id:13,title:'C语言'},
					{id:14,title:'python'}
				]
				
			}
		}
	})
	/**********************头部导航栏end*******************************/

	directives.directive('c-product-header',function(){
		return {
			templateUrl:"chtml/c-product-header.html",
			link(){

			}
		}
	})
	directives.directive('c-product-list',function(){
		return {
			templateUrl:'chtml/c-product-list.html',
			link(){
				
			}
		}
	})
	directives.directive('xarticle',[function(){
		return {
			templateUrl:"../app/html/wuqian/directive/xarticle.html",
		}
	}]);

})();

