;(function(){
	var directives = angular.module('directives',[]);

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
				console.log(userlist)

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

