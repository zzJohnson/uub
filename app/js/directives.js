;
(function() {
	var directives = angular.module('directives', []);

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

				scope.show = function() {
					console.log(111)
				}
			}
		}
	})

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
	directives.directive('xarticle', [function() {
		return {
			templateUrl: "../app/html/wuqian/directive/xarticle.html",
		}
	}]);

})();