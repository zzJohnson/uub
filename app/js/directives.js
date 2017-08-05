;(function(){
	var directives = angular.module('directives',[]);

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
				
				scope.show = function(){
					console.log(111)
				}
			}
		}
	})

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

