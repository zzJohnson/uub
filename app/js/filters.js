;(function(){
	var filters = angular.module('filters',[]);
	//更改时间戳过滤器
	filters.filter('time',function(){
		return function(input){
			var oDate1 = new Date(input);
			var oDate = new Date();
			var nTime = oDate.getTime() - oDate1.getTime();  
			var hour = Math.floor(nTime/1000/60/60); 
			return hour
		}
	})
})();
