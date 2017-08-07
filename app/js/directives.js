;(function(){
	var directives = angular.module('directives',[]);

	/**********************头部导航栏start*******************************/

//----------登录注册的组件
	//头部
	directives.directive('logheader',[function(){
		return {
			templateUrl:'../app/html/John/directive/logheader.html',
			link:function(scope,ele,attr){
				scope.abc = '123';
				scope.isSelected = true;
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
				console.log('获取到的userlist：',userlist)

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
								var user = {name:i.un,psw:i.psw};
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
				//判断cookie中有无用户列表，有则获取，无则创建
				var cookies = document.cookie;
				var userlist = [];
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
					console.log('注册')
					var user = {
						un:scope.username,
						psw:scope.password
					};
					user = JSON.stringify(user);
					userlist.push(user);

					userlist = JSON.stringify(userlist);

					// console.log(userlist);

					document.cookie = 'userlist='+userlist;
					alert('注册成功');
				}
			}
		}
	}]);
//------------mine的组件
	//头部
	directives.directive('xmyh',[function(){
		return {
			templateUrl:"../app/html/John/directive/xmyh.html",
			link(scope,ele,attr){
				scope.user = JSON.parse(localStorage.getItem('user'));
				if (!scope.user) {
					alert('请先登录');
					location.href = "#!/logreg/login";
				}
				console.log(scope.user);

				//退出
				scope.quit = function(){
					console.log('退出');
					localStorage.removeItem('user');
					window.location.reload();
				};

				//tabs选择
				scope.tabs = [{
					id:1,
					text:'我的动态'
				},{
					id:2,
					text:'我的收藏'
				},{
					id:3,
					text:'消息中心'
				}];

				scope.selectedTab = 2;

				scope.select = function(a){
					console.log(a)
					scope.selectedTab = a;
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

