;(function(){
	var directives = angular.module('directives',[]);
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
})();