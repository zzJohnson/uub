;(function(){
	var directives = angular.module('directives',[]);
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
})();
