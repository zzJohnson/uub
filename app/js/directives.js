;
(function() {
	var directives = angular.module('directives', []);

	/**********************头部导航栏start*******************************/


//----------登录注册的路由
	//logreg头部
	directives.directive('logheader',["$http","$state","$window","$rootScope",function($http,$state,$window,$rootScope){
		return {
			templateUrl:'../app/html/John/directive/logheader.html',
			link:function(scope,ele,attr){
				// console.log($state.params)
				console.log(window.location.hash.split('/')[2]);
				var l = window.location.hash.split('/')[2];
				
				if (l == 'login') {
					scope.isSelected = true;
				}else if(l == 'reg'){
					scope.isSelected = false;
				}

				var user = localStorage.getItem('user');
				if (user) {
					alert('已登录');
					location.href = "#!/mine/collect";
					window.location.reload();
				}

				//高亮
				scope.changeSelected = function(a){
					if(a == 'login'){
						scope.isSelected = true;
					}else if(a == 'reg'){
						scope.isSelected = false;
					}
				}

			}
		}
	}]);


	//登陆
	directives.directive('xlogin',[function(){
		return {
			templateUrl:'../app/html/John/directive/xlogin.html',
			link:function(scope,ele,attr){

				//判断cookie中有无用户列表，有则获取，无则创建
				var cookies = document.cookie;
				var userlist;
				if (cookies.length>0) {
					//拆分成数组
					cookies = cookies.split('; ');
					cookies.forEach(function(item){
						var arr = item.split('=');
						if (arr[0]==='userlist') {
							userlist = arr[1];
						}
					})
				}else{
					userlist = [];
					userlist = JSON.stringify(userlist);
					document.cookie = 'userlist='+userlist;
				}

				userlist = JSON.parse(userlist);
				// console.log('获取到的userlist：',userlist)

				//记录数值
				scope.username = '';
				scope.password = '';

				//错误提醒
				scope.warn = '123';
				scope.isShowWarn = false;

				//focus 下边框加深效果
				scope.showuser = false;
				scope.showpsw = false;
				scope.isfocus = function(a){
					scope.isShowWarn = false;

					if (a == 1) {
						scope.showuser = !scope.showuser;
					} else if (a == 2){
						scope.showpsw = !scope.showpsw;
					}

					if (scope.username != '' && scope.password != '') {
						scope.canreg = true;
					}
				}

				scope.login = function(){
					var un = scope.username;
					var psw = scope.password;

					var ishave = true;
					userlist.forEach(function(item){
						var i = JSON.parse(item)
						if (i.un == un) {
							ishave = !ishave;
							if (i.psw == psw) {
								console.log('登陆成功')
								var user = {un:i.un,psw:i.psw};
								localStorage.setItem('user',JSON.stringify(user));
								console.log(localStorage.getItem('user'));
								location.href = "#";
								window.location.reload();
							}else{
								scope.warn = '密码错误';
								scope.isShowWarn = true;
							}
						}
					})

					if (ishave) {
						scope.warn = '没有该用户名';
						scope.isShowWarn = true;
					}

				}


			}
		}
	}]);


	//注册
	directives.directive('xreg',[function(){
		return {
			templateUrl:'../app/html/John/directive/xreg.html',
			link:function(scope,ele,attr){
				//判断是否已经登陆
				if (localStorage.getItem('user')) {
					console.log('已登录')

				};

				//判断cookie中有无用户列表，有则获取，无则创建
				var cookies = document.cookie;
				var userlist = [];
				userlist = JSON.stringify(userlist)
				if (cookies.length>0) {
					//拆分成数组
					cookies = cookies.split('; ');
					cookies.forEach(function(item){
						var arr = item.split('=');
						if (arr[0]==='userlist') {
							userlist = arr[1];
						}
					})
				}

				userlist = JSON.parse(userlist);
				// console.log(userlist)

				//记录数值
				scope.email = '';
				scope.username = '';
				scope.password = '';
				scope.repassword = '';

				//focus 下边框加深效果
				scope.showemail = false;
				scope.showuser = false;
				scope.showpsw = false;
				scope.showrpsw = false;

				//是否能按按钮
				scope.canreg = false;

				//错误提醒
				scope.warn = '请输入邮箱';
				scope.isShowWarn = false;

				scope.isfocus = function(a){
					scope.isShowWarn = false;
					if (a == 1) {
						scope.showemail = !scope.showemail;
					} else if (a == 2){
						scope.showuser = !scope.showuser;
					} else if (a == 3){
						scope.showpsw = !scope.showpsw;
					} else if (a == 4){
						scope.showrpsw = !scope.showrpsw;
					}

					if (scope.email != '' && scope.username != '' && scope.password != '' && scope.repassword != '') {
						scope.canreg = true;
					}

				}

				//检测错误及注册
				scope.checkAll = function(){

					if (!/^[\w\-\.]+@[a-z\d]+(\.[a-z]+){1,2}$/.test(scope.email)) {
						scope.warn = '邮箱不符合规范';
						scope.isShowWarn = true;
						return false;
					}

					if(!/^[\w\-]{3,20}$/.test(scope.username)){
						scope.warn = '昵称要求 6-20位 中英文数字或'-'符号';
						scope.isShowWarn = true;
						return false;
					}

					var isrepeat = false;
					userlist.forEach(function(item){
						item = JSON.parse(item);

						if (scope.username == item.un) {
							scope.warn = '已有的昵称';
							scope.isShowWarn = true;
							isrepeat = true;
						}
					})

					if(isrepeat){
						return false;
					}

					if(!/^\S{6,20}$/.test(scope.password)){
						scope.warn = '密码要求 6-20位';
						scope.isShowWarn = true;
						return false;
					}

					if(scope.repassword != scope.password){
						scope.warn = '确认密码不一致';
						scope.isShowWarn = true;
						return false;
					}

					var user = {
						un:scope.username,
						psw:scope.password
					};
					user = JSON.stringify(user);
					userlist.push(user);

					userlist = JSON.stringify(userlist);

					// console.log(userlist);

					document.cookie = 'userlist='+userlist;
					
					localStorage.setItem('user',JSON.stringify(user));

					alert('注册成功,已自动登陆');
					location.href = '#';
					window.location.reload();
				}
			}
		}
	}]);

//------------mine的路由
	//mine头部
	directives.directive('xmyh',[function(){
		return {
			templateUrl:"../app/html/John/directive/xmyh.html",
			link(scope,ele,attr){
				scope.user = JSON.parse(localStorage.getItem('user'));
				if (!scope.user) {
					alert('请先登录');
					location.href = "#!/home";
				}
				
				location.href = "#!/mine/collect";

				//退出
				scope.quit = function(){
					// console.log('退出');
					localStorage.removeItem('user');
					window.location.reload();
				};

				//tabs选择
				scope.tabs = [{
					id:'state',
					text:'我的动态'
				},{
					id:'collect',
					text:'我的收藏'
				},{
					id:'msg',
					text:'消息中心'
				}];

				scope.selectedTab = localStorage.getItem('m');

				scope.select = function(a){
					console.log(a)
					scope.selectedTab = a;
					localStorage.setItem('m',a)
					location.href = "#!/mine/"+a;
				};
			}
		}
	}]);
	
	//收藏
	directives.directive('xcollect',[function(){
		return {
			templateUrl:"../app/html/John/directive/xcollect.html",
			link(scope,ele,attr){
				scope.collect = [{
					title:'被动画师们嫌弃了一个世纪的转描技术，却一直活到了今天',
					pic:'http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/08/maxresdefault-4.jpg',
					name:'动画学术趴',
					date:'今天 14:48'
				},{
					title:'iPhone 8 又曝新特性：智能场景相机+人脸识别平放可用',
					pic:'http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/08/forbes-iphone-8-2-1024x576.jpg',
					name:'胡洋',
					date:'今天 08:12'
				},{
					title:'这个建在铁轨上的旧城区，仿佛就是行走的 798 艺术区',
					pic:'http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2017/08/moss.jpg',
					name:'李超凡',
					date:'今天 08:15'
				}]
			}
		}
	}]);

	//动态
	directives.directive('xstate',[function(){
		return {
			templateUrl:"../app/html/John/directive/xstate.html",
			link(scope,ele,attr){
				
			}
		}
	}]);

	//消息
	directives.directive('xmsg',[function(){
		return {
			templateUrl:"../app/html/John/directive/xmsg.html",
			link(scope,ele,attr){
				

			}
		}
	}]);
	//------------------


	directives.directive('topnav',function(){

		return {

			templateUrl: '../app/html/heziyang/topNav.html',
			link: function(scope, ele, attr) {
				scope.bool = false;

				scope.searchBool = false;
				scope.isShow = false;
				scope.isHide = true;
				scope.inputContent = '';
				scope.change = function(){
					console.log(scope.inputContent)
				}
				scope.show = function(){
					scope.bool = true;
					scope.isShow = true;

				}
				scope.hide = function() {
					scope.bool = false;
				}

				scope.switchSearchBar = function(){
					scope.searchBool = true;
					scope.bool = false;
					scope.isHide = false;
//					scope.inputContent = '';
				}
				scope.search_quit = function(inputContent){
					scope.inputContent = '';
					scope.searchBool = false;
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
				scope.login_area_bool = true;
				if(localStorage.getItem('user')) {
					scope.username = JSON.parse(localStorage.getItem('user')).un;
					scope.login_area_bool = false;
				}
				scope.quit = function(){
					localStorage.removeItem('user');
					scope.login_area_bool = true;
					scope.username = '';
				}
				scope.toLogin = function() {
					scope.bool = false;
					scope.isShow = false;
				}
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
	/**********************详情页组件*******************************/
	//--------详情页技术内容组件----------
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
					"time":"6",
				}];
			}
		}
	}]);
	//--------详情页技术评论组件----------
	directives.directive('xcomment',[function(){
		return {
			templateUrl:"../app/html/wuqian/directive/xcomment.html",
			link:function(scope,ele,attr){
				scope.showMore=function(){
					scope.isShowMore = true;
					
				}
			}
		}
	}]);
	//--------详情页技术底部组件----------
	directives.directive('xfooter',[function(){
		return {
			templateUrl:"../app/html/wuqian/directive/xfooter.html",
		}
	}]);
	//--------详情页技术更多评论组件----------
	directives.directive('xmorecomment',[function(){
		return {
			templateUrl:"../app/html/wuqian/directive/xmorecomment.html",
			link:function(scope,ele,attr){
				scope.isShowMore = false;
				scope.comment=[{
					"id":"1",
					"imgurl":"../app/images/01.png",
					"name":"星星点灯",
					"zan":4,
					"pl":"学习很多东西，简直是大神级别，哈哈",
					"comefrom":"android",
					"time":"13:45",
				},
				{
					"id":"2",
					"imgurl":"../app/images/02.png",
					"name":"星星点灯2",
					"zan":3,
					"pl":"打字时移动光标的便利和app便捷操作真的没法比",
					"comefrom":"iphone",
					"time":"16:12",
				},
				{
					"id":"3",
					"imgurl":"../app/images/03.png",
					"name":"星星点灯3",
					"zan":5,
					"pl":"学习很多知识，深思",
					"comefrom":"华为",
					"time":"4:45",
				},
				{
					"id":"4",
					"imgurl":"../app/images/04.png",
					"name":"星星点灯4",
					"zan":5,
					"pl":"学习很多东西，简直是大神级别，哈哈",
					"comefrom":"华为",
					"time":"12:40",
				}]
			}
		}
	}]);


	/**********************首页组件*******************************/
	//轮播图组件
	directives.directive('mbanner',[function(){
		return {
			templateUrl:'../app/html/ma/directives/mbanner.html',
			link(scope,ele,attr){
				//实例化轮播图插件
				var mySwiper = new Swiper ('.mbanner-swiper-container',{
					// loop:true,				    
				    pagination: '.swiper-pagination',
				    paginationClickable: true,
				    paginationBulletRender: function (swiper, index, className) {
				    	return '<span class="' + className + '">' + (index + 1) + '</span>';
				    }
				});
				// $http({
				// 	method:"post",
				// 	url:"http://www.uubook.net:8080/rest/searchArticleByPage",
				// 	data:{
				// 		kw:"node",
				// 		pageSize:10,
				// 		currentPage:1
				// 	}
				// }).then((data)=>{
				// 	console.log(data);
				// })
				
			}
		}
	}])

	//文章内容组件
	directives.directive("mcontent",[function(){
		return {
			templateUrl:'../app/html/ma/directives/mcontent.html',
			link(scope,ele,attr){
				
			}
		}
	}])
})();