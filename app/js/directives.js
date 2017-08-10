;
(function() {
	var directives = angular.module('directives', []);

	/**********************头部导航栏start*******************************/

	//----------登录注册的组件

	directives.directive('logheader', [function() {

		return {
			templateUrl: '../app/html/John/directive/logheader.html',
			link: function(scope, ele, attr) {
				scope.abc = '123'
			}
		}
	}]);

	directives.directive('xlogin', [function() {
		return {
			templateUrl: '../app/html/John/directive/xlogin.html',
			link: function(scope, ele, attr) {

			}
		}
	}]);

	directives.directive('xreg', [function() {
		return {
			templateUrl: '../app/html/John/directive/xreg.html',
			link: function(scope, ele, attr) {

			}
		}
	}]);
	//------------------

	directives.directive('topnav', function() {
		console.log(222)
		return {

			templateUrl: '../app/html/heziyang/topNav.html',
			link: function(scope, ele, attr) {
				scope.bool = false;
				scope.show = function() {
					scope.bool = true;

				}
				scope.hide = function() {
					scope.bool = false;
				}
				scope.nav_content = [{
						id: 1,
						title: 'Html/Css'
					},
					{
						id: 2,
						title: 'JavaScript'
					},
					{
						id: 3,
						title: 'c#'
					},
					{
						id: 4,
						title: 'swift'
					},
					{
						id: 5,
						title: 'c++'
					},
					{
						id: 6,
						title: 'Java'
					},
					{
						id: 7,
						title: 'IOS'
					},
					{
						id: 8,
						title: 'Cordova'
					},
					{
						id: 9,
						title: 'nodejs'
					},
					{
						id: 10,
						title: 'PHP'
					},
					{
						id: 11,
						title: 'JavaEE'
					},
					{
						id: 12,
						title: 'Objective-C'
					},
					{
						id: 13,
						title: 'C语言'
					},
					{
						id: 14,
						title: 'python'
					}
				]

			}
		}
	})
	/**********************头部导航栏end*******************************/

	directives.directive('cproductheader', function() {
		console.log(999)
		return {
			templateUrl: "../app/html/cxg/product/cproductheader.html",
			link(scope, ele, attr) {

			}
		}
	})

	directives.directive('clistcontent', function() {
		return {
			templateUrl: '../app/html/cxg/product/clistcontent.html',
			link(scope, ele, attr) {
				scope.arrs = [{
					time: '1小时前',
					review: '6',
					title: '微软用 Surface Book 和 Kinect 为 DJ 的音乐演出带来了全新的视觉体验',
					listdesc: '现场的效果就一个字——酷',
					imgurl: 'http://images.ifanr.cn/wp-content/uploads/2017/08/aw-microsoft-don-7642-sj-1.jpg!720'
				}, {

					time: '2小时前',
					review: '8',
					title: '蔡司想抢在这家北京公司前，拿下徕卡 45% 的股份？',
					listdesc: '正在暗中观察的蔡司，打算拿这 45% 的股份做什么？',
					imgurl: 'http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/08/Attaching-CZ-logo_01.jpg!720'
				}, {

					time: '3小时前',
					review: '26',
					title: '这款远程撒狗粮的神器，简直是铲屎官们的福音',
					listdesc: '喂狗粮的有了，能不能再给我来一个代替我铲屎的。',
					imgurl: 'http://images.ifanr.cn/wp-content/uploads/2017/08/3-4.gif!720'
				}, {

					time: '4小时前',
					review: '122',
					title: 'IBM 和索尼合作，带着一项“老古董”产物创下世界纪录',
					listdesc: '想不到吧！60 年前的东西，现在还能焕发新生...',
					imgurl: 'http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/08/35668427212_5dcc08c4b8_o.0.jpg!720'
				}, {

					time: '5小时前',
					review: '88',
					title: 'MIUI 9 体验：一个给不了你太多惊喜，但却非常务实的老伙计',
					listdesc: '“无法接受解锁手机需要做一个像照镜子一样的操作。”',
					imgurl: 'http://images.ifanr.cn/wp-content/uploads/2016/08/MG_9326-1.jpg!720'
				}, {

					time: '6小时前',
					review: '77',
					title: '再喜欢麦当劳这款扬声器，你也买不到了',
					listdesc: '买不到，可以自己 DIY 一个试试看',
					imgurl: 'http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/08/Mcdonalds_Stacklab_Boombox_Product_Design_Its_Nice_That_-1.jpg!720'
				}]

			}
		}
	})

	directives.directive('cpersonhead', function() {
		//		console.log(999)
		return {
			templateUrl: "../app/html/cxg/person/cpersonhead.html",
			link(scope, ele, attr) {

			}
		}
	})
	directives.directive('cpersonlist', function() {
		return {
			templateUrl: '../app/html/cxg/person/cpersonlist.html',
			link(scope, ele, attr) {
				scope.arrs = [{
					time: '2小时前',
					review: '6',
					title: '把它变成一个数组，相同的合并？',
					listdesc: '在methods中创建的方法，怎么样去created中去掉用？',
					imgurl: 'http://images.ifanr.cn/wp-content/uploads/2017/08/aw-microsoft-don-7642-sj-1.jpg!720'
				}, {

					time: '2小时前',
					review: '8',
					title: 'angular公共视图',
					listdesc: 'angular的ui-router, 公共视图的路由怎么写啊？',
					imgurl: 'http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/08/Attaching-CZ-logo_01.jpg!720'
				}, {

					time: '3小时前',
					review: '26',
					title: '非父子组件通信',
					listdesc: 'vue子页面向父页面传参',
					imgurl: 'http://images.ifanr.cn/wp-content/uploads/2017/08/3-4.gif!720'
				}, {

					time: '4小时前',
					review: '122',
					title: 'I来，来，来，让你解释个让你抓狂的CSS效果，能解释吗？',
					listdesc: '这个是怎么回事，谁能给个解释？？？？',
					imgurl: 'http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/08/35668427212_5dcc08c4b8_o.0.jpg!720'
				}, {

					time: '5小时前',
					review: '1',
					title: 'javascript的构造函数只能使用一般的function来定义吗？',
					listdesc: '“除了一般的function(){}定义构造函数外，有没有别的写法”',
					imgurl: 'http://images.ifanr.cn/wp-content/uploads/2016/08/MG_9326-1.jpg!720'
				}, {

					time: '6小时前',
					review: '77',
					title: 'vue中如何获取data中的属性值',
					listdesc: '在函数中拿到这个组件实例的 vm 对象...',
					imgurl: 'http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/08/Mcdonalds_Stacklab_Boombox_Product_Design_Its_Nice_That_-1.jpg!720'
				}]

			}
		}
	})

	directives.directive('ccwordhead', function() {

		return {
			templateUrl: "../app/html/cxg/cword/ccwordhead.html",
			link(scope, ele, attr) {

			}
		}
	})

	directives.directive('ccwordlist', function() {
		return {
			templateUrl: '../app/html/cxg/cword/ccwordlist.html',
			link(scope, ele, attr) {
				scope.arrs = [{
					time: '2小时前',
					review: '6',
					title: 'C/C++ 中如何定义一个1字节的整数？',
					listdesc: '有没有办法定义一个1字节的整数呢？',
					imgurl: 'http://images.ifanr.cn/wp-content/uploads/2017/08/aw-microsoft-don-7642-sj-1.jpg!720'
				}, {

					time: '2小时前',
					review: '8',
					title: '怎么用c++将图片转成base64编码',
					listdesc: '',
					imgurl: 'http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/08/Attaching-CZ-logo_01.jpg!720'
				}, {

					time: '3小时前',
					review: '26',
					title: 'Cocos2dx Java调用C++怎么使用？',
					listdesc: '使用自带的jnihelper来完成C++调用Java部分',
					imgurl: 'http://images.ifanr.cn/wp-content/uploads/2017/08/3-4.gif!720'
				}, {

					time: '4小时前',
					review: '122',
					title: '关于程序优化的问题，c/c++赋值数组快慢问题？',
					listdesc: '应该从内存局部性和缺页命中这方面考虑...',
					imgurl: 'http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/08/35668427212_5dcc08c4b8_o.0.jpg!720'
				}, {

					time: '5小时前',
					review: '1',
					title: 'C++使用计时器管理对象周期有什么解决思路',
					listdesc: '对应Handler类中有...',
					imgurl: 'http://images.ifanr.cn/wp-content/uploads/2016/08/MG_9326-1.jpg!720'
				}, {

					time: '6小时前',
					review: '77',
					title: '关于php和c++ 的删除是否是一样的？',
					listdesc: '1.unset 是将变量占用的内存的标记由',
					imgurl: 'http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/08/Mcdonalds_Stacklab_Boombox_Product_Design_Its_Nice_That_-1.jpg!720'
				}]

			}
		}
	})
	directives.directive('xarticle', [function() {
		return {
			templateUrl: "../app/html/wuqian/directive/xarticle.html",
		}
	}]);

})();