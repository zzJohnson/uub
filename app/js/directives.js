;(function(){
	var directives = angular.module('directives',[]);
//----------登录注册的头部
	
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
})();
