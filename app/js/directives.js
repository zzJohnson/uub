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
	//--------详情页组件----------
	directives.directive('xarticle',["$http", "$window", function($http, $window){
		return {
			templateUrl:"../app/html/wuqian/directive/xarticle.html",
			link:function(scope,ele,attr){
				scope.data =[{ 
					"id": "90c3f6fd-09e9-4846-ad05-3b70b8705e4a",
					"title": "React入门与进阶之路由", 
					"description": "React入门与进阶之路由在传统的网页应用中，一般是根据用户的操作指向不同的url，然后服务器渲染出不同的html代码，后来有了ajax，在同一页面里，可以为不同操作，指定处理器函数，在不刷新页面的情况下更新局部视图，但是局限依然较大，一旦跳转了URL，依然需要服务器渲染模板返回；而在Backbone，Angular，React出现以后，在单页面应用中，我们可以给不同URL指定处理器函数，保持URL与视图的同步，渲染模板的功能已经转移到客户端进行，与服务器的交互只涉及到数据，这就是路由的", 
					"author": null, 
					"category": "IBM", 
					"reference": null, 
					"descryptUrl": "http://www.open-open.com/lib/view/open1476672571570.html", 
					"releaseTime": null, 
					"createOn": 1492317000355, 
					"module": null, 
					"p1": "React入门与进阶之路由在传统的网页应用中，一般是根据用户的操作指向不同的url，然后服务器渲染出不同的html代码，后来有了ajax，在同一页面里，可以为不同操作，指定处理器函数，在不刷新页面的情况下更新局部视图，但是局限依然较大，一旦跳转了URL，依noting列表);} }); React.render(<app />, document.body)。" ,
					"p2": "如上，点击noting列表将导航到项目noting列表展示页，即/notings路由下。 IndexLink 不同于Link指令，Link指令是提供一个链接，而React路由的Link是有激活状态的，如它的activeStyle属性，可以声明当前页面链接激活时的样式，假如有一个Link链接 noting列表，当/notings路由或其子路由（如/notings/123）被渲染时，都会使该链接处于激活状态；而如果使用 noting列表，则需要/notings路由被渲染后才激活该链接。",
					"p3": "来自 : http://blog.codingplayboy.com/2016/10/24/react_router/  ",
					"pinlun":"4",
					"zan":"23",
					"zhuanf":"34",
				}];
				console.log(scope.data)
			}
		}
	}]);
	directives.directive('xcomment',[function(){
		return {
			templateUrl:"../app/html/wuqian/directive/xcomment.html",
		}
	}]);
	directives.directive('xfooter',[function(){
		return {
			templateUrl:"../app/html/wuqian/directive/xfooter.html",
		}
	}]);

})();

