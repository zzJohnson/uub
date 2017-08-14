### 地址

http://

### 接口

http://www.uubook.net:8080/rest/findArticleByPage

### 接口描述

分页获取文章列表数据

请求方法
post请求方式

参数说明
pageSize 	每页请求数量（int）
currentPage 第几页（int）

请求字段说明
{
    "msg": "success!",
    "total": 1648,	//文章总的数量
    "code": 0, 	//0 -> 请求成功 非0则请求失败
    "data": [
        {
            "id": "0059b193-e73c-4a1c-823b-6f868fef8c65", 
            "title": "J2EE 中的安全第二部分--j2ee安全应用", //标题
            "description": null,	//内容简介
            "author": "点击查看大图", //作者
            "category": "0",
            "reference": null,
            "descryptUrl": null,
            "releaseTime": null,
            "createOn": null, //创建时间
            "module": 0,
            "content": "<div class=\"dw-footer-corporate-links\"> \n <ul> \n  <li><a href=\"//www.ibm.com/contact/cn/zh/\">联系 IBM</a></li> \n  <li><a href=\"//www.ibm.com/privacy/cn/zh/\">隐私条约</a></li> \n  <li><a href=\"//www.ibm.com/developerworks/community/terms?lang=zh\">使用条款</a></li> \n  <li><a href=\"//www.ibm.com/accessibility/cn/zh/\">信息无障碍选项</a></li> \n  <li class=\"ibm-feedbacklink\"><a href=\"#\">反馈</a></li> \n  <li id=\"ibm-truste-cp\"><a onclick=\"truste.eu.clickListener();return false;\" href=\"#\">Cookie 首选项</a></li> \n </ul> \n</div>" //文章内容
        }]
}

------------------------------------------------------------------------------------------------------------------

接口
http://www.uubook.net:8080/rest/findArticleById

接口描述
根据id返回文章具体内容

请求方法
get请求方式

参数说明
articleId 	文章id（string）

请求字段说明
{
    "msg": "success!",
    "code": 0, //0 -> 请求成功 非0则请求失败
    "data": {
        "id": "0059b193-e73c-4a1c-823b-6f868fef8c65",
        "title": "J2EE 中的安全第二部分--j2ee安全应用",
        "description": null,
        "author": "点击查看大图",
        "category": "0",
        "reference": null,
        "descryptUrl": null,
        "releaseTime": null,
        "createOn": null,
        "module": 0,
        "content": "<div class=\"dw-footer-corporate-links\"> \n <ul> \n  <li><a href=\"//www.ibm.com/contact/cn/zh/\">联系 IBM</a></li> \n  <li><a href=\"//www.ibm.com/privacy/cn/zh/\">隐私条约</a></li> \n  <li><a href=\"//www.ibm.com/developerworks/community/terms?lang=zh\">使用条款</a></li> \n  <li><a href=\"//www.ibm.com/accessibility/cn/zh/\">信息无障碍选项</a></li> \n  <li class=\"ibm-feedbacklink\"><a href=\"#\">反馈</a></li> \n  <li id=\"ibm-truste-cp\"><a onclick=\"truste.eu.clickListener();return false;\" href=\"#\">Cookie 首选项</a></li> \n </ul> \n</div>",
        "relatedArticles": null //无视这个字段
    }
}

------------------------------------------------------------------------------------------------------------------

接口
http://www.uubook.net:8080/rest/searchArticleByPage

接口描述
根据前端传递的关键词进行全文检索，并支持分页

请求方法
post请求方式

参数说明
kw 			搜索关键字（string）
pageSize 	每页请求数量（int）
currentPage 第几页（int）

请求字段说明
{
    "result": 0,
    "took": 582, ／／搜索所用时间，单位毫秒（注，后台查询速度是挺快的，但是网络传输花的时间比较多，但暂时没时间去做优化了）
    "code": 0,
    "data": [
        {
            "id": "90c3f6fd-09e9-4846-ad05-3b70b8705e4a",
            "title": "React入门与进阶之路由",
            "description": "React入门与进阶之路由 \n 在传统的网页应用中，一般是根据用户的操作指向不同的url，然后服务器渲染出不同的html代码，后来有了ajax，在同一页面里，可以为不同操作，指定处理器函数，在不刷新页面的情况下更新局部视图，但是局限依然较大，一旦跳转了URL，依然需要服务器渲染模板返回；而在Backbone，Angular，React出现以后，在单页面应用中，我们可以给不同URL指定处理器函数，保持URL与视图的同步，渲染模板的功能已经转移到客户端进行，与服务器的交互只涉及到数据，这就是路由的",
            "author": null,
            "category": "IBM",
            "reference": null,
            "descryptUrl": "http://www.open-open.com/lib/view/open1476672571570.html",
            "releaseTime": null,
            "createOn": 1492317000355,
            "module": null,
            "content": "React入门与进阶之路由 \n 在传统的网页应用中，一般是根据用户的操作指向不同的url，然后服务器渲染出不同的html代码，后来有了ajax，在同一页面里，可以为不同操作，指定处理器函数，在不刷新页面的情况下更新局部视图，但是局限依然较大，一旦跳转了URL，依         &lt;Link to=\"/notings\"&gt;noting列表&lt;/Link&gt;\r\n            );\r\n        }\r\n    });\r\n\r\n    React.render(&lt;app /&gt;, document.body);  \n  \n 如上，点击noting列表将导航到项目noting列表展示页，即/notings路由下。 \n  \n   IndexLink 不同于Link指令，Link指令是提供一个链接，而React路由的Link是有激活状态的，如它的activeStyle属性，可以声明当前页面链接激活时的样式，假如有一个Link链接 noting列表，当/notings路由或其子路由（如/notings/123）被渲染时，都会使该链接处于激活状态；而如果使用 noting列表，则需要/notings路由被渲染后才激活该链接。  \n  \n &nbsp; \n &nbsp; \n 来自：http://blog.codingplayboy.com/2016/10/24/react_router/ \n &nbsp;"
        }]

